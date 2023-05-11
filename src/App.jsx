import { useState } from 'react'
import logo from "./assets/amplogo.png"
import './App.css'

function App() {

  const [unable, setunable] = useState(false);

  return (
    <div className="App flex flex-col items-center h-[100vh] justify-center">
      <div className='flex justify-between items-center w-[80vw]'>
        <img src={logo} className="w-[30vw]"/>
        <p className="text-xl font-bold">X</p>
      </div>
      <p className='text-left my-[2rem] w-[80vw] text-3xl'>Login To My AMP</p>
      <div className='w-[80vw]'>
<div className='relative'>
<p className='text-[#adadad] font-semibold'>Username</p>
<input type="text" className='border-b w-[80vw] py-[0.5rem] px-[0.2rem]'/>
<p className='mt-[0.5rem] text-[#adadad] font-semibold'>Forgot your <span className='text-[#396ab9]'>username?</span></p>

<p className='absolute top-[30%] left-[75vw]'>X</p>
</div>
<div className='mt-[3rem]'>
<p className='text-[#adadad] font-semibold'>Password</p>
<input type="password" className='border-b w-[80vw] py-[0.5rem] px-[0.2rem]'/>
<p className='mt-[0.5rem] text-[#adadad] font-semibold'>Forgot your <span className='text-[#396ab9]'>password?</span></p>
</div>
<button onClick={() => {setunable(true)}} className='border bg-[#396ab9] text-[#d4e9ff] font-semibold w-[80vw] mt-[2rem] py-[0.8rem]'>
      Login
      </button>
      </div>
      <p className='mt-[2rem] text-left w-[80vw] underline text-[#396ab9] font-medium'>New here? Register for My AMP</p>
      {unable ? <><div className="overlay w-[100vw] absolute top-0 h-[100vh]"></div>
   <div className='text-center absolute rounded-[10px] unable w-[70vw] bg-[#d4e9ff]'>
<div className='border-b pb-[1rem] flex flex-col items-center  border-[#282828] '>
<p className='mt-[1rem] font-bold mb-[0.3rem]'>Unable to Login</p>
    <p className='mx-[1rem] w-[90%]'>Unfortunaltely, We're not able to log you in right now.</p>
<p>Please contact Support center.</p>
</div>
<p className='my-[0.5rem] text-[#396ab9] font-semibold' onClick={() => {setunable(false)}}>OK</p>
   </div></> : ""}
    </div>
  )
}

export default App
