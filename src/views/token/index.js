import React from 'react';
import { string, func } from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Input from 'components/Input';
import { addToken, statusToken } from 'reduxFlow/reducers/token/action-creators';

const Token = ({ value, changeToken, handleToken }) => (
  <Form onSubmit={(e) => handleToken(e, value)}>
    <Field>
      <Input
        text="Coloque seu token do spotify"
        type="text"
        name="token"
        placeholder="Comece a escrever..."
        value={value}
        handleChange={changeToken}
      />
    </Field>
  </Form>
);

const Form = styled.form`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spaces.large};
  width: 100%;
`;
const Field = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

const mapStateProps = (state) => ({
  value: state.token.token,
});

const mapDispatchToProps = (dispatch) => ({
  changeToken: (event) => {
    dispatch(addToken(event.target.value));
  },
  handleToken: (event, value) => {
    event.preventDefault();
    if (value !== '') {
      dispatch(statusToken(true));
      localStorage.setItem('token', value);
    }
  },
});

Token.propTypes = {
  value: string.isRequired,
  changeToken: func.isRequired,
  handleToken: func.isRequired,
};

export default connect(mapStateProps, mapDispatchToProps)(Token);
