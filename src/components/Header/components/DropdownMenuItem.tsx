import type { DropdownItem } from "../types";

import styles from "./DropdownMenuItem.module.scss";
import { t } from "i18next";

type Props = {
  item: DropdownItem;
  onClick: (item: DropdownItem) => void;
};

export default function DropdownMenuItem({ item, onClick }: Props) {
  const handleClick = () => {
    onClick(item);
  };

  return (
    <li className={styles.menuItem} onClick={handleClick}>
      <img src={item.icon} alt="" className={styles.icon} />
      <div className={styles.content}>
        <div className={styles.title}>{t(item.title)}</div>
        <div className={styles.subtitle}>{t(item.subtitle)}</div>
      </div>
    </li>
  );
}
