import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  gap: 8px;

`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: 10px;
  width: 100%;
  gap: 10px;

  /* border: 3px solid blue; */
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
  /* align-items: center; */
  flex-direction: column;
  background-color: white;
  border-radius: 8px;

  margin-bottom: 10px;

  width: 45%;
`;

const ProductSectionFormReview = styled.form`
  display: flex;
  justify-content: flex-start;
  /* align-items: center; */
  flex-direction: column;
  border-radius: 8px;
  padding: 8px;
  margin-top: 10px;
  margin-bottom: 10px;
  /* width: 100%; */
  gap: 8px;
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
  /* margin-left: 10px; */
  /* display: flex;
  align-self: center; */

  width: 25%;
`;

const FormTextarea = styled.textarea`
  width: 100%;
  height: 200px;
`;

const ReviewEmail = styled.label`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export {
  ProductDetailContainer,
  ContentContainer,
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
};
