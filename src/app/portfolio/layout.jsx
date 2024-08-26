import React from 'react'

const layout = ({children}) => {
  return (
    <div className='w-full h-full py-20'>
      <h1 className='text-8xl font-bold'>Our Works</h1>
      {children}
    </div>
  )
}

export default layout