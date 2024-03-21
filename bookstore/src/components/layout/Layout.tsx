import { Footer } from './Footer';
import { Navbar } from './Navbar';
import { Outlet } from 'react-router-dom';

export function Layout() {
  return (
    <>
      <Navbar />
      <main className="d-flex flex-column justify-content-evenly align-items-center w-75 mx-auto p-5 rounded-4" style={{ marginBottom: '80px', backgroundColor: '#fff' }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
