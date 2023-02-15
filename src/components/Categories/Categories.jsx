import sneakers from "../../assets/sneakers.png";

const Categories = () => {
    return (
        <>
            <div className="categories-container">

            <h2>Популярные Категории</h2>

            <div className="categories">

                <div className="categories-card">
                    <img src={sneakers} alt="sneakers" />
                    <h3>Кроссовки</h3>
                </div>

                <div className="categories-card">
                    <img src={sneakers} alt="sneakers" />
                    <h3>Кроссовки</h3>
                </div>

                <div className="categories-card">
                    <img src={sneakers} alt="sneakers" />
                    <h3>Кроссовки</h3>
                </div>

                <div className="categories-card">
                    <img src={sneakers} alt="sneakers" />
                    <h3>Кроссовки</h3>
                </div>

                <div className="categories-card">
                    <img src={sneakers} alt="sneakers" />
                    <h3>Кроссовки</h3>
                </div>

                <div className="categories-card">
                    <img src={sneakers} alt="sneakers" />
                    <h3>Кроссовки</h3>
                </div>

            </div>

            </div>
        </>
    )
}

export default Categories;