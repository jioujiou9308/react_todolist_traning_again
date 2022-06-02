import React from 'react'
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useState } from 'react';
import TodoRow from '../compoent/TodoRow';


const Main = () => {
     const init = [{
          id: 1,
          content: "學習css",
          date: "2022/02/05"
     }, {
          id: 2,
          content: "學習node.js",
          date: "2022/02/05"
     }, {
          id: 3,
          content: "學習javascript",
          date: "2022/02/05"
     }]
     const [rows, setRows] = useState(init)
     return (
          <div>
               <div className='flex '>
                    <div className='flex w-5/6 mx-2 '>
                         <input type="text" className='w-1/2 mr-2 border-2' placeholder='todo' />
                         <input type="text" className='w-1/2 border-2' placeholder='yyyy/mm/dd' />
                    </div>
                    <div className='flex items-center w-1/6'>
                         <AiOutlinePlusCircle className='w-8 h-8 mx-auto ' />
                    </div>
               </div>
               <div>
                    {rows.map((row) => {
                         return <TodoRow key={row.id} row={row} rows={rows} setRows={setRows} />
                    })}

               </div>
          </div>

     )
}

export default Main

//TODO 建立新增的功能