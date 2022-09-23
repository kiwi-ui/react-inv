import React from 'react'
import { VscHome } from 'react-icons/vsc'
import { FaRegHeart } from 'react-icons/fa'
import { BsCalendar4Week } from 'react-icons/bs'
import { MdPhotoCameraBack } from 'react-icons/md'
import { BsChatDots } from 'react-icons/bs'
import { Link, useParams } from 'react-router-dom'

const Navbar = () => {
    let { personName } = useParams()
    const array = [<VscHome />, <FaRegHeart />, <BsCalendar4Week />, <MdPhotoCameraBack />, <BsChatDots />]
    return (
        <>
            <nav className='fixed inset-x-0 z-30 flex justify-center w-full h-10 text-center bg-transparent bottom-8'>
                <div className='flex items-center justify-around w-1/2 bg-pink-500'>
                    {array.map((value, index) => {
                        return (
                            <Link to={`/${personName}/${index}`} key={index}>{value}</Link>
                        )
                    })}
                    {/* <VscHome /> */}
                </div>
            </nav>
        </>
    )
}

export default Navbar