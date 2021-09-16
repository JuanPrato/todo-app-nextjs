import { NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import { Provider } from 'react-redux';
import Header from '../../components/Header/Header';
import LoginForm from '../../components/Login/LoginForm';
import SideBar from '../../components/SideBar/SideBar';
import Tasks from '../../components/Tasks/Tasks';
import { store } from '../../redux/store';
import styles from "../../styles/Home.module.css";

const Home: NextPage = () => {

  const [user, setUser] : any = useState(null);

  const updateUsers = () => {
    setUser(store.getState().user.user);
  }

  useEffect(() => {
    updateUsers();

    store.subscribe(() => {
      updateUsers();
    });
    
  }, []);

  if (!store.getState().user.user) {
    return (
      <div className={styles.login}>
          <LoginForm/>
      </div>
    )
  }

  return (
    <Provider store={store}>
      <div className={"row " + styles.home}>
          <div className={"col-2 " + styles.sidebar}>
            <SideBar user={user}/>
          </div>
          <div className={"col-md-8 col-10 mx-auto " + styles.display}>
            <Header/>
            <Tasks/>
          </div>
      </div>
    </Provider>
  )
}

export default Home;