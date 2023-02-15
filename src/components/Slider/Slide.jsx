import slide1 from "../../assets/slide1.png";
import arrow from "../../assets/arrow.svg";

const Slide = () => {
    return (
        <>
            <div className="slider-container">

                <div className="slider">

                    <div className="slide active">
                        <div className="slide-body">
                            <h1>Первый в мире магазин брендовой одежды</h1>
                            <p>*по продажам, среди конкурентов</p>
                            <button>К покупкам</button>
                        </div>
                        <img src={slide1} alt="slide" /> 
                    </div>

                    <div className="slider-arrow">
                        <img src={arrow} alt="arrow" />
                    </div>

                </div>

            </div>
        </>
    )
}

export default Slide;