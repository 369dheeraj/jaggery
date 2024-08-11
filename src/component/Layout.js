import '../stylesheet/layout.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faOpencart } from '@fortawesome/free-brands-svg-icons';
import { faSmile, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux'

import ProductImage from './ProductImage';
import ButtonComponent from './ButtonComponent';
import Menu from './Menu';
import AddProduct from './AddProduct';
import Cart from '../component/feature/Cart'
import { addToCart } from './feature/CartSlice'

import getProductList from '../service/getProductList';
import { useEffect,useState } from 'react';

function Layout() {
    const facebookIcon = faFacebook;
    const twitterIcon = faTwitter;
    const instagramIcon = faInstagram;
    const addCart = faCartShopping;
    const like = faSmile;
    const product_row = { row: 4 };
    const dispatch = useDispatch()
    const [products,setProducts] = useState([]);
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    /*const products = [
        { path: 'jaggery_icon.avif', title: 'Organic Jaggery' },
        { path: 'jaggery_icon.avif', title: 'Natural Jaggery' },
        { path: 'jaggery_icon.avif', title: 'Jaggery Powder' },
        { path: 'jaggery_icon.avif', title: 'Corn Jaggery' },
        { path: 'jaggery_icon.avif', title: 'Jaggery Powder' },

    ];*/


    useEffect(()=>{
        const fetchProductList = async() => {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                if (!response.ok) {
                  throw new Error(`HTTP error! status: ${response.status}`);   
        
                }
                const data = await response.json();
                setProducts(data);   
        
                console.log(data);
                console.log('Length', data.length);
              } catch (error) {
                setIsError(true);
                setErrorMessage(error.message || 'An error occurred while fetching products.'); // Provide a default error message
                console.error('Error fetching products:', error); // Log the error for debugging
              }
        }
        fetchProductList();
    },[]);

    return (
        <>
            <div className='flex-container'>
                <div className='flex-container1'>
                    <div className="logo">
                        <img src='jaggery_icon.avif' />
                    </div>
                    <div className='flex-container2'>
                        <div class="menu">
                            <Cart />
                            <Menu />
                            <AddProduct/>
                        </div>
                        <div className='icon'>
                            <div><FontAwesomeIcon icon={facebookIcon} /></div>
                            <div><FontAwesomeIcon icon={twitterIcon} /></div>
                            <div><FontAwesomeIcon icon={instagramIcon} /></div>
                            <div>
                                Cart
                            </div>
                        </div>
                    </div>
                </div>


                {
                    <div className='flex-container3'>
                        { isError ?
                          <h1>No product to display</h1> :
                            products.map((product) => (
                                <ProductImage path={product.image} title={product.title.slice(0,30)} key={product.id}>
                                    <ButtonComponent button_name="Buy" />
                                    <ButtonComponent button_name="Add Cart"
                                      handleClickAddToCart={() => {
                                        dispatch(addToCart(product))
                                      }}
                                    >
                                        <FontAwesomeIcon icon={addCart} />
                                    </ButtonComponent>
                                    <ButtonComponent button_name="Like ">
                                        <FontAwesomeIcon icon={like} />
                                    </ButtonComponent>
                                </ProductImage>
                            ))
                        }
                    </div>
                }


            </div>
        </>
    );
}

export default Layout;