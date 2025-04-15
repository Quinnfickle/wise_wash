// app/layout.js

import './globals.css';
import Header from './components/header'; // if you're using a header

export const metadata = {
  title: 'Wise Wash',
  description: 'Pressure washing pros',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
