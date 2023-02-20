import product_1 from "../../assets/product-1.png";


const Product = ({ product }) => {
    return (
        <>
            <div className="cart">
                <img src={product.preview} alt="Продукт" />

                <div className="cart-title">
                    <p>{product.title}</p>

                    <h4>Цена: {product.price}</h4>
                </div>
            </div>
        </>
    )
}

export default Product;