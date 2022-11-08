import React,{useState,useMemo} from 'react'

function UseState() {
    const[count,setcount]=useState(0);
    const[count2,setcount2]=useState(1);

    const multicountMemo = useMemo(function multicount(){
        return count*5
      },[count]
   )
      
  return (
    <div>
        <h2 className='memo'>Implementation of useMemo</h2>
      <button  className='button1'onClick={()=>setcount(count+1)}>COUNT {count}</button>
       <button className='button2' onClick={()=>setcount2(count2+1)}>Update {count2}</button> 
       <h2 className='memo1'>{multicountMemo} Multiplication</h2> 
      

    </div>
  )
}

export default UseState
