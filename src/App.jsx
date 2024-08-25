import { useState, useCallback } from 'react'
import './App.css'

function App() {
  const [len, setLen] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, serCharAllowed] = useState(false)
  const [password, setPassword] = useState('')

  const genratePassword = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*()_+"

    for(let i=1; i<len; i++){
      const char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)
  }, [len, numAllowed, charAllowed])

  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 bg-gray-800 text-orange-500'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input 
        type="text" 
        value={password}
        className='outline-none w-full py-1 px-3'
        placeholder='Password'
        readOnly
        />
        <button
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range" 
          min={6}
          max={100}
          value={len}
          className='cursor-pointer'
          onChange={(e) => setLen(e.target.value)}
          name=""
          id="len"
          />
          <label htmlFor="len">Length: {len}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox" 
          defaultChecked={numAllowed}
          onChange={() => {
            setNumAllowed((prev) => !prev)
          }}
          name=""
          id="num"
          />
          <label htmlFor="num">Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox" 
          defaultChecked={charAllowed}
          onChange={() => {
            setCharAllowed((prev) => !prev)
          }}
          name=""
          id="char"
          />
          <label htmlFor="char">Characters</label>
        </div>
      </div>
    </div>
  )
}

export default App
