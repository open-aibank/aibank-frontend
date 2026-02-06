import DropdownMenuItem from "./DropdownMenuItem";
import type { DropdownItem } from "../types";
import { scrollToSectionId } from "../utils";

import styles from "./DropdownMenu.module.scss";

type Props = {
  items: DropdownItem[];
};

export default function DropdownMenu({ items }: Props) {
  const handleItemClick = (item: DropdownItem) => {
    if (item.href) {
      window.open(item.href, "_blank", "noopener,noreferrer");
    } else if (item.anchorId) {
      scrollToSectionId(item.anchorId);
    }
  };

  return (
    <div className={styles.dropdownWrapper}>
      <div className={`${styles.dropdown} ${styles.isOpen}`}>
        <ul className={styles.menuList}>
          {items.map((item) => (
            <DropdownMenuItem key={item.id} item={item} onClick={handleItemClick} />
          ))}
        </ul>
      </div>
    </div>
  );
}
