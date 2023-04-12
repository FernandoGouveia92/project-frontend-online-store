import styled from 'styled-components';

const ReviewContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  padding: 10px;
  margin-top: 15px;

  gap: 7px;
`;

const ReviewEmail = styled.p`
  font-weight: bolder;
`;

export {
  ReviewContainer,
  ReviewEmail,
};
