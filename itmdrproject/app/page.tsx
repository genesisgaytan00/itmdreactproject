// // pages/index.tsx

// import React from 'react';
// import RootLayout from './RootLayout';

// import '../app/globals.css';
// const Home: React.FC = () => {
//   return (
//     <RootLayout>
//       <h1>Welcome to the Home Page</h1>
//       {/* Other page content */}
//     </RootLayout>
//   );
// };

// export default Home;
// pages/index.tsx

import React from 'react';
import RootLayout from './RootLayout';
import '../app/globals.css';
import styles from '../styles/page.css';

const Home: React.FC = () => {
  return (
    <RootLayout>
      <h1 className={styles.title}>Welcome to the Home Page</h1>
      {/* Other page content */}
    </RootLayout>
  );
};

export default Home;
