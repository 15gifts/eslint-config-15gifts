import React, { useCallback, type ReactNode, useState } from "react";

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
  ...rest
}: ButtonProps) {
  const linkProps = {};
  if (href) {
    linkProps = {
      component: "a",
      href,
    };
  }

  console.log(rest);

  const variantMap = {
    secondary: "yellow",
    primary: "red",
  };

  const styles = {
    ...variantMap,
    backgroundColor:   variantMap[variant], // prettier-ignore
  };

  let a = !linkProps === 2;

  const loading = loading || false;

  const shouldRender = useCallback(() => {
    return !loading;
  }, []);

  if (!shouldRender()) {
    return null;
  }

  const [foo, setFoo] = useState(3);

  return (
    <button
      type={type}
      onClick={onClick}
      {...linkProps}
      style={styles}
      loading={loading}
      foo={foo}
    >
      {children}
    </button>
  );
}
