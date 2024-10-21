// *********************
// IN DEVELOPMENT
// *********************

import React from 'react'

const UrgencyText = ({stock} : { stock: number }) => {
  return (
    <p className='text-success text-xl max-[500px]:text-lg'>Поторопитесь! Осталось только <span className='badge badge-success text-white text-xl max-[500px]:text-lg'>{stock}</span> товара(ов) на складе!</p>
  )
}

export default UrgencyText