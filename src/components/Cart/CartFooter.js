import { number } from 'prop-types';
import CartTotal from './CartTotal';
import { useCart } from './CartContext';

const CartFooter = ({ ...restProps }) => {
  const {carts:{totalPrice}} = useCart();

  return (
  <footer {...restProps}>
    <CartTotal>{totalPrice}</CartTotal>
  </footer>
)};

CartFooter.propTypes = {
  total: number,
};

export default CartFooter;
