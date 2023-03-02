import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export default function Layout(props) {
  return (
    <>
      <main className="App columns">
        <Header />
        <Outlet />
        <Footer />
      </main>
    </>
  );
}
