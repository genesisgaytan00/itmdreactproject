import React from 'react';
import RootLayout from './RootLayout';
import styles from '../styles/page.module.css';
import Nav from '../comps/Navbar';

const page: React.FC = () => {
  return (
    <RootLayout>
      <h1 className={styles.title}>Genesis Blog</h1>
      <img src='/_89A3967 2.JPG' alt="Genesis Gaytan" />

      <p className={styles.text}>
        Hi! Welcome to my Blog Page where you can navigate to different posts, learn more about me and joing the mailing list.
      </p>
      <a href="/about" className={styles.btn}>
        Click here to join Mailing List
      </a>
      {/* Other page content */}
    </RootLayout>
  );
};

export default page;




