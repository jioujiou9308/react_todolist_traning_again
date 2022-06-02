import React from 'react'
import { AiTwotoneEdit, AiTwotoneDelete } from "react-icons/ai";
const TodoRow = (props) => {
     const { rows, row, setRows } = props
     return (
          <div className='flex '>
               <div className='flex w-5/6 m-2'>
                    <span className='w-1/2 mx-2 border-2'>Todo : {row.content}</span>
                    <span className='w-1/2 border-2'>Date : {row.date}</span>

               </div>
               <div className='flex w-1/6'>
                    <AiTwotoneEdit className='w-8 h-8' />
                    <AiTwotoneDelete className='w-8 h-8' />
               </div>
          </div>
     )
}

export default TodoRow