import type { ReactNode } from "react";

import styles from "./PageShell.module.scss";

type Props = {
  title: string;
  children: ReactNode;
  variant?: "subtitle" | "content";
};

export default function PageShell({ title, children, variant }: Props) {
  // 自动检测：如果没有指定 variant，根据 children 类型判断
  const detectedVariant = variant || (typeof children === "string" ? "subtitle" : "content");

  return (
    <section className={styles.shell}>
      <h2 className={styles.title}>{title}</h2>
      {detectedVariant === "subtitle" ? (
        <p className={styles.subtitle}>{children}</p>
      ) : (
        <div className={styles.content}>{children}</div>
      )}
    </section>
  );
}
