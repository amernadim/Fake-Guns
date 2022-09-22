import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar/Navbar';
import Allgun from './component/AllGuns/Allgun';
import { useState } from 'react';
import Footer from './component/Footer/Footer';

function App() {
  const [count,setCount] = useState(0);
  const increaseCount = () => {
    const newCount = count + 1;
    setCount(newCount)
  }

  return (
    <div className="App">
     <Navbar count={count}></Navbar>
     <Allgun increaseCount={increaseCount} ></Allgun>
     <Footer></Footer>
    </div>
  );
}

export default App;
