import HeaderLogo from "./components/HeaderLogo";
import HeaderNav from "./components/HeaderNav";
import { scrollToSectionId } from "./utils";

import styles from "./Header.module.scss";
import type { HeaderProps } from "./types";

export default function Header({ items, onNavItemClick }: HeaderProps) {
  const handleNavItemClick = (id: string) => {
    onNavItemClick?.(id);
    scrollToSectionId(id);
  };

  return (
    <header className={styles.root}>
      <div className={styles.inner}>
        <div className={styles.headerLeft}>
          <HeaderLogo />
        </div>
        <div className={styles.center}>
          <HeaderNav items={items} onItemClick={handleNavItemClick} />
        </div>
      </div>
    </header>
  );
}
