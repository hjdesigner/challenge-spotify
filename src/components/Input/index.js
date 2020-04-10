import React from 'react';
import { string, func } from 'prop-types';
import styled from 'styled-components';

const Input = ({
  type,
  name,
  placeholder,
  value,
  handleChange,
  text,
}) => (
  <>
    <Label htmlFor={name}>{text}</Label>
    <Field
      type={type}
      id={name}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
    />
  </>
);

const Label = styled.label`
  color: ${({ theme }) => theme.colors.gray};
  font-size: 1.6em;
  margin-bottom: ${({ theme }) => theme.spaces.medium};
  width: 100%;
`;
const Field = styled.input`
  background-color: ${({ theme }) => theme.colors.black};
  border: 0px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
  color: ${({ theme }) => theme.colors.ice};
  font-size: 1.8em;
  font-weight: 700;
  padding: ${({ theme }) => theme.spaces.small};
  width: 100%;

  @media screen and (min-width: ${({ theme }) => theme.media.tablet}) {
    font-size: 4.8em;
  }
`;

Input.defaultProps = {
  type: 'text',
  name: 'text',
  placeholder: 'Digite...',
  value: '',
  text: 'text',
};

Input.propTypes = {
  type: string,
  name: string,
  placeholder: string,
  value: string,
  text: string,
  handleChange: func.isRequired,
};

export default Input;
