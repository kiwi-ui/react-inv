import React from 'react'
import { useRef, useState } from 'react'
import { BiSend } from 'react-icons/bi'
// import styled from 'styled-components'

const Page4 = () => {
    const formRef = useRef(null)
    const scriptUrl = "https://script.google.com/macros/s/AKfycbwXdcF0THfZafsF_clh-osODUnM7gqNG8rNIk7ba4BBHFQ_KY7gV0rC9HTICLAZe4ac/exec"
    const [loading, setLoading] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)

        fetch(scriptUrl, {
            method: 'POST',
            body: new FormData(formRef.current),

        }).then(res => {
            console.log("SUCCESSFULLY SUBMITTED")
            setLoading(false)
            e.target.reset()
        })
            .catch(err => console.log(err))
    }

    return (
        <>
            {/* <div className='w-full bg-white'> */}

            <h5 className='absolute font-alexBrush text-5xl sm:text-3xl font-extrabold text-black pt-10 w-full text-center'>
                Harapan
            </h5>
            <div className="w-full bg-white h-full">

                <form className='bg-white shadow-md rounded px-10 pt-6 pb-8 mb-4 flex h-full flex-col content-center justify-center' ref={formRef} onSubmit={handleSubmit} name="google-sheet">
                    <div className="input-style mb-4">
                        <label htmlFor='name' className='block text-gray-700 text-sm font-bold mb-2'>
                            Name
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" id="name" name="name" placeholder='Nama' />
                    </div>
                    <div className="input-style mb-6">
                        <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='name' >Pesan</label>
                        <input type="text" name="pesan" placeholder='Pesan' className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                    </div>
                    {/* <div className="input-style">
                    <label htmlFor='name'>Pesan</label>
                    <input type="text" name="pesan" placeholder='Your pesan *' />
                </div> */}
                    <div className="input-style">
                        <button className='bg-slate-400 px-4 py-2 rounded-xl' type="submit" onClick={() => console.log('berhasil')} ><span>{loading ? "Pesan Terkirim!" : "Kirim"}</span></button>
                    </div>
                </form>
            </div>
            {/* </div> */}
        </>
    )
}

export default Page4

// const FormStyle = styled.div`
//     display: flex;
//     justify-content: center;
//     align-items: center;

//     .container{
//         background-color: #F9CFF2;
//         margin-top: 10%;
//         padding: 10rem 10rem 10rem 10rem;
//         display: flex;
//         justify-content: center;
//         align-items: center;
//         @media(max-width: 610px){
//             padding: 4rem 4rem 4rem 4rem;
//         }

//         .input-style{
//             padding-top: 0.8em;
//             display: flex;
//             flex-direction: column;
//             gap: 0.8em;

//             label{
//                 font-family: 'Poppins', sans-serif;
//             }

//             input{
//                 outline: none;
//                 border: none;
//                 padding: 0.8em;
//                 border-radius: 2em;
//             }
//             input[type=submit]{
//                 background-color: #52154E;
//                 color: #FFFFFFFF;
//                 font-weight: bold;


//             }
//         }

//     }

// `

