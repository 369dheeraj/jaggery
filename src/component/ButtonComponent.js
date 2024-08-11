import '../stylesheet/buttonComponent.css';

function ButtonComponent({ button_name,children,handleClickAddToCart }) {
    const handleButtonClick = () => {
        if (button_name === 'Add Cart') { // Check for exact button name match
          handleClickAddToCart();
        }
      };
    
      return (
        <>
          <button onClick={handleButtonClick}>
            {button_name}
            {children}
          </button>
        </>
      );
}

export default ButtonComponent;