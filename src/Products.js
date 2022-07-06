import './Products.css';
export function Products(props){
    console.log(props.products);
    return(
        <div className='products'>
            <div className='popular-products'>Products</div>
            <div className='items-section'>
                {props.products.items.map((item)=>(
                    <div className='item'>
                        <img className='image' src={item.image_link} alt=""/>
                        <div>{item.title}</div>
                        <div className='product-code'>{item.product_code}</div>
                        <strong>{item.price}</strong> 
                    </div>
                ))}
            </div>

        </div>
    )
}