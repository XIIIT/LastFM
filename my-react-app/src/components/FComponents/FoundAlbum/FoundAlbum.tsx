import { useState, useEffect } from "react";
import "./FoundAlbum.css";

interface Album {
  name: string;
  artist: string;
  image_url: string;
}

const FoundAlbum = ({ query }: { query: string | null }) => {
  const [foundAlbum, setFoundAlbum] = useState<Album[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const API_KEY = "64ac7e2d7b5b962843b85adacdf76ca9";

  useEffect(() => {
    if (!query) {
      setFoundAlbum([]);
      return;
    }

    const fetchAlbum = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `https://ws.audioscrobbler.com/2.0/?method=album.search&album=${encodeURIComponent(
            query
          )}&api_key=${API_KEY}&limit=8&format=json`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        if (!data?.results?.albummatches?.album) {
          setFoundAlbum([]);
          return;
        }

        const processedAlbum = data.results.albummatches.album.map(
          (album: any) => {
            const extralargeImage = album.image?.find(
              (img: any) => img.size === "extralarge"
            );

            return {
              name: album.name,
              artist: album.artist,
              image_url:
                extralargeImage?.["#text"] ||
                "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
            };
          }
        );

        setFoundAlbum(processedAlbum);
      } catch (err) {
        console.error("Ошибка при получении альбомов:", err);
        setError("Failed to fetch album");
        setFoundAlbum([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAlbum();
  }, [query]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <section className="album-section">
      <h2 className="section-title">Album</h2>
      <ol className="album-list">
        {foundAlbum.length > 0 ? (
          foundAlbum.map((album, index) => (
            <li key={`${album.name}-${index}`} className="album-card">
              <div
                className="album-image-container"
                style={{ backgroundImage: `url(${album.image_url})` }}
              >
                <div className="album-info">
                  <h3 className="album-name">{album.name}</h3>
                  <p className="album-artist">{album.artist}</p>
                </div>
              </div>
            </li>
          ))
        ) : (
          <p className="no-results">No album found.</p>
        )}
      </ol>
    </section>
  );
};

export default FoundAlbum;
