import React from 'react'
import AddProduct from './AddProduct'
import Categiry from './Categiry'

function Nav() {
  return (
    <div className='w-[15%] h-full flex flex-col items-center py-5'>
      <AddProduct/>
      <Categiry/>
    </div>
  )
}

export default Nav