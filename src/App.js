import logo from './logo.svg';
import RootLayout from './components/RootLayout/RootLayout';
import {   createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../src/components/Home/Home';
import Contact from './components/Contact/Contact';
import About from '../src/components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Footer from '../src/components/Footer/Footer.css';
import './App.css';


let routers = createBrowserRouter([
  {path : '/' , element:<RootLayout/> , children:[
    {index:true, element:<Home/>} ,
    {path : 'about' , element : <About/>} ,
    {path : 'Contact' , element : <Contact/>},
    {path : 'Portfolio' , element : <Portfolio/>}
  ]}
])

export default function App() {
  return <RouterProvider router={routers} />
}


