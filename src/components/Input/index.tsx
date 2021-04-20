import React, { useRef } from 'react';
import { Formik, Field } from 'formik';
import { Container } from './style';

interface InputProps {
  icon?: string;
  placeholder: string;
  type: string;
  name: string;
}

export const Input = ({ icon, placeholder, type, name }: InputProps) => {
  const inputRef = useRef<any>(null);
  return (
    <Container>
      {icon && <img src={icon} onClick={() => inputRef.current.focus()} />}
      <Field name={name} ref={inputRef} type={type} placeholder={placeholder} />
    </Container>
  );
};
