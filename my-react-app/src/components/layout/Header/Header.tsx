
import { Link } from "react-router-dom";
// import { useAppSelector } from "../../../hooks/redux";
import "./Header.css";
import LastFM from "./Logo.tsx";
import { useState, useRef, useEffect } from "react";



const Header = () => {

    const [isSearchEnable, setIsSearchEnable] = useState(false);
    const searchBoxRef = useRef<HTMLDivElement>(null);
    const [searchValue, setSearchValue] = useState<string>('');
    // const { isAuthenticated } = useAppSelector(state => state.auth);
    // const location = useLocation();

    // const isActive = (path: string) => {
    //     return location.pathname === path;
    // };

    const handleSearchClick = () => {
        setIsSearchEnable(!isSearchEnable);
    }

    const handleInputChange = (e: any) => {
        setSearchValue(e.target.value);
    }

    useEffect(() => {

        const handleClickOutside = (event: MouseEvent) => {
            if (searchBoxRef.current && !searchBoxRef.current.contains(event.target as Node)) {
                setSearchValue('');
                setIsSearchEnable(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [searchBoxRef, setIsSearchEnable]);
    

    return (
        <header className="Header">
            {!isSearchEnable ? (
                <div className="container">
                    <div className="container__logo">
                        <Link to="/" className="container__link">
                            <LastFM />
                        </Link>
                    </div>
                    <nav className="container__nav">
                        <button onClick={handleSearchClick} className="search-toggle"></button>
                        <div className="container__navlist">
                            <ul className="navlist__items">
                                <li className="navlist__item">
                                    <Link to="/dashboard" className="navlist__link navlist__link-hover"> 
                                        Live
                                    </Link>
                                </li>
                                <li className="navlist__item">
                                    <Link to="/music" className="navlist__link navlist__link-hover" >
                                        Music
                                    </Link>
                                </li>
                                <li className="navlist__item">
                                    <Link to="/charts" className="navlist__link navlist__link-hover">
                                        Charts
                                    </Link>
                                </li>
                                <li className="navlist__item">
                                    <Link to="/events" className="navlist__link navlist__link-hover">
                                        Events
                                    </Link>
                                </li>
                            </ul>
                            <ul className="navlist__auth">
                                <li className="navlist__auth-item">
                                    <Link to="/login" className="navlist__link navlist__sign-in navlist__link-hover">Log In</Link>
                                </li>
                                <li className="navlist__auth-item">
                                    <Link to="/join" className="navlist__link navlist__sign-up">Sign Up</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            ) : (
                    <div className="search-box" ref={searchBoxRef}>
                        <input type="text" placeholder="Search for music..." className="search-box__input-area" autoFocus value={searchValue} onChange={handleInputChange}/>
                        <div className="search-buttons">
                            <div className="search-buttons__input-cancel" onClick={() => {setSearchValue(''); setIsSearchEnable(false)}}></div>
                            <Link to={`/search?query=${encodeURIComponent(searchValue)}`} onClick={() => {setSearchValue(''); setIsSearchEnable(false)}} className="search-buttons__input-submit"></Link>
                        </div>
                    </div>
            )}
        </header>
    )

}

export default Header;