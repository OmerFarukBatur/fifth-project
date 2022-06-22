import './App.css';
import Container from './components/Container';
import {ThemeProvider} from './context/ThemeContext';
import {UserProvider} from './context/UserContext';
/* import Header from "./components/Header";

import { useState, useMemo } from "react"; */

function App() {
  
  /* const [number,setNumber] = useState(0);
  const data = useMemo(() =>{
    return { name: "Ahmet" };
  }, []); */

  return (
    <div className="App">
{/*       <Header data={data}  />
      <hr></hr>
      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>Click</button> */}

      <ThemeProvider>
        <UserProvider>
          <Container/>
        </UserProvider>
      </ThemeProvider>


    </div>
  );
}

export default App;
