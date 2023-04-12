import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  gap: 8px;

`;

const ProductDetailTopPage = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  background-color: #183829;

`;

const ProductDetailContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 50%;
  height: 100%;
  background-color: white;
  border-radius: 8px;
  padding: 8px;

`;

const ProductImg = styled.img`
  width: 25%;
  padding: 5px;
`;

const ProductSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  padding: 5px;
  margin: 5px;
  width: 80%;
`;

const AddToCartButton = styled.button`
  font-weight: bolder;
  height: 30px;
  font-size: 15px;
  padding: 4px;
`;

const ProductSectionForm = styled.section`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  background-color: white;
  border-radius: 8px;

  margin-bottom: 10px;

  width: 98%;
`;

const ProductSectionFormReview = styled.form`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  border-radius: 8px;
  padding: 8px;
  margin-top: 10px;
  margin-bottom: 15px;
  gap: 8px;

  border-bottom: 3px solid #ccc;
`;

const ReviewScore = styled.select`
  display: flex;
  width: 5%;
  max-width: 5%;
`;

const AddReviewButton = styled.button`
  font-weight: bolder;
  height: 35px;
  font-size: 15px;
  padding: 4px;
  width: 10%;
  max-width: 10%;
`;

const FormTextarea = styled.textarea`
  width: 45%;
  height: 200px;
`;

const ReviewEmail = styled.label`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const ProductFormTitle = styled.p`
  font-weight: bolder;
  font-size: 20px;
  display: flex;
  align-self: center;
`;

export {
  ProductDetailContainer,
  Container,
  ProductImg,
  ProductSection,
  AddToCartButton,
  ProductDetailTopPage,
  ProductSectionFormReview,
  AddReviewButton,
  ProductSectionForm,
  FormTextarea,
  ReviewEmail,
  ReviewScore,
  ProductFormTitle,
};
