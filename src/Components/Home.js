import React, { useState } from 'react'
import './home.css'
import { useDispatch } from 'react-redux'
import { addTodod,deleteTodo,clearTodo  } from '../actions/actions'
export default function Home() {
    const[inputData, setInputData] = useState('');
    const dispatch = useDispatch();
  return (
    <>
        <div className='main-div'>
            <div className='child-div'>
                <figure>
                    <figcaption>Add Your List Here</figcaption>
                </figure>
                <div className='addItems'>
                    <input type='text' value={inputData} onChange={(event)=>setInputData(event.target.value)} placeholder='Add Items...'/>
                    <i className="fa fa-plus" onClick={()=> dispatch(addTodod(inputData))}></i>
                </div>
            </div>
        </div>
    </>
  )
}
