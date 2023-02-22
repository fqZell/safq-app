import cartBasket from "../../assets/basketProduct.svg";

const Product = ({ product }) => {
    return (
        <>
            <div className="cart">
                <img src={product.preview} alt="Продукт" />

                <div className="cart-title">
                    <p>{product.title}</p>

                    <div className="cart-total">
                        Цена: {product.price}
                        <button><img src={cartBasket} alt="basket" /></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product;