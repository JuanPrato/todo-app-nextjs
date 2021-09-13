import type { NextPage } from 'next'
import styles from "../styles/Home.module.css";
import LoginForm from "../components/LoginForm";

const Home: NextPage = () => {
  return (
    <div className={styles.home}>
        <LoginForm/>
    </div>
  )
}

export default Home
