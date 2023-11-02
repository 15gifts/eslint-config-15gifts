import React, { type ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode;
  type?: 'submit' | 'button' | 'reset';
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary';
  loading?: boolean;
}

export default function Button({
  children,
  href,
  loading = false,
  onClick,
  type = 'button',
  variant = 'primary',
}: ButtonProps) {
  let linkProps = {}
  if (href) {
    linkProps = {
      component: 'a',
      href,
    }
  }

  const variantMap = {
    primary: 'red',
    secondary: 'yellow',
  }

  const styles = {
    backgroundColor: variantMap[variant],
  }

  /* eslint-disable react/button-has-type */
  return (
    <button
      type={type}
      onClick={onClick}
      {...linkProps}
      style={styles}
      loading={loading}
    >
      {children}
    </button>
  )
}
