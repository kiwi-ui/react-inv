import React, { useState } from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { useEffect } from 'react';
import imgGalleery1 from '../Assets/Gallery_h1_4.jpg'
import imgGalleery2 from '../Assets/Gallery_h1_5.jpg'
import imgGalleery3 from '../Assets/Gallery_h1_6.jpg'
import { GrNext } from 'react-icons/gr'
import { GrPrevious } from 'react-icons/gr'
import { AiOutlineCloseCircle } from 'react-icons/ai'
const Page3 = () => {

    const [width, setWidth] = useState(window.innerWidth)

    const screenChange = () => {
        if (window.innerWidth < 880) {
            return 175
        }
        else if (window.innerWidth > 1000) {
            return 36
        }
        else {
            return 40
        }
    }

    useEffect(() => {
        const handleWindowResize = () => {
            setWidth(window.innerWidth)
            // console.log(`ini adalah ${window.innerWidth}`)
        }
        window.addEventListener("resize", handleWindowResize);

        // Return a function from the effect that removes the event listener
        return () => {
            window.removeEventListener("resize", handleWindowResize)
        };
    }, []);

    // console.log(`ini adalah ${window.innerWidth}`)

    const [zoom, setZoom] = useState(true)

    return (
        <>
            {zoom ? (
                <div className='text-center relative h-full bg-white flex flex-col justify-center text-[#808080] py-20'>
                    <h5 className='font-alexBrush text-5xl sm:text-3xl font-extrabold text-[#808080]'>
                        Galeri
                    </h5>
                    {/* <button className="bg-blue-200 text-black active:bg-blue-500 
            font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-2/5" onClick={() => { setZoom(true) }}></button> */}
                    {/* <button className="bg-blue-200 text-black active:bg-amber-600 
            font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-2/5" onClick={() => { setZoom(false) }}>false</button> */}

                    <CarouselProvider className='relative top-5 md:top-0'
                        naturalSlideWidth={100}
                        // window.innerWidth < 880 ? 175 : 40
                        naturalSlideHeight={window.innerWidth < 880 ? 175 : 40}
                        totalSlides={3}>
                        <Slider className='h-full px-2' onClick={() => { setZoom(false) }}>
                            <Slide index={0}><img className='rounded-full border-[#817289] border-y-4' src={imgGalleery1}></img></Slide>
                            <Slide index={1}><img className='rounded-full border-[#817289] border-y-4' src={imgGalleery2}></img></Slide>
                            <Slide index={2}><img className='rounded-full border-[#817289] border-y-4' src={imgGalleery3}></img></Slide>
                        </Slider>
                        <div className='flex flex-row absolute w-1/2 justify-between px-4 left-1/4 md:left-0 md:w-full top-[50%] text-white'>
                            <ButtonBack><GrPrevious size={"2rem"} /></ButtonBack>
                            <ButtonNext><GrNext size={"2rem"} /></ButtonNext>
                        </div>
                    </CarouselProvider>
                </div>



            )
                :
                // < div className='h-full w-full absolute z-50'>
                <div className='fixed w-[102vw] h-[104vh] -left-[5.6%] -top-[14%]'>
                    <div className='text-center relative h-full bg-black opacity-90 flex flex-col justify-center'>
                        {/* <h1 className='font-alexBrush text-5xl sm:text-3xl font-extrabold text-black'>Gallery</h1> */}
                        <div className='w-full flex flex-col items-end'>
                            {/* <button className="bg-blue-200 text-black active:bg-blue-500 
            font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-2/5" onClick={() => { setZoom(true) }}></button> */}
                        </div>
                        <CarouselProvider className='relative top-5 md:top-0'
                            naturalSlideWidth={100}
                            // window.innerWidth < 880 ? 175 : 40
                            naturalSlideHeight={window.innerWidth < 880 ? 175 : 40}
                            totalSlides={3}>
                            <Slider className='h-full'>
                                <Slide><img src={imgGalleery1}></img></Slide>
                                <Slide index={1}><img src={imgGalleery2}></img></Slide>
                                <Slide index={2}><img src={imgGalleery3}></img></Slide>
                            </Slider>
                            <div className='flex flex-row absolute w-1/2 justify-between px-4 left-1/4 md:left-0 md:w-full top-[50%] text-white'>
                                <ButtonBack><GrPrevious size={"2rem"} /></ButtonBack>
                                <ButtonNext><GrNext size={"2rem"} /></ButtonNext>
                            </div>
                        </CarouselProvider>
                    </div>

                    <button className="bg-blue-200 text-black active:bg-blue-500 
            font-bold fixed rounded shadow hover:shadow-lg outline-none focus:outline-none left-[93%] -top-10" onClick={() => { setZoom(true) }}><AiOutlineCloseCircle size={'3rem'} /></button>
                </div>

                // </div>
            }
        </>




    )
}


export default Page3