import React from 'react'

const AccordianItem = ({ num, title, children, curOpen, handleCurOpen }) => {
  // let isOpen = curOpen === num;

  const handleOpen = (id) => {
    handleCurOpen(id !== curOpen ? id : null);
  }

  return (
    <div className={`item ${num === curOpen ? 'open' : ''}`} onClick={() => handleOpen(num)}>
      <p className='number'>{num}</p>
      <p className='title'>{title}</p>
      <p className='icon'>{num === curOpen ? "-" : "+"}</p>
      {num === curOpen && children}
    </div>
  )
}

export default AccordianItem
