import type { HeaderNavItem } from "../types";

import { useTranslation } from "react-i18next";
import { useMemo, useRef, useState } from "react";

import DropdownMenu from "./DropdownMenu";
import arrowDownIcon from "@/assets/menus/arrow_down.svg";
import styles from "../Header.module.scss";

type Props = {
  items: HeaderNavItem[];
  onItemClick: (id: string) => void;
};

export default function HeaderNav({ items, onItemClick }: Props) {
  const { t } = useTranslation();
  const [activeId] = useState<string>("");
  const [openDropdownId, setOpenDropdownId] = useState<string | null>(null);
  const navListRef = useRef<HTMLUListElement>(null);
  const closeTimeoutRef = useRef<number | null>(null);

  // useEffect(() => {
  //   const sections = items.filter(item => !item.href && !item.hasDropdown).map(item => item.id);
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           setActiveId(entry.target.id);
  //         }
  //       });
  //     },
  //     { threshold: 0.3, rootMargin: "-80px 0px -50% 0px" }
  //   );
  //
  //   sections.forEach((id) => {
  //     const element = document.getElementById(id);
  //     if (element) observer.observe(element);
  //   });
  //
  //   return () => observer.disconnect();
  // }, [items]);

  const handleNavItemClick = (item: HeaderNavItem) => {
    if (item.hasDropdown) {
      return;
    }
    if (item.href) {
      return;
    }
    onItemClick(item.id);
  };

  // hover navItem 时设置对应的 dropdown ID
  const handleItemHover = (itemId: string) => {
    setOpenDropdownId(itemId);
  };

  // 鼠标移出 navList 时延迟关闭
  const handleMouseLeave = () => {
    closeTimeoutRef.current = window.setTimeout(() => {
      setOpenDropdownId(null);
    }, 100);
  };

  const dropDownMenu = useMemo(() => {
    const list = openDropdownId
      ? items.find((n) => n.hasDropdown && n.id === openDropdownId)
      : null;
    return list?.dropdownItems || [];
  }, [items, openDropdownId]);

  return (
    <nav className={styles.nav} aria-label="Primary">
      <ul className={styles.navList} ref={navListRef} onMouseLeave={handleMouseLeave}>
        {items.map((item) => {
          const hasDropdown = item.hasDropdown && item.dropdownItems;
          const isDropdownOpen = openDropdownId === item.id;

          return (
            <li
              key={item.id}
              className={`${styles.navListItem} ${openDropdownId === item.id ? styles.navItemActive : ""}`}
            >
              {hasDropdown ? (
                <div className={styles.navItemWrapper}>
                  <button
                    className={`${styles.navButton} ${activeId === item.id || isDropdownOpen ? styles.active : ""}`}
                    type="button"
                    onClick={() => handleNavItemClick(item)}
                    onMouseEnter={() => handleItemHover(item.id)}
                  >
                    {t(`header.nav.${item.id}`)}
                    <img
                      src={arrowDownIcon}
                      alt=""
                      className={`${styles.dropdownArrow} ${isDropdownOpen ? styles.arrowUp : ""}`}
                    />
                  </button>
                </div>
              ) : item.href ? (
                <a
                  className={styles.navButton}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => handleItemHover(item.id)}
                >
                  {t(`header.nav.${item.id}`)}
                </a>
              ) : (
                <button
                  className={`${styles.navButton} ${activeId === item.id ? styles.active : ""}`}
                  type="button"
                  onClick={() => handleNavItemClick(item)}
                  onMouseEnter={() => handleItemHover(item.id)}
                >
                  {t(`header.nav.${item.id}`)}
                </button>
              )}
            </li>
          );
        })}
        {!!dropDownMenu?.length && <DropdownMenu items={dropDownMenu} />}
      </ul>
    </nav>
  );
}
