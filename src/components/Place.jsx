import React from 'react'

const Place = () => {
    return (
        <div class="mapouter flex justify-center w-full h-full py-6">
            <iframe className='rounded-full  shadow-slate-500 shadow-xl md:w-5/6 xl:h-96 h-80 w-3/6' id="gmap_canvas" src="https://maps.google.com/maps?q=bakorwil%20pamekasan&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="100" scrolling="no" marginheight="0" marginwidth="0"></iframe>
        </div>
    )
}

export default Place