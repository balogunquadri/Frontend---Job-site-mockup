import React from 'react'

import { AiOutlineCloseCircle, AiOutlineSearch } from 'react-icons/ai'
import { CiLocationOn } from 'react-icons/ci'
import {BsFillHouseFill} from 'react-icons/bs'

const Search = () => {
  return (
    <div className='grid gap-10 bg-greyish rounded-[10px] p-[3rem]'>
      <form action=""> 
              <div className='firstDiv flex justify-between items-center rounded-[8px] gap-[10px] bg-white p-5 shadow-lg shadow-greyish-700'>
                  <div className='flex gap-2 items-center'>
                      <AiOutlineSearch className='text-[25px] icon'/>
                  <input type="text" className='bg-transparent text-blue-500 focus:outline-none w-[100%]' placeholder='Search By Jobs....' />
                      <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6] hover:text-textColor icon'/>
                  </div>
                  <div className='flex gap-2 items-center'>
                      <BsFillHouseFill className='text-[25px] icon'/>
                  <input type="text" className='bg-transparent text-blue-500 focus:outline-none w-[100%]' placeholder='Search By Company....' />
                      <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6] hover:text-textColor icon'/>
                  </div>
                  <div className='flex gap-2 items-center'>
                      <CiLocationOn className='text-[25px] icon'/>
                  <input type="text" className='bg-transparent text-blue-500 focus:outline-none w-[100%]' placeholder='Search By Location....' />
                      <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6] hover:text-textColor icon'/>
                  </div>
                  <button className='bg-bluecolor h-full p-5 px-10 rounded-[10px] text-white cursor-pointer hover:bg-blue-100'>Search</button>
              </div>

          </form>

          <div className='flex items-center gap-10 justify-center'>
              <div className='flex items-center gap-2'>
                  <label htmlFor='relevance' className='text-[#808080] font-semibold'>
                      Sort By
                  </label>
                  <select name='' id='relevance' className='bg-white rounded-[3px] px-4 py-1'>
                      <option value=''>Relevance</option>
                      <option value=''>Newest</option>
                      <option value=''>Starts With</option>
                      <option value=''>Contains</option>
                  </select>
              </div>
              <div className='flex items-center gap-2'>
                  <label htmlFor='type' className='text-[#808080] font-semibold'>
                      Type
                  </label>
                  <select name='' id='relevance' className='bg-white rounded-[3px] px-4 py-1'>
                      <option value=''>Full Time</option>
                      <option value=''>Part Time</option>
                      <option value=''>Contract</option>
                      <option value=''>Internship</option>
                  </select>
              </div>
              <div className='flex items-center gap-2'>
                  <label htmlFor='level' className='text-[#808080] font-semibold'>
                      Level
                  </label>
                  <select name='' id='level' className='bg-white rounded-[3px] px-4 py-1'>
                      <option value=''>Senior</option>
                      <option value=''>Intermediate</option>
                      <option value=''>Entry Level</option>
                      <option value=''>Managerial</option>
                  </select>
              </div>
          </div>
          
    </div>
  )
}

export default Search
