import React from 'react'
import { MdSend } from 'react-icons/md'
const ButtonSend = () => {
    return (
        <>
            <div className='flex flex-row items-center gap-3'>
                <MdSend /><span>Kirim</span>
            </div>
        </>
    )
}

export default ButtonSend