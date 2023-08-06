import React from 'react'

const AccordianItem = ({ num, title, text, curOpen, handleCurOpen }) => {
  // let isOpen = curOpen === num;

  const handleOpen = (id) => {
    handleCurOpen(id !== curOpen ? id : null);
  }

  return (
    <div className={`item ${num === curOpen ? 'open' : ''}`} onClick={() => handleOpen(num)}>
      <p className='number'>{num}</p>
      <p className='title'>{title}</p>
      <p className='icon'>{num === curOpen ? "-" : "+"}</p>
      {num === curOpen && <div className='content-box'>{text}</div>}
    </div>
  )
}

export default AccordianItem
