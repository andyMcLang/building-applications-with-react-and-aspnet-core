import React from 'react';

export default function Button({
  disabled = false,
  type = "button",
  className = "",
  onClick,
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      disabled={disabled}
      type={type}
      className={className}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  // Lisää custom-props tähän jos tarpeen
  children: React.ReactNode;
}