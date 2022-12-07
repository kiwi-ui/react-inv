import React from 'react'
import Countdown from '../components/Countdown'
import Place from '../components/Place'

const Page2 = () => {



    return (
        <>
            <div className='relative w-full h-full  bg-[#EAEBE3] font-Poppins text-[#808080]'>

                <div className='text-center flex flex-col justify-center items-center gap-16 h-full py-6  font-Poppins text-[#808080] '>
                    <h1 className='font-alexBrush text-5xl sm:text-3xl font-extrabold text-black' >
                        Waktu
                    </h1>
                    <div className='keterangan-waktu'>
                        <h3>
                            Resepsi
                        </h3>
                        <p>
                            Minggu, 21 Desember 2090
                            13.00 - 29.00
                        </p>
                    </div>
                    <div className='flex flex-row justify-center gap-3 h-fit'>
                        <Countdown date="5 feb 2029 15:30:25" />
                    </div>
                </div>
                <div className='relative flex flex-col  bg-[#EAEBE3] justify-center items-center gap-5 pb-24'>
                    <div className='w-full flex flex-col text-center justify-center'>
                        <h1 className='font-alexBrush text-5xl sm:text-3xl font-extrabold text-black' >Tempat</h1>
                        <p>Gedung Bakorwil Pamekasan</p>
                    </div>
                    <Place />
                </div>
            </div>
        </>
    )
}

export default Page2