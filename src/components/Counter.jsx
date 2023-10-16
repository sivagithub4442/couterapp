import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, reset, decrement, incrementByAmount } from '../redux/counterSlice'

function Counter() {
  const [amount,setamount] = useState("")
    const dispatch = useDispatch()
    const count = useSelector((state) =>state.counter.count)
    const handleIncrement = ()=>{
      if(amount==""){
        alert("Please provide Amount")
      }else{
        dispatch(incrementByAmount(Number(amount)))
      }
    }
  return (
    <div style={{height:'70vh'}} className='w-100 d-flex justify-content-center align-items-center'>
        <div className='d-flex justify-content-center align-items-center border rounded p-5 w-50 flex-column'>

            <h1 style={{fontSize:"100px"}}>{count}</h1>
            <div className='d-flex justify-content-between  mt-5'>
                <button onClick={()=>dispatch(decrement())} className='btn btn-warning mx-3'>Decrement</button>
                <button onClick={()=>dispatch(reset())} className='btn btn-warning mx-3'>Reset</button>
                <button onClick={()=>dispatch(increment())} className='btn btn-warning mx-3'>Increment</button>

            </div>
            <div className='d-flex mt-5'>
              <input onChange={e=>setamount(e.target.value)} type="text" className=''/>
              <button onClick={handleIncrement}  className='btn btn-primary mx-3'>Increment by Amount</button>
            </div>

        </div>
    </div>
  )
}

export default Counter


