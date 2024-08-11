import React,{useState} from 'react'
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import CartList  from '../CartList'
import '../../stylesheet/cart.css'

export default function Cart() {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const cart = faCartShopping;
    const cartValue = useSelector((state) => state.cartCounter.count)
    const productDetail = useSelector((state) => state.cartCounter.products)
    return (
        <div className="cart-container">
            <FontAwesomeIcon icon={cart} className="cart-icon" />
            <div className="cart-value" onClick={handleOpenModal}>{cartValue}</div>
            {isModalOpen
                && <CartList isOpen={isModalOpen} onClose={handleCloseModal} products={productDetail}/>
            }
        </div>
    );
}
