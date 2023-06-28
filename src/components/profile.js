import React from 'react'

const profile = () => {

    const para2 = "Bharath";
    const para1 = "Hunkunda Sreenivasa";
    const para3 = "A passionate web developer with 7 years of experience in the industry. I thrive on building engaging and user-friendly websites that leave a lasting impression.";

    return(
    <div className='w-full mx-auto'>
        <h3 className='text-2xl decoration-8 font-medium pb-3 mt-6'>{para1}</h3>
        <h1 className="title lg:text-7xl text-5xl text-cyan-400 antialised line-clamp-1 font-black pb-6">{para2}</h1>
        <p className="text-lg">{para3}</p>
    </div>

    )
}

export default profile;
