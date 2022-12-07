import React from 'react';
import { useParams, Link } from 'react-router-dom';
// import Cover from './Cover';
// import '../index.css';
// import { img1 } from require('../Assets/cover.png');

const WelcomePage = () => {
    let { personName } = useParams()
    console.log(personName)
    return (
        <section className="w-screen h-screen  grid grid-flow-row items-end bg-blend-darken bg-[url('./pages/cover.png')] bg-no-repeat bg-clip-padding bg-origin-padding bg-top">
            {/* <img src={require('../Assets/cover.png')} alt="cover"></img> */}
            <div className='absolute z-10 w-screen h-screen bg-black/30'></div>
            <div className='grid items-end w-full grid-flow-row p-5 content-evenly h-3/5'>
                <div className='z-20 font-sans font-semibold leading-9 text-center h-max'>
                    <h4 className="text-white">THE WEDDING OF</h4>
                    <p className='font-elsie-swash  text-[#9d583d] font-normal text-6xl '>Yusni & Anggara</p>
                    <h4 className='text-white mplus1p'>Kepada Yth.
                        Bpk/Ibu/Saudara/i
                    </h4>
                    <h1 className='text-white'>{personName}</h1>
                    <h3 className='text-white mplus1p'>
                        di Tempat
                    </h3>
                    <Link to={`/${personName}/main`} className="relative block">
                        <button type="submit" className='px-6 py-1 bg-[#9d583d] text-white rounded-full rea'>Buka Undangan</button>
                    </Link>
                </div>
            </div>
        </section >
    )
}

export default WelcomePage