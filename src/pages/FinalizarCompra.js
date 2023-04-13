import React from 'react';
import { Form,
  FormContainer,
  Label,
  Input,
  Strong,
  Button } from '../styles/FinalizarCompra/styles';

class FinalizarCompra extends React.Component {
  render() {
    return (
      <FormContainer>
        <Form>
          <Strong>Insira seus dados:</Strong>
          <Label htmlFor="nome">
            Nome Completo:
            <Input
              type="text"
              data-testid="checkout-fullname"
              id="nome"
            />
          </Label>
          <Label htmlFor="email">
            Email:
            <Input
              type="email"
              data-testid="checkout-email"
              id="email"
            />
          </Label>
          <Label htmlFor="cpf">
            CPF:
            <Input
              type="text"
              id="cpf"
              data-testid="checkout-cpf"
            />
          </Label>
          <Label htmlFor="telefone">
            Telefone:
            <Input
              type="text"
              id="telefone"
              data-testid="checkout-phone"
            />
          </Label>
          <Label htmlFor="cep">
            CEP:
            <Input
              type="text"
              id="cep"
              data-testid="checkout-cep"
            />
          </Label>
          <Label htmlFor="endereco">
            Endereço:
            <Input
              type="text"
              id="endereco"
              data-testid="checkout-address"
            />
          </Label>
          <Button href="/">Enviar</Button>
        </Form>
      </FormContainer>
    );
  }
}

export default FinalizarCompra;
