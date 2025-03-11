import React from 'react'

function Home() {
  return (
  <>
   <div className="h-[80vh] w-full flex flex-col items-center justify-center gap-7 relative bg-gradient-to-br from-gray-700 to-gray-600">
    <img src="Project_image3.jpg" alt="society-living-img" className="w-full h-full object-cover absolute mix-blend-overlay shadow-2xl"></img> 
    <div className="p-96 py-28 ">
    
    <div className='flex flex-col gap-6'>  
     <div className='flex flex-col justify-start items-start font-serif text-white'>   
    
      <span className='font-roboto font-bold text-[48px]'>
      Smart Living,
      </span> 
      <span className='font-roboto font-bold text-[48px]'>
       Smarter Management
      </span>
    </div>

     <p className="text-white font-roboto text-[20px]">Experience the future of community living with our comprehensive society management solution</p>

    <div className='flex flex-row'> 
    <button className="btn px-5 py-2 bg-black text-white absolute m-4 ">
        Get Started 
    </button>
    <img src="D:\TYBCA_FINAL_PROJECT\Frontend\my-project\src\assets\Icons\Arrow.svg"></img>
    </div>
   

    </div>


    </div>
    
  </div>
  </>
  )
}

export default Home;