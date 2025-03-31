
import { Link } from "react-router-dom";
// import { useAppSelector } from "../../../hooks/redux";
import "./Header.css";
import LastFM from "./Logo.tsx";


const Header = () => {
    // const { isAuthenticated } = useAppSelector(state => state.auth);
    // const location = useLocation();

    // const isActive = (path: string) => {
    //     return location.pathname === path;
    // };

    return (
        <header className="Header">
            <div className="container">
                <div className="container__logo">
                    <Link to="/" className="container__link">
                        <LastFM />
                    </Link>
                </div>
                <nav className="container__nav">
                    <a href="/search" className="search-toggle"> Search </a>
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
        </header>
    )

}

export default Header;