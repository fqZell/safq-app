import logo from "../../assets/allLogo.png";
import basket from "../../assets/basket.svg";
import account from "../../assets/account.svg";
import Slide from "../Slider/Slide";

const Header = () => {
    return (
        <>
            <header>
                <div className="header-container">


                        <div className="header-logo">
                            <img src={logo} alt="logo" />
                            <h1>SAFQ</h1>
                        </div>

                        <nav>

                        <ul>
                            <li><a href="#">Товары</a></li>
                            <li><a href="#">Информация</a></li>
                        </ul>

                        <div className="header-icons">
                            <img src={basket} alt="basket" />
                            <img src={account} alt="account" />
                        </div>

                        </nav>


                </div>

                <div className="header-line"></div>

                <Slide />
            </header>
        </>
    )
}

export default Header;