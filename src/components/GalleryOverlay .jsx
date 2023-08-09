import React from 'react'

const GalleryOverlay  = ({setOpenGalleryOverlay}) => {
  return (
    <div className=' fixed w-[100%] h-[100vh] top-0  left-0   bg-black z-40 overflow-hidden'>


        <div className=' text-white ps-4' onClick={() => setOpenGalleryOverlay(false)}>
            اغلاق 
        </div>

    </div>
  )
}

export default GalleryOverlay 