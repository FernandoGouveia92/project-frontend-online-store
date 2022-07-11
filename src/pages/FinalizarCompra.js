import React from 'react';

class FinalizarCompra extends React.Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="nome">
            Nome Completo:
            <input
              type="text"
              data-testid="checkout-fullname"
              id="nome"
            />
          </label>
          <label htmlFor="email">
            Email:
            <input
              type="email"
              data-testid="checkout-email"
              id="email"
            />
          </label>
          <label htmlFor="cpf">
            CPF:
            <input
              type="text"
              id="cpf"
              data-testid="checkout-cpf"
            />
          </label>
          <label htmlFor="telefone">
            Telefone:
            <input
              type="text"
              id="telefone"
              data-testid="checkout-phone"
            />
          </label>
          <label htmlFor="cep">
            CEP:
            <input
              type="text"
              id="cep"
              data-testid="checkout-cep"
            />
          </label>
          <label htmlFor="endereco">
            Endereço:
            <input
              type="text"
              id="endereco"
              data-testid="checkout-address"
            />
          </label>
        </form>
      </div>
    );
  }
}

export default FinalizarCompra;
