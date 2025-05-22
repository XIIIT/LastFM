import { Link } from "react-router-dom";
import "./Music.css";
import { useState, useEffect } from "react";
import TrackList from "../../components/FComponents/TrackList/TrackList";

interface Artist {
  name: string;
  image_url: string;
  tags: string;
}

const Music = () => {
  const [popularArtist, setPopularArtist] = useState<Artist[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!isLoading) return; // Если данные уже загружены, выходим

    const fetchArtists = async () => {
      try {
        const response = await fetch(
          "https://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=64ac7e2d7b5b962843b85adacdf76ca9&limit=12&format=json"
        );
        const data = await response.json();

        const artistPromises = data.artists.artist.map(async (artist: any) => {
          try {
            const tagsResponse = await fetch(
              `https://ws.audioscrobbler.com/2.0/?method=artist.getTags&artist=${artist.name}&User=RJ&api_key=64ac7e2d7b5b962843b85adacdf76ca9&format=json`
            );
            const tagsData = await tagsResponse.json();

            let tagValue = "";

            if (
              tagsData.tags &&
              Array.isArray(tagsData.tags.tag) &&
              tagsData.tags.tag.length > 0
            ) {
              tagValue = tagsData.tags.tag[0].name || "";
            }

            // Проблема в том, что для всех image из API у нас одно и тоже значение #text с ссылкой (Оно и понятно. Иначе много памяти скушает с сервера, хотя для альбомов почему-то есть...).
            // Соответственно отобразить изображения невозможно, так как их попросту нет в API...
            // Если надо красиво - можно сделать так же, как и в варианте с тегами (ручками добавлять фото).
            // Но здесь я просто показал работу с fetch и как бы я это реализовал, чтобы не делать кучу HTML/JSX кода.
            const extralargeImage = artist.image.find(
              (image: any) => image.size === "extralarge"
            );

            if (extralargeImage && extralargeImage["#text"]) {
              return {
                name: artist.name,
                image_url: extralargeImage["#text"],
                tags: tagValue,
              };
            } else {
              return null;
            }
          } catch (error) {
            console.error(
              `Ошибка при получении тегов для ${artist.name}:`,
              error
            );
            return null;
          }
        });

        const artistsWithTags = (await Promise.all(artistPromises)).filter(
          (artist) => artist !== null
        ) as Artist[];

        setPopularArtist(artistsWithTags);
      } catch (error) {
        console.error("Ошибка при получении списка артистов:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchArtists();
  }, [isLoading]);

  return (
    <div className="main-content">
      <div className="content_top">
        <div className={`container content_top_lower`}>
          <h1 className="content__header_top">Music</h1>
          <nav className="navigation_minimal">
            <ul className="navlist__items">
              <li className="navlist__item">
                <Link to="/music" className={`navlist__link active`}>
                  Overview
                </Link>
              </li>
              <li className="navlist__item">
                <Link to="/music/+releases/out-now" className="navlist__link">
                  New Releases
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div data-require="pages/music">
        <div className="container page-content">
          <div className="music__section">
            <h2 className="music__section_header">Tags to explore</h2>
          </div>
          <div className="music__tags">
            <div className="music__featured bg_img_1"></div>
            <div className="music__featured featured__container">
              <div className="music__featured bg_img_2">
                <div className="bg_img_2_color"></div>
                <span>rock</span>
              </div>
              <div className="music__featured bg_img_3">
                <div className="bg_img_3_color"></div>
                <span>hip-hop</span>
              </div>
              <div className="music__featured bg_img_4">
                <div className="bg_img_4_color"></div>
                <span>indie</span>
              </div>
              <div className="music__featured bg_img_5">
                <div className="bg_img_5_color"></div>
                <span>jazz</span>
              </div>
              <div className="music__featured bg_img_6">
                <div className="bg_img_6_color"></div>
                <span>reggae</span>
              </div>
              <div className="music__featured bg_img_7">
                <div className="bg_img_7_color"></div>
                <span>british</span>
              </div>
              <div className="music__featured bg_img_8">
                <div className="bg_img_8_color"></div>
                <span>punk</span>
              </div>
              <div className="music__featured bg_img_9">
                <div className="bg_img_9_color"></div>
                <span>80s</span>
              </div>
              <div className="music__featured bg_img_10">
                <div className="bg_img_10_color"></div>
                <span>dance</span>
              </div>
            </div>
            <div className="music__featured featured__container">
              <div className="music__featured bg_img_11">
                <div className="bg_img_11_color"></div>
                <span>acoustic</span>
              </div>
              <div className="music__featured bg_img_12">
                <div className="bg_img_12_color"></div>
                <span>rnb</span>
              </div>
              <div className="music__featured bg_img_13">
                <div className="bg_img_13_color"></div>
                <span>hardcore</span>
              </div>
              <div className="music__featured bg_img_14">
                <div className="bg_img_14_color"></div>
                <span>country</span>
              </div>
              <div className="music__featured bg_img_15">
                <div className="bg_img_15_color"></div>
                <span>blues</span>
              </div>
              <div className="music__featured bg_img_16">
                <div className="bg_img_16_color"></div>
                <span>alternative</span>
              </div>
              <div className="music__featured bg_img_17">
                <div className="bg_img_17_color"></div>
                <span>classical</span>
              </div>
              <div className="music__featured bg_img_18">
                <div className="bg_img_18_color"></div>
                <span>rap</span>
              </div>
              <div className="music__featured bg_img_19">
                <div className="bg_img_19_color"></div>
                <span>country</span>
              </div>
            </div>
            <div className="music__featured bg_img_20"></div>
          </div>
        </div>
        <div className="container page-content">
          <div className="music__section">
            <h2 className="music__section_header">Hot right now</h2>
          </div>
          <div className="music__more_artist">
            {popularArtist.map((artist, id) => (
              <div className="artist-box" key={id}>
                <div
                  className="artist-img"
                  style={{
                    backgroundImage: `url(${artist.image_url})`,
                  }}
                ></div>
                <p className="artist-name">{artist.name}</p>
                <p className="artist-tags">{artist.tags}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="container page-content">
          <div className="music__section">
            <h2 className="music__section_header">Popular tracks</h2>
          </div>
          <TrackList />
        </div>
      </div>
    </div>
  );
};

export default Music;
