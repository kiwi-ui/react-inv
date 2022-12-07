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
import Snowfall from 'react-snowfall';
import { MdSwipe } from 'react-icons/md'


const Cover3 = () => {

    const [selected, setSelected] = useState(0);

    const back = () => {
        setSelected(selected => Math.max(selected - 1, 0));
    };

    const next = () => {
        setSelected(selected => Math.min(selected + 1, 0));
    };

    const [disappear, setDisappear] = useState(true)
    useEffect(() => {
        const timer = setTimeout(() => {
            setDisappear(false)
        }, 7000);
        return () => clearTimeout(timer);
    }, []);

    const objetComponent = [
        // {
        //     id: 1,
        //     page: <Page1 />,
        //     status: 'active'
        // },
        // {
        //     id: 2,
        //     page: <Page2 />,
        //     status: 'active'
        // },
        // {
        //     id: 3,
        //     page: <Page3 />,
        //     status: ''
        // },
        {
            id: 4,
            page: <Page4 />,
            status: ''
        },
        // {
        //     id: 5,
        //     page: <Page5 />,
        //     status: ""
        // },
    ]

    return (
        <>
            <Sound />
            {/* <Snowfall 
                style={{transform: 'rotate(180deg)', position: 'fixed',
                width: '100vw',
                height: '100vh',
                zIndex: '10',
            }}
                images={images}
                // radius={[10, 20]}
        snowflakeCount={80} /> */}
            <div className='w-full h-screen bg-[url("Assets/green-flower-background.jpg")] bg-cover bg-no-repeat flex justify-center items-center overflow-hidden'>
                <div className='flex items-center justify-center w-11/12 h-[80%]'>
                    <div className='relative w-full h-full '>
                        <div className='h-full border-4 border-[#E9BE6A] rounded-xl'>
                            <FlippingPages
                                direction="right-to-left"
                                onSwipeEnd={setSelected}
                                selected={selected}
                            >
                                {/* <div className="page page1">Page 1</div>
                                <div className="page page2">Page 2</div>
                                <div className="page page3">Page 3</div> */}

                                {objetComponent.map((x) => {
                                    return (
                                        <div key={x.id} className={`page page${objetComponent.length + 1} h-full absolute float-left w-full`}>
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
                        {/* <div className='flex flex-row justify-evenly'>
                            <button onClick={back} className='animate-pulse italic'>Swipe</button>
                            <button onClick={next}>Next</button>
                        </div> */}
                        <div className='flex justify-end py-6'>

                            {/* <MdSwipe color='grey' size={50} className='animate-swipee' /> */}
                            {/* <div className='animate-blinkk text-3xl text-gray-500'>swipe &#8594; &#8594;</div> */}
                            {
                                disappear ? <div className='animate-blinkk text-3xl text-gray-500'>swipe &#8594; &#8594;</div> : null
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}
export default Cover3