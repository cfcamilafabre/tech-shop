import styled from "styled-components"

export const StyledProductCard = styled.div`
display: flex;
flex-direction: column;
`

export const ProductCard = ({ name, price, img}) => {
    return (
        <StyledProductCard>
            <img src={img}/>
            <span>{name}</span>
            <span>{price}</span>
        </StyledProductCard>
    );
}

export default ProductCard