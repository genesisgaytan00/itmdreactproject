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
const Home: React.FC = () => {
  return (
    <RootLayout>
      <h1 className="text-3xl font-bold mb-4 center">Welcome to the Home Page</h1>
      {/* Other page content */}
    </RootLayout>
  );
};

export default Home;
