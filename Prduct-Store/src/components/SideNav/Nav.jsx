import React from 'react'
import AddProduct from './AddProduct'
import Categiry from './Categiry'
import DarkLightThheme from './DarkLightThheme'

function Nav() {
  return (
    <div className='w-[15%] h-full flex flex-col items-center py-5'>
      <AddProduct/>
      <Categiry />
      <DarkLightThheme/>
    </div>
  )
}

export default Nav