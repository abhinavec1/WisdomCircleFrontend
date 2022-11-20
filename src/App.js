import React from 'react';
import styles from './App.module.scss'
import { LoginForm, SideBar } from './components';

const App = () => {
  return (
    <div className={styles.app}>
      <div className={styles.sidebar}>
        <SideBar />
      </div>
      <div className={styles.content}>
        <LoginForm />
      </div>
    </div>
  );
}

export default App;
