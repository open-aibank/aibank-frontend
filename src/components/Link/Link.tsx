import type { LinkHTMLAttributes, ReactNode } from "react";

import styles from "./Link.module.scss";

interface LinkProps extends LinkHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  underline?: boolean;
  href?: string;
}

export default function Link({ children, underline = true, className, ...props }: LinkProps) {
  return (
    <a 
      className={`${styles.link} ${underline ? styles.underline : ""} ${className || ""}`}
      target="_blank"
      {...props}
    >
      {children}
    </a>
  );
}
