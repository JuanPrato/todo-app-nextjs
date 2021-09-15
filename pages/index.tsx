import type { NextPage } from 'next'
import styles from "../styles/Home.module.css";
import LoginForm from "../components/Login/LoginForm";

const Home: NextPage = () => {
  return (
    <div className={styles.login}>
        <LoginForm/>
    </div>
  )
}

export default Home
