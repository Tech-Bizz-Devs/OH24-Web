import React from 'react';
import { AiFillEdit } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";

const ToDo = (      {text, id}
    ) => {

        const deleteTodo = () => {
            axios.delete(`${baseURL}/delete/${id}`).then((res) => {
              console.log(res.data);
            })
        }

  return ( <div className='ToDo'>Todo
  <div className='icons'>
  {text}
    <AiFillEdit className='icon' />
    <RxCross1 className='icon' />

  </div>
  </div>
  
  );
};

export default ToDo;
