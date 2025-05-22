import { useSearchParams } from "react-router";
import "./Search.css";

import FoundArtist from "@/components/FComponents/FoundArtist/FoundArtist";
import FoundAlbum from "@/components/FComponents/FoundAlbum/FoundAlbum";
import FoundTrack from "@/components/FComponents/FoundTrack/FoundTrack";
import SearchBar from "@/components/FComponents/SearchBar/SearchBar";

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");

  return (
    <div className="main-content">
      <div className="search-content">
        <h1 className="search-title">Search results for "{query}"</h1>

        <div className="top-results">
          <div className="result-categories">
            <button className="category-button">Top Results</button>
            <button className="category-button">Artists</button>
            <button className="category-button">Albums</button>
            <button className="category-button">Tracks</button>
          </div>
        </div>

        <div className="content">
          <div className="search-area">
            <SearchBar />
          </div>
          <FoundArtist query={query} />
          <FoundAlbum query={query} />
          <FoundTrack query={query} />
        </div>
      </div>
    </div>
  );
};

export default Search;
