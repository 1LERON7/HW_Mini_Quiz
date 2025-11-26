import logo from './logo.svg';
import './App.css';
import Header from './tempates/Header';
import { Link, Outlet } from "react-router";

function App() {
  return (
    <>
    <header>
        <Header/>
    </header>
    <Outlet/>
    </>
  );
}

export default App;
