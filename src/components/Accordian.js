import React, { useState } from 'react';
import AccordianItem from './AccordianItem';

const Accordian = ({ data }) => {
  // We need a state that would track the number that is currently open
  const [curOpen, setCurOpen] = useState(null)

  return (
    <div className='accordian'>
      {data.map(
        (el, i) =>
          <AccordianItem num={i + 1} title={el.title} text={el.text} key={i} curOpen={curOpen} handleCurOpen={setCurOpen} />
      )}
    </div>
  )
}

export default Accordian
