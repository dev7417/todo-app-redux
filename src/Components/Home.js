import React, { useState } from 'react'
import './home.css'
import { useSelector, useDispatch } from 'react-redux'
import { addTodod, deleteTodo, clearTodo } from '../actions/actions'
export default function Home() {
    const [inputData, setInputData] = useState('');
    const list = useSelector((state) => (state.todoData.Lists))
    const dispatch = useDispatch();
    return (
        <>
            <div className='main-div'>
                <div className='child-div'>
                    <figure>
                        <figcaption>Add Your List Here</figcaption>
                    </figure>
                    <div className='addItems'>
                        <input type='text' value={inputData} onChange={(event) => setInputData(event.target.value)} placeholder='Add Items...' />
                        <i className="fa fa-plus" onClick={() => dispatch(addTodod(inputData), setInputData(''), console.log(list))}></i>
                    </div>
                    <div className='showItems'>
                        {list.map((item) => {
                            return (

                                <div className='eachItems' key={item.id}>
                                    <h3>{item.data}</h3>
                                    <i className="fa fa-times-circle" title='Delete Item' onClick={() => dispatch(deleteTodo(item.id))}></i>
                                </div>
                            )

                        })}
                        </div>
                        <div className='showItems'>
                            <button className='btn' onClick={()=>dispatch(clearTodo())}><span>Clear All</span></button>
                        </div>
                        </div>
                        </div>
                        </>
                        )
                    }
                        