import React from 'react'
import bgFlower from '../Assets/blue-flower-background.jpg'
import borderFlower from '../Assets/border.png'
// import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import Cover2 from './cover2/Cover2';
import Sound from '../components/Sound/Sound';
import Cover3 from './cover2/Cover3';
import DemoBook from './cover2/Cover3';

const Kerangka = () => {

    return (
        <>
            {/* <Sound /> */}
            <div className='w-full h-screen bg-[url("Assets/blue-flower-background.jpg")] bg-cover bg-no-repeat flex justify-center items-center'>
                <div className='flex items-center justify-center w-11/12 h-[80%] '>
                    <div className='relative w-full h-full '>
                        <div className='h-full p-4 border-4 '>
                            <Cover3 />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Kerangka