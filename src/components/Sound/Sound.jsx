

import React from 'react'
import sound1 from '../../Assets/song/sound2.mp3'
import { useRef } from 'react'
// import { useState } from 'react'
import { AiFillPlayCircle } from 'react-icons/ai'
import { AiFillPauseCircle } from 'react-icons/ai'
import { useState } from 'react'

function Sound(props) {
    const [isDisabled, setIsDisabled] = useState('None')

    const vidRef = useRef(null);

    // const onButtonDisable = (param) => {
    //     setIsDisabledPlay(param)
    // }

    const handlePlayVideo = () => {
        vidRef.current.play();
        setIsDisabled('Button2')
    }
    const handlePauseVideo = (param) => {
        vidRef.current.pause()
        setIsDisabled('Button1')
    }



    return (
        <div className='absolute right-5 top-5 '>

            <audio ref={vidRef}>
                <source src={sound1} type="audio/mp3" />
            </audio>






            <div className='w-2/6 inline'>
                <button onClick={handlePlayVideo} className='relative z-20' disabled={!['None', 'Button1'].includes(isDisabled)}><AiFillPlayCircle size={'3rem'} fill={'#817289'} fillOpacity={'0.8'} /></button>
                <button onClick={handlePauseVideo} className='relative z-20' disabled={!['None', 'Button2'].includes(isDisabled)}><AiFillPauseCircle size={'3rem'} fill={'#817289'} fillOpacity={'0.8'} /></button>
            </div>
        </div >

    )
}


export default Sound