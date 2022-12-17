import React from 'react'
import Countdown from '../components/Countdown'
import Place from '../components/Place'
import forPage2 from '../Assets/border/forPage2.png'
const Page2 = () => {



    return (
        <>
            <div className=' w-full h-full flex flex-col bg-white items-center font-Poppins gap-5 text-[#808080]'>
                <img src={forPage2} className="w-[30rem] md:w-64 pt-11 z-10" />
                <div className='text-center flex flex-col justify-center items-center gap-16 h-full py-6  font-Poppins text-[#808080] '>
                    <h1 className='font-alexBrush text-5xl sm:text-3xl font-extrabold text-[#817289] ' >
                        Waktu
                    </h1>
                    <div className='keterangan-waktu'>
                        <h3>
                            Resepsi
                        </h3>
                        <p>
                            Minggu, 21 Desember 2090
                            13.00 - 23.00
                        </p>
                    </div>
                    <div className='flex flex-row justify-center gap-3 h-fit'>
                        <Countdown date="2 july 2023 15:30:00" />
                    </div>
                </div>
                <div className='w-full h-full bg-white flex flex-col items-center pb-11 text-center justify-center'>
                    <h1 className='font-alexBrush text-5xl sm:text-3xl font-extrabold text-[#808080]'>Tempat</h1>
                    <p>Gedung Bakorwil Pamekasan</p>
                    <Place />
                    <img src={forPage2} className='w-[30rem] md:w-64 bottom-10 mt-5 z-10 rotate-180' />
                </div>

            </div>
        </>
    )
}

export default Page2