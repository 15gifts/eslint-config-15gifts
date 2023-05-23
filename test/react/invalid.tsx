import React, { type ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  type?: "submit" | "button" | "reset";
  loading?: boolean;
  onClick?: () => void;
  href?: string;
  variant?: "primary" | "secondary";
}

export default function Button({
  children,
  href,
  type = "button",
  loading = false,
  onClick,
  variant = "primary",
}: ButtonProps) {
  const linkProps = {};
  if (href) {
    linkProps = {
      component: "a",
      href,
    };
  }

  const variantMap = {
    secondary: "yellow",
    primary: "red",
  };

  const styles = {
    backgroundColor:   variantMap[variant], // prettier-ignore
  };

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
  );
}
