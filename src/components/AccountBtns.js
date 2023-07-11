import React from 'react';

const AccountBtns = () => {
    return ( 
    
    <div className='flex items-center font-medium'>

        <a className='hover:text-stone-200 transition ' href = '#' > My Account </a>
        <span className='mx-6 text-white/20 font-thin'>|</span>

        <button className=' btn h-[52px]  hover:text-white text-base px-8 font-semibold'>Book Classes</button>

        </div>
    );
};

export default AccountBtns;