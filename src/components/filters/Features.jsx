import React from 'react'

const Features = ({filterLabel}) => {
  return (
    <div className=' flex flex-col gap-2 p-4'>
        <h1 className=' font-bold'>
          {filterLabel}
        </h1>

    </div>
  )
}

export default Features