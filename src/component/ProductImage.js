import '../stylesheet/productImage.css'

function ProductImage({path,title,children}) {
    return (
        <>
            <div className='flex-container_pi'>
                <div><img src={path} alt="jaggery"/></div>
                <div>{title}</div>
                <div>{children}</div>  
            </div>
        </>
    );
}

export default ProductImage;