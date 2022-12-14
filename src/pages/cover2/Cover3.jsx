import React from 'react'
import { useState, useEffect } from 'react';
import { FlippingPages } from 'flipping-pages';
import 'flipping-pages/dist/style.css';

// import './Appp.css';
import Page1 from '../Page1.jsx'
import Page2 from '../Page2.jsx'
import Page3 from '../Page3.jsx'
import Page4 from '../Page4.jsx'
import Page5 from '../Page5.jsx'
import Sound from '../../components/Sound/Sound.jsx'

import { MdSwipe } from 'react-icons/md'
import Page6 from '../Page6.jsx';
import borderflowerPurple1 from '../../Assets/border/border-flowerPurple1.png';
import borderflowerPurple2 from '../../Assets/border/border-flowerPurple2.png';
import borderelementPurple1 from '../../Assets/border/border2-elementPurple1.png';
import borderelementPurple2 from '../../Assets/border/border2-elementPurple2.png';
import { BsCaretRight, BsCaretLeft } from 'react-icons/bs'
import { Link } from 'react-router-dom';
const Cover3 = () => {

    const [selected, setSelected] = useState(0);

    const back = () => {
        setSelected(selected => Math.max(selected - 1, 0));
    };

    const next = () => {
        setSelected(selected => Math.min(selected + 1, 5));
    };

    const [disappear, setDisappear] = useState(true)
    useEffect(() => {
        const timer = setTimeout(() => {
            setDisappear(false)
        }, 7000);
        return () => clearTimeout(timer);
    }, []);

    const objetComponent = [
        {
            id: 1,
            page: <Page1 />,
            status: ''
        },
        {
            id: 2,
            page: <Page2 />,
            status: ''
        },
        {
            id: 3,
            page: <Page3 />,
            status: ''
        },
        {
            id: 4,
            page: <Page4 />,
            status: ''
        },
        {
            id: 5,
            page: <Page5 />,
            status: ""
        },
        {
            id: 6,
            page: <Page6 />,
            status: ''
        },
    ]

    return (
        <>
            <Sound />

            <img src={borderflowerPurple2} alt="" srcset="" className='w-1/4 absolute  md:w-[45%] md:h-1/3 h-[45%] opacity-60 z-0' />
            <img src={borderflowerPurple1} alt="" srcset="" className='w-1/4 absolute  md:w-[45%] md:h-1/3 h-[45%] bottom-0 right-0  opacity-60 z-0' />
            {/* <img src={borderelementPurple2} alt="" srcset="" className='w-1/4 absolute z-0 md:w-[40%] h-[30%] top-0 right-0' /> */}
            {/* <img src={borderelementPurple1} alt="" srcset="" className='w-1/4 absolute z-0 md:w-[40%] h-[30%] bottom-0 left-0 ' /> */}
            <div className='w-full 
            h-screen bg-white
            bg-[url("Assets/bg-purpleFlower.jpg")]
            bg-cover bg-center bg-no-repeat flex justify-center items-center overflow-hidden '>
                <div className='flex items-center justify-center w-11/12 h-[80%]'>
                    <div className='relative w-full h-full '>
                        <div className='h-full border-4 
                         rounded-xl border-[#817289] '>
                            <FlippingPages
                                direction="right-to-left"
                                onSwipeEnd={setSelected}
                                selected={selected}
                                disableSwipe={true}
                                animationDuration={800}
                            >
                                {/* <div className="page page1">Page 1</div>
                                <div className="page page2">Page 2</div>
                                <div className="page page3">Page 3</div> */}

                                {objetComponent.map((x) => {
                                    return (
                                        <div key={x.id} className={`page page${objetComponent.length + 1} h-full absolute float-left w-full `}>
                                            {/* <img
                                    src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"
                                    className="block w-full h-full"
                                    alt="..."
                                /> */}
                                            {x.page}
                                            {/* <div class="carousel-caption hidden md:block absolute text-center">
                                </div> */}
                                        </div>
                                    )
                                })}
                            </FlippingPages>
                        </div>
                        <div className=' pt-3 flex flex-row w-[98%] justify-evenly z-0'>
                            <button onClick={back} className='rounded-full border-[0.2rem] border-[#817289] bg-transparent '><BsCaretLeft size={'2rem'} fill='#817289' /></button>
                            <button onClick={next} className='rounded-full border-[0.2rem] border-[#817289] bg-transparent'><BsCaretRight size={'2rem'} fill='#817289' /></button>
                        </div>
                        {/* <div className='flex justify-end py-6'> */}

                        {/* <MdSwipe color='grey' size={50} className='animate-swipee' /> */}
                        {/* <div className='animate-blinkk text-3xl text-gray-500'>swipe &#8594; &#8594;</div> */}
                        {/* {
                                disappear ? <div className='animate-blinkk text-3xl text-gray-500'>swipe &#8594; &#8594;</div> : null
                            }
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    );

}
export default Cover3