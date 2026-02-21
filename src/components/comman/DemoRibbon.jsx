import React from 'react'

const DemoRibbon = () => {
  return (
    <div className='w-full bg-red-400 text-white h-16 flex items-center justify-between'>
      <h2></h2>
      <h2>This demo is reset every 24 hours!</h2>
      <div>
        <button className='bg-white px-5 font-semibold py-2 text-black mr-2 rounded-md text-sm'>Buy Now</button>
      </div>
    </div>
  )
}

export default DemoRibbon
