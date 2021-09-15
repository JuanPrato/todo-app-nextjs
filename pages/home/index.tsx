import { QuerySnapshot } from '@firebase/firestore';
import { NextPage } from 'next'
import Router from 'next/dist/shared/lib/router/router';
import React, { useEffect, useState } from 'react'
import { Provider, useStore } from 'react-redux';
import { getCurrentUser, logOut } from '../../api/auth';
import { Task } from '../../api/models/types';
import Header from '../../components/Header/Header';
import LoginForm from '../../components/Login/LoginForm';
import SideBar from '../../components/SideBar/SideBar';
import Tasks from '../../components/Tasks/Tasks';
import { getTasks } from '../../redux/actions/tasks';
import { store } from '../../redux/store';
import styles from "../../styles/Home.module.css";

const Home: NextPage = () => {

  const [user, useUser] : any = useState(null);

  store.subscribe(() => {
    useUser(store.getState().user.user);
  });

  useEffect(() => {

    useUser(store.getState().user.user);

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