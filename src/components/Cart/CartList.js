import styled from 'styled-components/macro';
import CartItem from './CartItem';
import CartFooter from './CartFooter';
import { func } from 'prop-types';

export default function CartList({ products }) {
  return (
    <Container>
      {products.map((product) => (
        <CartItem key={product.id} product={product} />
      ))}
      <CartFooter />
    </Container>
  );
}

/* -------------------------------------------------------------------------- */

const Container = styled.ul`
  list-style: none;
  margin: 0;
  padding-left: 0;
`;
