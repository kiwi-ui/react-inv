import React from 'react'
import bride from '../Assets/img5.jpg'
import groom from '../Assets/Gallery_h1_6.jpg'
import { GrInstagram } from 'react-icons/gr'
import border from '../Assets/border/border2.png'
import border1 from '../Assets/border/border1.png'
// import FireFlybg from '../../components/FireFlybg.jsx';
import Snowfall from 'react-snowfall'

const warnaPertama = '#5C7451'
const warnaKedua = '#8EA380'


const Page1 = () => {
    return (
        <>
            <div className='relative flex flex-col items-center content-around w-full overflow-y-auto text-center bg-[#EAEBE3]'>
                <img src={border1} alt="" className='h-48 w-9/12' />

                <div className='flex flex-col gap-3 py-6 bagian font-Poppins text-[#808080] '>
                    <h5 className='font-alexBrush text-5xl sm:text-3xl font-extrabold text-black'>
                        Bismillahirrahmanirrahim
                    </h5>
                    <p>
                        Assalamualaikum Warahmatullahi Wabarakatuh
                    </p>
                    <p>Dengan rahmat ridho Allah <i>Subhanahu Wa Ta'ala,</i> kami menyelenggarakan acara resepsi pernikahan putra-putri kami:</p>
                </div>
                <div className='flex flex-row justify-center w-full py-5 sesifoto  h-1/3 sm:flex-col'>
                    <div className='flex flex-col items-center h-max'>
                        <img src={bride} alt="bride" srcset="" width={'70%'} className="rounded-lg sm:w-11/12 border-4 border-orange-300" />
                        <div className={`py-4 px-3 -my-11 sm:w-10/12 bg-gradient-to-b from-green-500 to-bg-green-300 rounded-lg border-4 border-orange-300`}>
                            <h4 className='font-alexBrush font-bold text-4xl py-6'>Putri Cangrawatih</h4>
                            <p className='font-Playfair pb-6'>Putri dari Bapak Ahmad Hidayat &amp; Ibu Nurul Rahayu</p>
                        </div>
                        <button className='w-14 h-14 my-4 flex justify-center items-center border-[#E9BE6A] border-4 rounded-full bg-slate-50'><GrInstagram className='text-2xl  text-[#E9BE6A] font-extrabold' /></button>
                    </div>

                    <div className='flex flex-col items-center h-max'>
                        <img src={groom} alt="bride" srcset="" width={'70%'} className="rounded-lg sm:w-11/12 border-4 border-orange-300" />
                        <div className={`py-4 px-3 -my-11 sm:w-10/12 bg-gradient-to-b from-green-500 to-bg-green-300 rounded-lg border-4 border-orange-300`}>
                            <h4 className='font-alexBrush font-bold text-4xl py-6'>Sampoo </h4>
                            <p className='font-Playfair pb-6'>Putri dari Bapak Ahmad Hidayat &amp; Ibu Nurul Rahayu</p>
                        </div>
                        <button className='w-14 h-14 my-4 flex justify-center items-center border-[#E9BE6A] border-4 rounded-full bg-slate-50'><GrInstagram className='text-2xl text-[#E9BE6A]' /></button>
                    </div>
                </div>
                <img src={border} alt="" className='h-48 w-9/12 rounded-2xl' />
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
            </div >
        </>
    )
}

export default Page1