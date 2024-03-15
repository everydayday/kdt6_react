  import './App.css';
  import { FcHome } from "react-icons/fc";
  import { IoHome } from "react-icons/io5";
  //import MainHeader from './01/MainHeader';
  //import Hello from './01/Hello';
  //import MyClock from './01_1/MyClock';
  import HelloCss from './02/HelloCss';
  import logo from './logo.svg';
  import icons from './icons';
  
  function App() {
    return (
      // JSX 문법 사용      
        <div className='flex flex-col w-full 
                        max-w-screen-xl
                        h-screen
                        mx-auto
                        overscroll-y-auto
                        '>
          <header className='flex justify-between
                            h-20 p-10
                            text-xl font-bold text-cyan-800
                            bg-green-400
                            items-center
          '>
            <div>리액트 실습</div>
            <div><IoHome /></div>
          </header>
          <main className='grow'>
            <HelloCss />
             {/* <img src={logo} className="App-logo" alt="logo" />  */}
            <icons />
          </main>
          
        <footer className='flex justify-center items-center  inset-x-0 bottom-0 h-16  text-white bg-slate-800'>
            @ 2024 Kim Dae Hee. All rights reserved
        </footer>

        </div>
        

        
      
      
    );
  }

  export default App;

