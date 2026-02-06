import { useTranslation } from "react-i18next";

import styles from "../Header.module.scss";

type Props = {
  onGetStartedClick: () => void;
  onLangToggle: () => void;
};

export default function HeaderActions({ onGetStartedClick, onLangToggle }: Props) {
  const { t } = useTranslation();

  return (
    <div className={styles.actions}>
      <button className={styles.langButton} type="button" onClick={onLangToggle}>
        {t("header.langToggle")}
      </button>
      <button className={styles.getStartedButton} type="button" onClick={onGetStartedClick}>
        {t("header.getStarted")}
      </button>
    </div>
  );
}
