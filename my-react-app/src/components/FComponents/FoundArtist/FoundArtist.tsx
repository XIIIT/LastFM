import { useState, useEffect } from "react";
import "./FoundArtist.css";

interface Artist {
  name: string;
  listeners: string; // Изменено на string, так как API возвращает строку
  image_url: string;
}

const FoundArtist = ({ query }: { query: string | null }) => {
  const [foundArtist, setFoundArtist] = useState<Artist[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const API_KEY = "64ac7e2d7b5b962843b85adacdf76ca9";

  useEffect(() => {
    // Не делаем запрос если query пустой
    if (!query) {
      setFoundArtist([]);
      return;
    }

    const fetchArtists = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `https://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${encodeURIComponent(
            query
          )}&api_key=${API_KEY}&limit=8&format=json`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        if (!data?.results?.artistmatches?.artist) {
          setFoundArtist([]);
          return;
        }

        const processedArtists = data.results.artistmatches.artist.map(
          (artist: any) => {
            const extralargeImage = artist.image?.find(
              (img: any) => img.size === "extralarge"
            );

            return {
              name: artist.name,
              listeners: artist.listeners,
              image_url:
                extralargeImage?.["#text"] ||
                "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
            };
          }
        );

        setFoundArtist(processedArtists);
      } catch (err) {
        console.error("Ошибка при получении артистов:", err);
        setError("Failed to fetch artists");
        setFoundArtist([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchArtists();
  }, [query]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <section className="artists-section">
      <h2 className="section-title">Artists</h2>
      <ol className="artists-list">
        {foundArtist.length > 0 ? (
          foundArtist.map((artist, index) => (
            <li key={`${artist.name}-${index}`} className="artist-card">
              <div
                className="artist-image-container"
                style={{ backgroundImage: `url(${artist.image_url})` }}
              >
                <div className="artist-info">
                  <h3 className="artist-name">{artist.name}</h3>
                  <p className="artist-listeners">
                    {artist.listeners} listeners
                  </p>
                </div>
              </div>
            </li>
          ))
        ) : (
          <p className="no-results">No artists found.</p>
        )}
      </ol>
    </section>
  );
};

export default FoundArtist;
