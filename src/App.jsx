import { useEffect, useState, useRef} from 'react';
import Lotus from './assets/lotusmindmascot.png';

function App() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [running, setRunning] = useState(true);


  let timer;

  useEffect(() => {
    if (running) {
      timer = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds === 59) {
            setMinutes((prevMinutes) => prevMinutes + 1);
            return 0;
          } else {
            return prevSeconds + 1;
          }
        });
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [running, seconds, minutes]);

  const play = () => {
    clearInterval(timer);
    setSeconds(0);
    setMinutes(0);
    setRunning(true);
  };

  const pause = () => {
    clearInterval(timer);
    setRunning(false);
  };

  return (
    <>
      <div className='bg-gradient-to-b from-rose-200 to-teal-200 w-[350px] h-[550px] rounded-md'>
        <div className='flex items-center justify-center relative top-10'>
          <h1 className='font-bold text-3xl text-slate-600 text-[2rem]'>Lotus Mind Meditation</h1>
        </div>

        <div className='flex items-center justify-center m-[3rem]'>
          {/* <p className='text-5xl p-3'>
            {minutes < 10 ? '0' + minutes : minutes}:{seconds < 10 ? '0' + seconds : seconds}
          </p> */}
          <div className="">
          <label className='text-lg'>Minutes: </label>
            <input
              type='number'
              // value={initialMinutes}
              // onChange={(e) => setInitialMinutes(parseInt(e.target.value, 10))}
              min='0'
              max="60"
            />
          </div>
         
        <div className='ml-1'>
            <label className='text-lg'>Seconds: </label>
            <input
              type='number'
              min='0'
              max='59'
            />
          </div>
        </div>




        <div className='flex items-center justify-center'>
          <img src={Lotus} alt='' className='w-[55%] drop-shadow-xl p-1' />
        </div>

        <div className='flex items-center justify-center gap-3'>
          
            <button className='bg-red-400 rounded-full p-5 shadow-lg text-white' onClick={play}>
              Reset
            </button>

      {running ? 
         <button className='bg-red-400 rounded-full p-5 shadow-lg text-white' onClick={pause}>
             Pause
         </button> :

      <button className='bg-red-400 rounded-full p-5 shadow-lg text-white' onClick={pause}>
          Start   
      
      </button>


      }
           
          
        </div>
      </div>
    </>
  );
}

export default App;

