// import React from 'react';
// import RootLayout from './RootLayout';
// import styles from '../styles/page.module.css';
// const page: React.FC = () => {
//   return (
//     <RootLayout>
//       <h1 className={styles.title}>Genesis Blog</h1>
//       <p className={styles.text}></p>
//       <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
//       <a href="" className={styles.btn}>See Ninja Listing</a>
//       {/* Other page content */}
//     </RootLayout>
//   );
// };

// export default page; 
import React from 'react';
import RootLayout from './RootLayout';
import styles from '../styles/page.module.css';
import Link from 'next/link';

const Page: React.FC = () => {
  return (
    <RootLayout>
      <h1 className={styles.title}>Genesis Blog</h1>
      <p className={styles.text}></p>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
      <Link href="/listing/"><a className={styles.btn}>See Ninja Listing</a></Link>
      {/* Other page content */}
    </RootLayout>
  );
};

export default Page;

