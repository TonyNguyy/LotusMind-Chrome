
import { useEffect, useState } from 'react';
import Lotus from './assets/lotusmindmascot.png';

function App() {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);
  const [initialMinutes, setInitialMinutes] = useState(0);
  const [initialSeconds, setInitialSeconds] = useState(0);

  let timer;

  useEffect(() => {
    if (running) {
      timer = setInterval(() => {
        if (minutes === 0 && seconds === 0) {
          clearInterval(timer);
          setRunning(false);
        } else {
          setSeconds((prevSeconds) => (prevSeconds === 0 ? 59 : prevSeconds - 1));
          setMinutes((prevMinutes) => (seconds === 0 ? prevMinutes - 1 : prevMinutes));
        }
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [running, seconds, minutes]);

  const startCountdown = () => {
    setRunning(true);
  };

  const stopCountdown = () => {
    clearInterval(timer);
    setRunning(false);
    setMinutes(initialMinutes);
    setSeconds(initialSeconds);
  };

  return (
    <>
      <div className='bg-gradient-to-b from-rose-200 to-teal-200 w-[350px] h-[550px] rounded-md'>
        <div className='flex items-center justify-center relative top-10'>
          <h1 className='font-bold text-3xl text-slate-600 text-[2rem]'>Lotus Mind Meditation</h1>
        </div>

        <div className='flex items-center justify-center m-[3rem]'>
          <div>
            <label className='text-lg'>Minutes:</label>
            <input
              type='number'
              value={initialMinutes}
              onChange={(e) => setInitialMinutes(parseInt(e.target.value, 10))}
              min='0'
            />
          </div>
          <div>
            <label className='text-lg'>Seconds:</label>
            <input
              type='number'
              value={initialSeconds}
              onChange={(e) => setInitialSeconds(parseInt(e.target.value, 10))}
              min='0'
              max='59'
            />
          </div>
        </div>

        <div className='flex items-center justify-center m-[3rem]'>
          <p className='text-5xl p-3'>
            {minutes < 10 ? '0' + minutes : minutes}:{seconds < 10 ? '0' + seconds : seconds}
          </p>
        </div>

        <div className='flex items-center justify-center gap-3'>
          <div>
            {running ? (
              <button className='bg-red-400 rounded-full p-5 shadow-lg text-white' onClick={stopCountdown}>
                Stop
              </button>
            ) : (
              <button className='bg-green-400 rounded-full p-5 shadow-lg text-white' onClick={startCountdown}>
                Start
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
