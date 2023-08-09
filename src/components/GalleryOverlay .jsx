import React from 'react'

const GalleryOverlay  = ({setOpenGalleryOverlay}) => {
  return (
    <div className='fixed w-[100%] h-[100vh] top-0  left-0 bg-black z-40 overflow-hidden'>


        <button className=' text-white p-4 ' onClick={() => setOpenGalleryOverlay(false)}>
            اغلاق 
        </button>


        <div>
            <div className=' w-[200px] '>

            </div>
        </div>




    </div>
  )
}

export default GalleryOverlay 