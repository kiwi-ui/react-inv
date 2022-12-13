import React from 'react';
import { useEffect, useState } from 'react';
const Countdown = (props) => {
    const [expiryTime, setExpiryTime] = useState(props.date);
    const [countdownTime, setCountdownTime] = useState(
        {
            countdownDays: '',
            countdownHours: '',
            countdownlMinutes: '',
            countdownSeconds: ''
        }
    );
    const countdownTimer = () => {

        const timeInterval = setInterval(() => {
            const countdownDateTime = new Date(expiryTime).getTime();
            const currentTime = new Date().getTime();
            const remainingDayTime = countdownDateTime - currentTime;
            const totalDays = Math.floor(remainingDayTime / (1000 * 60 * 60 * 24));
            const totalHours = Math.floor((remainingDayTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const totalMinutes = Math.floor((remainingDayTime % (1000 * 60 * 60)) / (1000 * 60));
            const totalSeconds = Math.floor((remainingDayTime % (1000 * 60)) / 1000);

            const runningCountdownTime = {
                countdownDays: totalDays,
                countdownHours: totalHours,
                countdownMinutes: totalMinutes,
                countdownSeconds: totalSeconds
            }

            setCountdownTime(runningCountdownTime);

            if (remainingDayTime < 0) {
                clearInterval(timeInterval);
                setExpiryTime(false);
            }

        }, 1000);
    }

    useEffect(() => {
        countdownTimer();
    });

    return (
        <>
            {expiryTime !== false ?
                <div className='text-[#808080] relative flex flex-row items-center justify-center w-full gap-5 py-4 sm:gap-3 h-fit md:flex-warp'>
                    <div className='flex flex-col p-5 bg-white rounded-lg border-y-4 border-[#817289] sm:p-3 '>
                        <button type="button" className="btn btn-outline-success">
                            {countdownTime.countdownDays}
                        </button>
                        <p>Hari</p>
                    </div>
                    <div className='flex flex-col p-5 bg-white rounded-lg border-y-4 border-[#817289] sm:p-3'>
                        <button type="button" className="btn btn-outline-success">
                            {countdownTime.countdownHours}
                        </button>
                        <p>Jam</p>
                    </div>
                    <div className='flex flex-col p-5 bg-white rounded-lg border-y-4 border-[#817289] sm:p-3'>
                        <button type="button" className="btn btn-outline-success">
                            {countdownTime.countdownMinutes}
                        </button>
                        <p>Menit</p>
                    </div>
                    <div className='flex flex-col p-5 bg-white rounded-lg border-y-4 border-[#817289] sm:p-3'>
                        <button type="button" className="btn btn-outline-success">
                            {countdownTime.countdownSeconds}
                        </button>
                        <p>Detik</p>
                    </div>
                </div>
                : <p>Acara sudah selesai</p>}
        </>
    )
}


export default Countdown