import styled from 'styled-components';

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #183829;
`;

const Strong = styled.strong`
  margin-bottom: 10px;
  color: white;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  color: white;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  width: 100%;
  margin-top: 5px;
`;

const Button = styled.a`
  font-weight: bolder;
  text-decoration: none;
  margin-top: 10px;
  align-self: center;
  border-radius: 5px;
  font-size: 16px;
  padding: 5px;
  color: white;
`;

export {
  FormContainer,
  Form,
  Label,
  Input,
  Strong,
  Button,
};
