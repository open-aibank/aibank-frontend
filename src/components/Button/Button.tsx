import type { AnchorHTMLAttributes, ButtonHTMLAttributes, CSSProperties, ReactNode } from "react";

import styles from "./Button.module.scss";

type ButtonType = "primary" | "default";

type BaseProps = {
  children: ReactNode;
  variant?: ButtonType;
  className?: string;
  style?: CSSProperties;
};

type ButtonAsButton = BaseProps & ButtonHTMLAttributes<HTMLButtonElement> & {
  as?: "button";
  href?: never;
};

type ButtonAsAnchor = BaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & {
  as: "a";
  href: string;
};

type Props = ButtonAsButton | ButtonAsAnchor;

export default function Button({
  children,
  variant = "primary",
  className = "",
  style = {},
  as = "button",
  ...props
}: Props) {
  const sharedProps = {
    className: `${styles.button} ${styles[variant]} ${className}`,
    style,
  };

  if (as === "a") {
    const { href, target, rel, ...anchorProps } = props as ButtonAsAnchor;
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        {...sharedProps}
        {...anchorProps}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      {...sharedProps}
      {...(props as ButtonAsButton)}
    >
      {children}
    </button>
  );
}
