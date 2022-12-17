import React from 'react';
import { useEffect, useRef, useState } from 'react'
import { useParams, Link } from 'react-router-dom';
import Snowfall from 'react-snowfall';
// import Cover from './Cover';
// import '../index.css';
// import { img1 } from require('../Assets/cover.png');


// const useFull = (el) => {
//     const [full, setFull] = useState(false)
//     const revert = () => {
//         if (!document.fullscreenElement) {
//             setFull(false)
//             document.removeEventListener('fullscreenchange', revert)
//         }
//     }
//     useEffect(() => {
//         if (full) {
//             const elem = el.current
//             if (elem.requestFullscreen) {
//                 elem.requestFullscreen();
//                 document.addEventListener('fullscreenchange', revert)
//             } else if (elem.webkitRequestFullscreen) { /* Safari */
//                 elem.webkitRequestFullscreen();
//                 document.addEventListener('fullscreenchange', revert)
//             } else if (elem.msRequestFullscreen) { /* IE11 */
//                 elem.msRequestFullscreen();
//                 document.addEventListener('fullscreenchange', revert)
//             }
//         }
//         return () => {
//             document.removeEventListener('fullscreenchange', revert)
//         }
//     }, [full])
//     return [full, setFull]
// }

const WelcomePage = () => {
    // const picRef = useRef(null)
    // const [full, setFull] = useFull(picRef)
    let { personName } = useParams()
    console.log(personName)
    return (
        <>

            <Snowfall
                style={{
                    transform: 'rotate(180deg)', position: 'fixed',
                    width: '100vw',
                    height: '100vh',
                    zIndex: '10',
                }}
                snowflakeCount={80} />
            <section className="w-screen h-screen font-Poppins text-black items-end bg-blend-darken 
        bg-[url('./pages/cover.png')]
        bg-no-repeat  bg-clip-padding bg-origin-padding bg-top ">
                {/* <img src={require('../Assets/cover.png')} alt="cover"></img> */}
                <div className='absolute z-10 w-screen h-screen bg-[#F6F4FF]/60'></div>
                <div className='relative flex w-full flex-col flex-wrap justify-evenly items-center p-5 h-full z-20 '>
                    <h4 className="font-Roboto text-center text-2xl Roboto-font font-thin">THE WEDDING OF</h4>
                    <div className='text-center'>
                        <p className='font-alexBrush text-6xl sm:text-5xl text-[#817289] font-bold'>Yusni </p>
                        <p className='font-alexBrush text-2xl sm:text-5xl text-[#817289] font-bold'>
                            &
                        </p>
                        <p className='font-alexBrush text-6xl sm:text-5xl text-[#817289] font-bold'>
                            Anggara
                        </p>
                    </div>
                    <div className='text-center flex flex-col w-full'>
                        <div className='flex flex-row items-center justify-evenly w-full gap-16 md:gap-12'>
                            <p className='md:px-5 px-10 py-2 text-md border-y-4 border-[#817289]'>
                                <span className=' '>
                                    Agustus
                                </span>
                            </p >

                            <p className='pt-3 text-4xl font-bold font-alexBrush text-[#817289]'>
                                <span >
                                    17
                                </span>
                            </p>

                            <p className='md:px-5 px-10 py-2 text-md border-y-4 border-[#817289]'>
                                <span className=''>
                                    22.00 WIB
                                </span>
                            </p>
                        </div>
                        <p className='pt-4 pl-2' >2029</p>
                    </div>
                    <div className='text-center leading-10'>
                        <h4 className='mplus1p font-bold'>Kepada Yth.
                            Bpk/Ibu/Saudara/i
                        </h4>
                        <h1 className='font-extrabold text-2xl'>{personName}</h1>
                        <h3 className='mplus1p font-bold'>
                            di Tempat
                        </h3>
                    </div>
                    <Link to={`/${personName}/main`} className="relative block">
                        <button type="submit" class="px-6 py-2 border-y-4 border-[#817289] bg-[white]/80  rounded-full ">Buka Undangan</button>
                    </Link>
                </div>
            </section >
        </>
    )
}

export default WelcomePage