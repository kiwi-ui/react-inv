import React from 'react'
import coverImage from './cover.png'
import { RiInstagramFill } from 'react-icons/ri'
import { useParams } from 'react-router-dom'
const Cover = () => {

    let { personName } = useParams()
    return (
        <>
            <div className='w-full h-screen py-20 bg-emerald-500'>
                <h1 className='text-center'>Assalamualaikum WR WB</h1>
                <div className='flex flex-row justify-around w-full h-full bg-pink-600 content md:flex-col '>
                    <div className='flex flex-col items-center w-1/2 p-10 bride bg-sky-700 md:h-2/5 md:w-full md:p-0'>
                        {/* <p>Bride</p> */}
                        <img src={coverImage} alt="" srcset="" className="w-4/6 h-5/6" />
                        <div className='relative z-10 flex flex-col justify-center w-3/5 p-10 -mt-20 text-center h-3/6 box-statement bg-slate-600 '>
                            <p className="mb-3 text-3xl font-bold font-elsie-swash">Yusni Yusni</p>
                            <ul>Putri ke sekian dari bapak anu siapa la</ul>
                        </div>
                        <span className='z-20 flex justify-center -m-2 '>
                            <RiInstagramFill className='border-black rounded-full border-3' />
                        </span>

                    </div>
                    <div className='flex flex-col items-center w-1/2 p-10 text-center bride bg-sky-700 md:h-2/5 md:w-full md:p-0'>
                        {/* <p>Bride</p> */}
                        <img src={coverImage} alt="" srcset="" className="w-4/6 h-5/6" />
                        <div className='relative z-10 flex flex-col justify-center w-3/5 p-10 -mt-20 h-3/6 box-statement bg-slate-600'>
                            <p className="mb-3 text-3xl font-bold font-elsie-swash">Yusni Yusni</p>
                            <ul>Putri ke sekian dari bapak anu siapa la</ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cover