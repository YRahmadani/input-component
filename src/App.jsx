import React from 'react'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { text } from '@fortawesome/fontawesome-svg-core'

const App = () => {
  const [isFocused, setIsFocused] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [inputValue2, setInputValue2] = useState('')
  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value)
  }
  const handleChange2 = (e) => {
    const value = e.target.value;
    setInputValue2(value)
  }
  return (
    <div className='flex items-start'>
      <div className='w-[20%] h-screen sticky top-0 bg-slate-100 flex flex-col items-center'>
        <div className='w-[65%]'>
          <h2 className='font-bold font-poppins py-10'><span className='text-[#ef6510]'>Dev</span>challenges.io</h2>
          <ul className='list-nonse'>
            <li className='mb-9 mt-10 font-poppins'>Colors</li>
            <li className='mb-9 font-poppins'>Typography</li>
            <li className='mb-9 font-poppins'>Spaces</li>
            <li className='mb-9 font-poppins'>Buttons</li>
            <li className='mb-9 font-poppins font-bold'>Inputs</li>
            <li className='font-poppins'>Grid</li>
          </ul>
        </div>
      </div>

      {/* Inputs */}
      <div className='flex h-full flex-col pt-16 gap-8 ml-16'>
        <h2 className='font-poppins font-bold text-lg'>Inputs</h2>

        <div className='flex gap-20'>
          <div className='flex flex-col items-start gap-1'>
            <code>&lt;Input/&gt;</code>
            <label className='text-sm font-poppins'>Your dreams:</label>
            <input type='text' placeholder='Drop your thoughts' required className='py-3 px-5 text-sm font-poppins rounded-xl outline-none border-2 border-black'></input>
          </div>
          <div className='flex flex-col items-start gap-1'>
            <code>&lt;Input class="hover: focus:"/&gt;</code>
            <label className={`text-sm font-poppins ${isFocused ? 'text-pink-500' : ''} ${isHovered ? 'text-sky-400' : ''}`}>Your dreams:</label>
            <input type='text' placeholder='Drop your thoughts' required className={`py-3 px-5 text-sm font-poppins rounded-xl outline-none border-2 border-black ${isFocused ? 'focus:border-pink-500 text-pink-500' : ''} ${isHovered ? 'hover:border-sky-400' : ''}`} onMouseOver={() => setIsHovered(true)} onMouseOut={() => setIsHovered(false)} onFocus={() => { setIsFocused(true); setIsHovered(false) }} onBlur={() => setIsFocused(false)}></input>
          </div>
        </div>

        {/* Error Input */}
        <div className='flex gap-20'>
          <div className='flex flex-col items-start gap-1'>
            <code>&lt;Input error/&gt;</code>
            <label className='text-sm font-poppins text-red-600'>Your dreams:</label>
            <input type='text' placeholder='Drop your thoughts' required className='py-3 px-5 text-sm font-poppins rounded-xl outline-none border-2 border-red-600'></input>
          </div>
          <div className='flex flex-col items-start gap-1'>
            <code>&lt;Input/&gt;</code>
            <label className={`text-sm font-poppins ${inputValue.length === 0 ? 'text-black' : inputValue.length > 0 && inputValue.length <= 4 ? 'text-red-600' : 'text-green-500'}`}>Your dreams:</label>
            <input type='text' placeholder='Drop your thoughts' value={inputValue} required className={`py-3 px-5 text-sm font-poppins rounded-xl outline-none border-2 ${inputValue.length === 0 ? 'border-black' : inputValue.length > 0 && inputValue.length <= 4 ? 'border-red-600' : 'border-green-500'}`} onChange={handleChange}></input>
          </div>
        </div>

        <div className='flex gap-20'>
          <div className='flex flex-col gap-1'>
            <code>&lt;Input disabled/&gt;</code>
            <label className='text-sm font-poppins'>Your dreams:</label>
            <input type='text' placeholder='Drop your thoughts' required className='py-3 px-5 text-sm font-poppins rounded-xl outline-none border-2' disabled></input>
          </div>
        </div>

        <div className='flex gap-20'>
          <div className='flex flex-col items-start gap-1'>
            <code>&lt;Input helperText/&gt;</code>
            <label className='text-sm font-poppins'>Your dreams:</label>
            <input type='text' placeholder='Drop your thoughts' required className='py-3 px-5 text-sm font-poppins rounded-xl outline-none border-2 border-black'></input>
          </div>
          <div className='flex flex-col items-start gap-1'>
            <code>&lt;Input helperText/&gt;</code>
            <label className={`text-sm font-poppins ${inputValue2.length === 0 ? 'text-black' : inputValue2.length > 0 && inputValue2.length <= 5 ? 'text-red-600' : 'text-green-500'}`}>Your dreams:</label>
            <input type='text' placeholder='Drop your thoughts' value={inputValue2} required className={`py-3 px-5 text-sm font-poppins rounded-xl outline-none border-2 ${inputValue2.length === 0 ? 'border-black' : inputValue2.length > 0 && inputValue2.length <= 5 ? 'border-red-600' : 'border-green-500'}`} onChange={handleChange2}></input>
            {inputValue2.length > 0 && inputValue2.length <= 5 && (
              <p className='text-xs italic text-red-600 font-semibold'>* characters must be at least 5 characters long</p>
            )}
          </div>
        </div>

        {/* Input with Icons */}
        <div className='flex gap-20'>
          <div className='flex flex-col items-start gap-1'>
            <code>&lt;Input startIcon/&gt;</code>
            <label className='text-sm font-poppins'>Your account:</label>
            <span className='flex py-3 px-5 border-black border-2 rounded-xl gap-2 items-center'>
              <FontAwesomeIcon icon={faUser} />
              <input type='text' placeholder='Username' required className=' text-sm font-poppins outline-none'></input>
            </span>
          </div>
          <div className='flex flex-col items-start gap-1'>
            <code>&lt;Input startIcon/&gt;</code>
            <label className={`text-sm font-poppins ${inputValue2.length === 0 ? 'text-black' : inputValue2.length > 0 && inputValue2.length <= 5 ? 'text-red-600' : 'text-green-500'}`}>Your account:</label>
            <span className='flex py-3 px-5 border-black border-2 rounded-xl gap-2 items-center'>
              <input type='email' placeholder='Email' required className=' text-sm font-poppins outline-none'></input>
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
          </div>
        </div>
        
        {/* Input with string value */}
        <div className='flex flex-col gap-1 items-start'>
          <code>&lt;Input value="Text"/&gt;</code>
          <label className='text-sm font-poppins'>Your dreams:</label>
          <input type='text' value="Text" placeholder='Drop your thoughts' required className='py-3 px-5 text-sm font-poppins rounded-xl outline-none border-2 border-black'></input>
        </div>

        {/* Sizig Input */}
        <div className='flex gap-20 items-center'>
          <div className='flex flex-col items-start gap-1'>
            <code>&lt;Input size="sm"/&gt;</code>
            <label className='text-sm font-poppins'>Your dreams:</label>
            <input type='text' placeholder='Drop your thoughts' required className='py-2 px-3 text-xs font-poppins rounded-xl outline-none border-2 border-black'></input>
          </div>
          <div className='flex flex-col items-start gap-1'>
            <code>&lt;Input size="md"/&gt;</code>
            <label className='text-sm font-poppins'>Your dreams:</label>
            <input type='text' placeholder='Drop your thoughts' required className='py-3 px-5 text-sm font-poppins rounded-xl outline-none border-2 border-black'></input>
          </div>
        </div>
        
        {/* Input fullWidth */}
        <div className='flex flex-col w-[150%] gap-1'>
          <code>&lt;Input fullWidth/&gt;</code>
          <label className='text-sm font-poppins'>Your dreams:</label>
          <input type='text' placeholder='Drop your thoughts' required className='py-3 px-5 text-sm font-poppins rounded-xl outline-none border-2 border-black'></input>
        </div>
        
        {/* Input with multiline */}
        <div className='flex flex-col items-start gap-1'>
          <code>&lt;Input multiline row="4"/&gt;</code>
          <label className='text-sm font-poppins'>Your dreams:</label>
          <textarea rows="4" type='text' placeholder='Drop your thoughts' required className='py-3 px-5 text-sm font-poppins rounded-xl outline-none border-2 border-black' style={{resize: "none"}}></textarea>
        </div>

        <p className='font-poppins text-sm text-gray-500 py-6'>created by <span className='font-bold'>Geevanya </span>- devChallenges.io</p>
      </div>
    </div>
  )
}

export default App
