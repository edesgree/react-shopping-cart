import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ cartCount }) {
  return (
    <>
      <main className="App columns">
        <Header cartCount={cartCount} />
        <Outlet />
        <Footer />
      </main>
    </>
  );
}
