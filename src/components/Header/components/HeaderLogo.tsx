import logoUrl from "@/assets/logo.png";

import styles from "../Header.module.scss";

type Props = {
  alt?: string;
};

export default function HeaderLogo({ alt = "Logo" }: Props) {
  return (
    <a className={styles.logoLink} href="/" aria-label="Go to top">
      <img className={styles.logoImage} src={logoUrl} alt={alt} />
    </a>
  );
}
