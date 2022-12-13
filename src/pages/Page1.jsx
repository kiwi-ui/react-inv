import React from 'react'
import bride from '../Assets/img5.jpg'
import groom from '../Assets/Gallery_h1_6.jpg'
import { GrInstagram } from 'react-icons/gr'
import border from '../Assets/border/border2.png'
import border1 from '../Assets/border/border1.png'
// import FireFlybg from '../../components/FireFlybg.jsx';
import Snowfall from 'react-snowfall'
import forPage1 from '../Assets/border/forPage1.png'
import bgForCardName from '../Assets/bg-forCardname.png'

const warnaPertama = '#5C7451'
const warnaKedua = '#8EA380'


const Page1 = () => {
    return (
        <>
            <div className='relative flex flex-col items-center content-around w-full overflow-y-auto text-center bg-white'>
                <img src={forPage1} alt="" className='h-36 md:h-28 pt-11' />

                <div className='flex flex-col gap-3 py-6 bagian font-Poppins text-[#808080]'>
                    <img src="" alt="" srcset="" />
                    <h5 className='font-alexBrush text-5xl sm:text-3xl font-extrabold text-[#817289] '>
                        Bismillahirrahmanirrahim
                    </h5>
                    <p>
                        Assalamualaikum Warahmatullahi Wabarakatuh
                    </p>
                    <p>Dengan rahmat ridho Allah <i>Subhanahu Wa Ta'ala,</i> kami menyelenggarakan acara resepsi pernikahan putra-putri kami:</p>
                </div>
                <div className='flex flex-row justify-center w-full py-5 sesifoto  h-1/3 sm:flex-col'>
                    <div className='flex flex-col items-center h-max'>
                        <img src={bride} alt="bride" srcset="" width={'70%'} className="rounded-lg sm:w-11/12 border-4 " />
                        <div className={`py-4 px-3 -my-11 sm:w-10/12 relative bg-white rounded-lg border-y-4 border-[#817289]`}>
                            <img src={bgForCardName} alt="" srcset="" className='opacity-60 absolute top-0  left-4 h-20' />
                            <img src={bgForCardName} alt="" srcset="" className='opacity-60 absolute top-0 right-4  h-20 transform -scale-x-100' />
                            <h4 className='font-alexBrush font-bold text-4xl py-6'>Putri Cangrawatih</h4>
                            <p className='font-Playfair pb-6'>Putri dari Bapak Ahmad &amp; Ibu Rahayu</p>
                        </div>
                        <button className='w-14 h-14 my-4 flex justify-center items-center border-[#817289] border-y-4 rounded-full 
                        bg-slate-50 z-20 shadow-xl shadow-[#817289]'><GrInstagram className='text-2xl  text-[#817289] font-extrabold' /></button>
                    </div>

                    <div className='flex flex-col items-center h-max'>
                        <img src={groom} alt="bride" srcset="" width={'70%'} className="rounded-lg sm:w-11/12 border-4 " />
                        <div className={`py-4 px-3 -my-11 sm:w-10/12 relative bg-white rounded-lg border-y-4 border-[#817289]`}>
                            <img src={bgForCardName} alt="" srcset="" className='opacity-60 absolute top-0  left-4 h-20' />
                            <img src={bgForCardName} alt="" srcset="" className='opacity-60 absolute top-0 right-4  h-20 transform -scale-x-100' />
                            <h4 className='font-alexBrush font-bold text-4xl py-6'>Perdi Sabun</h4>
                            <p className='font-Playfair pb-6'>Putri dari Bapak Rahmad &amp; Ibu Nuruli</p>
                        </div>
                        <button className='w-14 h-14 my-4 flex justify-center items-center border-[#817289] border-y-4 rounded-full 
                        bg-slate-50 z-20 shadow-xl shadow-[#817289]'><GrInstagram className='text-2xl  text-[#817289] font-extrabold' /></button>
                    </div>
                </div>
                {/* <img src={border} alt="" className='h-48 w-9/12 rounded-2xl' /> */}
                {/* <div className='py-5'>
                    <p>Yang akan diselenggarakan pada :</p>
                    <p>Minggu, 12 Desember 2090</p>
                    <p>Pukul 22.00 WIB - Selesai </p>
                    <p>Tempat : Gedung Robotika ITS Surabaya</p>
                </div>
                <p>Atas kehadiran dan do'a kami ucapkan terima kasih.</p>
                <p>Wassalamu'alaikum Warahmatullahi Wabarakatuh</p>
                <div className='py-5'>
                    <p>Kami yang mengundang</p>
                    <p>Bapak Ahmad Hidayat & Ibu Nurul Rahayu</p>
                    <p>Bapak Ahmad Hidayat & Ibu Nurul Rahayu</p>
                    <p>Putri dan Sambo</p>
                </div> */}
                <img src={forPage1} alt="" className='h-36 md:h-28 pt-11 bottom-11 rotate-180' />
            </div >
        </>
    )
}

export default Page1