import React from 'react'
// import borderFlower from "../../Assets/bunga-biru.png"
import 'tw-elements';
import Page1 from '../Page1'
import Page2 from '../Page2'
import Page3 from '../Page3'
import Page4 from '../Page4'
import { RiHomeHeartFill } from 'react-icons/ri'
import { BsFillCalendar2CheckFill } from 'react-icons/bs'
import { BsFillJournalBookmarkFill } from 'react-icons/bs'
import { MdPhotoSizeSelectActual } from 'react-icons/md'
import { BsFillChatLeftDotsFill } from 'react-icons/bs'
import Page5 from '../Page5'
const Cover2 = () => {
    // const [play, setPlay] = useState(false)
    // const playSong = () => {

    // }

    const objetComponent = [
        // {
        //     id: 1,
        //     page: <Page1 />,
        //     status: 'active'
        // },
        // {
        //     id: 2,
        //     page: <Page2 />,
        //     status: ''
        // },
        // {
        //     id: 3,
        //     page: <Page3 />,
        //     status: 'active'
        // },
        // {
        //     id: 4,
        //     page: <Page4 />,
        //     status: 'active'
        // },
        {
            id: 5,
            page: <Page5 />,
            status: "active"
        },
    ]

    return (
        <div className='w-full h-full bg-pink-300'>
            <div id="carouselExampleCaptions" className="relative h-full carousel slide" data-bs-ride="carousel static" data-carousel="static" data-bs-interval="false">
                <div className="absolute flex justify-center w-full p-0 m-0 carousel-indicators -bottom-[6rem] md:-bottom-[5rem] -left-2 h-[8%] md:h-[10%]">
                    <div className='flex items-center justify-around w-2/6 rounded-full md:w-11/12 bg-lime-500 -left-2'>
                        <button
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to="0"
                            className="active"
                            aria-current="true"
                            aria-label="Slide 1"
                        >
                            <RiHomeHeartFill size={'85%'} />
                        </button>
                        <button
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to="1"
                            aria-label="Slide 2"
                        >
                            <BsFillCalendar2CheckFill size={'85%'} />
                        </button>
                        <button
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to="2"
                            aria-label="Slide 3"
                        >
                            <BsFillJournalBookmarkFill size={'85%'} />
                        </button>
                        <button
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to="3"
                            aria-label="Slide 4"
                        >
                            <MdPhotoSizeSelectActual size={'85%'} />
                        </button>
                        <button
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to="3"
                            aria-label="Slide 4"
                        >
                            <BsFillChatLeftDotsFill size={'85%'} />
                        </button>
                    </div>

                </div>
                <div class="carousel-inner absolute w-full overflow-y-scroll h-full">
                    {objetComponent.map((x) => {
                        return (
                            <div key={x.id} className={`carousel-item h-full ${x.status} absolute float-left w-full`}>
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
                    {/* <div class="carousel-item active relative float-left w-full">
                        <img
                            src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"
                            class="block w-full"
                            alt="..."
                        />
                        <p>{objetComponent[0].page}</p>
                        <div class="carousel-caption hidden md:block absolute text-center">
                            <h5 class="text-xl">First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                    <div class="carousel-item relative float-left w-full">
                        <img
                            src="https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg"
                            class="block w-full"
                            alt="..."
                        />
                        <div class="carousel-caption hidden md:block absolute text-center">
                            <h5 class="text-xl">Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>
                    <div class="carousel-item relative float-left w-full">
                        <img
                            src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg"
                            class="block w-full"
                            alt="..."
                        />
                        <div class="carousel-caption hidden md:block absolute text-center">
                            <h5 class="text-xl">Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                    <div class="carousel-item relative float-left w-full">
                        <img
                            src="https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg"
                            class="block w-full"
                            alt="..."
                        />
                        <div class="carousel-caption hidden md:block absolute text-center">
                            <h5 class="text-xl">Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>
 */}
                </div>
                {/* <button
                    class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev"
                >
                    <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button
                    class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next"
                >
                    <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button> */}
            </div>
        </div>

    )

}


export default Cover2