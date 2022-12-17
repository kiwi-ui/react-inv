import React from 'react'
import digitionPict from '../Assets/Digition.png'
import { BsFillTelephoneFill } from 'react-icons/bs'
import forPage5 from '../Assets/border/forPage5.png'

const Page5 = () => {
    return (
        <>
            <div className=' absolute w-full bg-transparent z-10 h-full flex flex-col justify-between'>
                <img src={forPage5} className=" w-[15rem] md:w-64 pt-11 z-10 mx-auto" />
            </div>
            <div className='flex flex-col font-Poppins h-full w-full bg-white overflow-y-scroll justify-center items-center gap-6 '>
                <div className='text-center '>
                    <h2>
                        Atas kehadiran dan do’a restu dari bapak/ibu/saudara/I sekalian, kami mengucapkan Terima Kasih.
                    </h2>
                </div>
                <p className='font-alexBrush text-6xl sm:text-3xl font-extrabold text-[#817289]  text-center'>Wassalamualaikum Warahmatullahi Wabarakatuh</p>

                <div className='text-center absolute bottom-4'>
                    <h2>
                        Kami yang berbahagia
                    </h2>
                    <p className='font-alexBrush text-5xl sm:text-3xl font-extrabold text-[#817289] '>
                        Putri Sampo
                    </p>
                </div>

                {/* <div className='absolute bottom-0 w-full flex flex-row justify-around'>
                    <div className='border-[#E9BE6A] border-4'>
                        <h1>Developed By Digiti.on</h1> */}
                {/* <img src={digitionPict} className='rounded-full' alt="" /> */}
                {/* </div>
                    <div className='border-[#E9BE6A] border-4 flex flex-row items-center gap-5'>
                        <BsFillTelephoneFill />
                        The Spouse - Kelam Malam
                    </div>
                    <div className='border-[#E9BE6A] border-4'>
                        <p>082336420166</p>
                    </div>
                </div> */}

            </div>
        </>
    )
}

export default Page5