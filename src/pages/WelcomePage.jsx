import React from 'react';
import { useEffect, useRef, useState } from 'react'
import { useParams, Link } from 'react-router-dom';
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
        <section className="w-screen h-screen font-Poppins text-black grid grid-flow-row items-end bg-blend-darken bg-[url('./pages/cover.png')] bg-no-repeat  bg-clip-padding bg-origin-padding bg-top">
            {/* <img src={require('../Assets/cover.png')} alt="cover"></img> */}
            <div className='absolute z-10 w-screen h-screen bg-white/10'></div>
            <div className='grid items-end w-full grid-flow-row p-5 content-evenly h-3/5'>
                <div className='z-20 font-semibold leading-9 text-center h-max'>
                    <h4 className="text-center">THE WEDDING OF</h4>
                    <p className='font-alexBrush text-6xl sm:text-5xl text-[#817289] font-normal '>Yusni & Anggara</p>
                    <h4 className='mplus1p'>Kepada Yth.
                        Bpk/Ibu/Saudara/i
                    </h4>
                    <h1 className=''>{personName}</h1>
                    <h3>
                        di Tempat
                    </h3>
                    <Link to={`/${personName}/main`} className="relative block">
                        <button type="submit" className='px-6 py-1 bg-[#817289]  rounded-full rea' >Buka Undangan</button>
                    </Link>
                </div>
            </div>
        </section >
    )
}

export default WelcomePage