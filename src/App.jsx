import { useEffect, useState } from 'react'
import Lotus from "./assets/lotusmindmascot.png"

function App() {
  const [seconds, setSeconds] = useState(0);
  const [minutes,setMinutes] = useState(0);
  const [running, setRunning] = useState(true)

  var timer;
  useEffect(()=>{
  
    timer = setInterval(()=>{
        setSeconds(seconds + 1)

        if(seconds === 59){
          setMinutes(minutes+1)
          setSeconds(0);
        }
    
    },1000)

    return () => clearInterval(timer);
  });

  const play = ()=>{

  }

  const pause= () =>{
      clearInterval(timer)
  }

  return (
    <>
    <div className='bg-gradient-to-r from-rose-100 to-teal-100 w-[350px] h-[550px] rounded-md'>
    <div className='flex items-center justify-center'>
       <h1 className='font-bold text-3xl text-slate-600'>Lotus Mind Meditation</h1>
    </div>
  
      <div className="flex items-center justify-center">
        <p className='text-5xl p-3'>{minutes <10 ? "0" + minutes : minutes}:{seconds< 10 ? "0" + seconds: seconds}</p>
      </div>
        <div className="flex items-center justify-center">
          <img src={Lotus} alt="" className="w-[45%] drop-shadow-lg p-1" />
        </div>

       <div className="flex items-center justify-center gap-3">
        <div className=''>
            <button className='bg-red-400 rounded-full p-5 shadow-lg text-white'
            onClick={play}>Restart</button>
          </div>
          <div className=''>
            <button className='bg-red-400 rounded-full p-5 shadow-lg text-white' 
           onClick={pause}>Pause</button>
          </div>
        </div> 
       
    </div>
    </>
  )
}

export default App
