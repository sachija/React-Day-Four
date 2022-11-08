import React from 'react'

import { useRef } from 'react';

function UseRef() {
    
   const focusPoint=useRef(" ");
   const onClickHandler=()=>{
    focusPoint.current.value= focusPoint.current.focus()
   }

  
  return (
    <div>
     < h2 className='imp'> implementation of UseRef</h2>     
        <button className='button1'onClick={onClickHandler}>Action</button> <hr></hr>
        <textarea className='text' ref={focusPoint}></textarea>
    </div>
  )
}

export default UseRef