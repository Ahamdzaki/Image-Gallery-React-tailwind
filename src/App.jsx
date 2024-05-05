import React from 'react'
import { CiSearch } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
export default function App() {
  return (
    <>
    {/* global container */}
      <div className='flex items-center justify-center bg-cyan-50 min-h-screen'>
        {/* Card container */}
        <div className='flex flex-col p-6 m-3 space-y-10 bg-white rounded-2xl shadow-2xl md:p-10'>
          {/* Menu container */}
          <div className='flex flex-col items-center justify-center space-y-3 md:flex-row md:space-y-0 md:space-x-8 md:justify-end'>
            {/* Item 1 */}
            <div className='group'>
              <div>Vector</div>
              <div className=' mx-2 duration-500 border-b border-black mt-2 opacity-0 group-hover:opacity-100'></div>
            </div>

            {/* Item 2 */}
            <div className='group'>
              <div>Illustration</div>
              <div className=' mx-2 duration-500 border-b border-black mt-2 opacity-0 group-hover:opacity-100'></div>
            </div>

            {/* Item 3 */}
            <div className='group'>
              <div>Images</div>
              <div className=' mx-2 duration-500 border-b border-black mt-2 opacity-0 group-hover:opacity-100'></div>
            </div>

            {/* Item 4 */}
            <div className='group'>
              <div>Icons</div>
              <div className=' mx-2 duration-500 border-b border-black mt-2 opacity-0 group-hover:opacity-100'></div>
            </div>
          </div>

          {/* Search container */}
          <div className='flex flex-col space-y-4 md:flex-row md:space-y-0 justify-between'>
            <div className='flex justify-between border-b'>
              <input type="text" placeholder='Search' className='ml-4 py-2 border-none focus:outline-none md:w-80 ' />
              {/* Upload btn */}
              <button>
                <CiSearch />
              </button>
            </div>
            <button className='border border-black py-3 px-5 rounded-md bg-black text-white hover:bg-white hover:text-black duration-200'>Upload</button>
          </div>

          {/* Gallery container */}

          <div className='grid gap-4 md:grid-cols-3'>
            {/* Image 1 */}
            <div className='relative group'>
              <img src="/src/assets/img1.jpg" alt="" className='w-72' />
              <div className=' absolute left-0 right-0 bottom-0 p-2 px-4 text-white bg-black  opacity-0 group-hover:opacity-100 bg-opacity-30 duration-500'>
                <div className='flex justify-between w-full'>
                  {/* description */}
                  <div className='font-normal'>
                    <p className='text-sm'>Abstract Painting</p>
                    <p className='text-xs'>245 likes - 35 Shares</p>
                  </div>
                  {/* button bookmark */}
                  <div className='flex items-center'>
                    <CiBookmark />
                  </div>
                </div>

              </div>
            </div>


            {/* Image 2 */}
            <div className='relative group'>
              <img src="/src/assets/img2.jpg" alt="" className='w-72' />
              <div className=' absolute left-0 right-0 bottom-0 p-2 px-4 text-white bg-black  opacity-0 group-hover:opacity-100 bg-opacity-30 duration-500'>
                <div className='flex justify-between w-full'>
                  {/* description */}
                  <div className='font-normal'>
                    <p className='text-sm'>Dark Window</p>
                    <p className='text-xs'>347 likes - 30 Shares</p>
                  </div>
                  {/* button bookmark */}
                  <div className='flex items-center'>
                    <CiBookmark />
                  </div>
                </div>

              </div>
            </div>


            {/* Image 3 */}
            <div className='relative group'>
              <img src="/src/assets/img3.jpg" alt="" className='w-72' />
              <div className=' absolute left-0 right-0 bottom-0 p-2 px-4 text-white bg-black  opacity-0 group-hover:opacity-100 bg-opacity-30 duration-500'>
                <div className='flex justify-between w-full'>
                  {/* description */}
                  <div className='font-normal'>
                    <p className='text-sm'>Image Gallery</p>
                    <p className='text-xs'>500 likes - 20 Shares</p>
                  </div>
                  {/* button bookmark */}
                  <div className='flex items-center'>
                    <CiBookmark />
                  </div>
                </div>

              </div>
            </div>

            {/* Image 4 */}
            <div className='relative group'>
              <img src="/src/assets/img4.jpg" alt="" className='w-72' />
              <div className=' absolute left-0 right-0 bottom-0 p-2 px-4 text-white bg-black  opacity-0 group-hover:opacity-100 bg-opacity-30 duration-500'>
                <div className='flex justify-between w-full'>
                  {/* description */}
                  <div className='font-normal'>
                    <p className='text-sm'>Hotel Blue</p>
                    <p className='text-xs'>900 likes - 50 Shares</p>
                  </div>
                  {/* button bookmark */}
                  <div className='flex items-center'>
                    <CiBookmark />
                  </div>
                </div>

              </div>
            </div>


            {/* Image 5 */}
            <div className='relative group'>
              <img src="/src/assets/img5.jpg" alt="" className='w-72' />
              <div className=' absolute left-0 right-0 bottom-0 p-2 px-4 text-white bg-black  opacity-0 group-hover:opacity-100 bg-opacity-30 duration-500'>
                <div className='flex justify-between w-full'>
                  {/* description */}
                  <div className='font-normal'>
                    <p className='text-sm'>Modern Painting</p>
                    <p className='text-xs'>145 likes - 75 Shares</p>
                  </div>
                  {/* button bookmark */}
                  <div className='flex items-center'>
                    <CiBookmark />
                  </div>
                </div>

              </div>
            </div>


            {/* Image 6 */}
            <div className='relative group'>
              <img src="/src/assets/img6.jpg" alt="" className='w-72' />
              <div className=' absolute left-0 right-0 bottom-0 p-2 px-4 text-white bg-black  opacity-0 group-hover:opacity-100 bg-opacity-30 duration-500'>
                <div className='flex justify-between w-full'>
                  {/* description */}
                  <div className='font-normal'>
                    <p className='text-sm'>Night Gallery</p>
                    <p className='text-xs'>140 likes - 10 Shares</p>
                  </div>
                  {/* button bookmark */}
                  <div className='flex items-center'>
                    <CiBookmark />
                  </div>
                </div>

              </div>
            </div>
          </div>
          
        </div>
      </div>
    </>
  )
}
