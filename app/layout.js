import "@styles/globals.css";

import Nav from '@components/Nav';

export const metadata = {
  title: 'Portfolio',
  description: "Nick Morris's Professional Portfolio",
};

const layout = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        <main className='app'>
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
};

export default layout;