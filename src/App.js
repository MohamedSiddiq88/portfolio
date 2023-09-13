import { useEffect, useState } from 'react';
import './App.css';

import MainPage from './Components/MainPage';
import Loading from './Components/Loading';
// import Test from './Test/Test';

function App() {
  const [isLoading,setIsLoading] = useState(true);

  useEffect(()=>{
    setTimeout(()=>{
      setIsLoading(false);
    },2000)
  })

  return (
    <div className="App">
     

{isLoading?<Loading/>:<MainPage/>}
{/* <Test/> */}
    </div>
  );
}

export default App;
