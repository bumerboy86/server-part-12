import { Link, Outlet } from "react-router-dom";
import styles from "./Layout.module.css";
import Container from "../Container/Container.tsx";

const Layout = () => {
  return (
    <main className={styles.mainLayout}>
      <header>
        <nav>
          <ul>
            <li>
              <Link className={styles.mainNavLink} to={"/"}>
                Главная
              </Link>
            </li>
            <li>
              <Link className={styles.mainNavLink} to={"/cabinet"}>
                Личный кабинет
              </Link>
            </li>
            <li>
              <Link className={styles.mainNavLink} to={"/login"}>
                Вход/Регистрация
              </Link>
            </li>
            <li>
              <Link className={styles.mainNavLink} to={"/about"}>
                О Нас
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <Container>
        <Outlet />
      </Container>
      <footer>
        <p>2023 All right reserved</p>
      </footer>
    </main>
  );
};

export default Layout;
