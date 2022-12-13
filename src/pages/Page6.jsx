import React from 'react'
import { BsFillTelephoneFill, BsMusicNoteBeamed, BsInstagram } from 'react-icons/bs'
import digitionPict from '../Assets/Digition.png'

const Page6 = () => {
    return (
        <>
            <div className='flex flex-col w-full h-full items-center justify-center bg-white gap-10 relative'>
                {/* <h1 className='absolute top-20 font-alexBrush  text-[#817289] text-5xl sm:text-3xl font-extrabold  text-center '  >
                    Copyright
                </h1> */}
                <div className='border-[#817289] border-y-4 md:w-[60%] rounded-full flex flex-row  items-center w-[25%]  h-fit gap-6  py-2 pl-5 md:gap-1'>
                    {/* <img src={digitionPict} alt='digition' className=' rounded-r-full w-4 h-4' /> */}
                    <BsInstagram />
                    Digition
                </div>
                <div className='border-[#817289] border-y-4 flex flex-row  items-center  md:w-[60%] w-[25%] h-fit gap-6  rounded-full px-2 pl-5 py-2 md:gap-1'>
                    <BsFillTelephoneFill /> 082336420166
                </div>
                {/* <div className='border-[#817289] border-y-4 flex flex-row  items-center md:w-[60%] md:text-sm w-[25%] h-fit gap-7 rounded-full px-2 pl-3 py-2 md:gap-1'>
                    <BsMusicNoteBeamed /> Beauty and the Beast - Ariana Grande & John Legend (Adera & Nadin Amizah Cover)
                </div> */}
            </div>
        </>
    )
}

export default Page6