import styled from 'styled-components';

const Container = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction:column;
  gap: 10px;
  padding: 30px;
`;

const ProductContainer = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* height: auto; */
  width: 100%;
  max-height: 20%;
`;

const ProductCard = styled.div`
  display: flex;
  align-items: center;
  border: 1.5px solid black;
  background-color: white;
  border-radius: 5px;
  flex-direction: column;
  margin: 5px;
  padding: 5px;
  text-align: center;
  width: 75%;
  gap: 7px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);

  transition: all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);

  &:hover {
    transform: scale(1.05);
  }
`;

const ProductImg = styled.img`
  width: 15%;
`;

const ProductText = styled.p`
  font-weight: bolder;
`;

const ProductPrice = styled.p`
  font-weight: bolder;
`;

const ProductQnt = styled.p`
  font-weight:bolder;
  margin-left: 8px;
  margin-right: 8px;
`;

const ProductQntContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 8px;
  height: 35px;
  width: 65px;
`;

export {
  ProductContainer,
  Container,
  ProductCard,
  ProductImg,
  ProductText,
  ProductPrice,
  ProductQnt,
  ProductQntContainer,
};
