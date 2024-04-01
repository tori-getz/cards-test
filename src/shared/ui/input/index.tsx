import React, { forwardRef } from "react";
import cls from './input.module.sass';

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
}

export const Input: React.FC<IInputProps> = forwardRef<HTMLInputElement, IInputProps>((  {
  ...rest
}, ref) => {
  return (
    <input ref={ref} className={cls.input} {...rest} />
  );
});
