import React, { InputHTMLAttributes, useCallback, useRef } from 'react';
import { Formik, useField } from 'formik';
import * as S from './style';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: string;
}

export const Input = ({ icon, name, ...rest }: InputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [field, meta] = useField(name);

  const handleInputFocus = useCallback(() => inputRef.current?.focus(), []);

  return (
    <>
      <S.Container>
        {icon && (
          <S.ButtonIcon type="button" onClick={handleInputFocus}>
            <img src={icon} />
          </S.ButtonIcon>
        )}
        <input ref={inputRef} {...field} {...rest} />
      </S.Container>
      {meta.error && meta.touched ? <div>{meta.error}</div> : null}
    </>
  );
};
