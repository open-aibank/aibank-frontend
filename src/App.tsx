import Footer from "@/components/Footer";
import Home from "@/pages/home/Home";
import Header from "@/components/Header";
import { useTranslation } from "react-i18next";

import styles from "./App.module.scss";
import { getMenuItems } from "@/configs/menuConfig";

export default function App() {
  const { i18n } = useTranslation();
  const menuItems = getMenuItems(i18n.language);

  return (
    <div>
      <Header items={menuItems} />
      <main className={styles.main}>
        <Home />
      </main>
      <Footer />
    </div>
  );
}
