import { useState } from "react";
import { MdDelete } from "react-icons/md";
import { FiEdit } from "react-icons/fi";



function App() {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);

  const [editIndex, setEditIndex] = useState(-1); 

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const addTodo = () => {
    setTodo((prevVal) => {
      return [...prevVal, input];
    });
    setInput(""); 
  };

  const deleteTodo = (index) => {
    setTodo((prevTodo) => {
      return prevTodo.filter((_, todoIndex) => todoIndex !== index);
    });
  };

  const toggleEdit = (index) => {
    setEditIndex(index === editIndex ? -1 : index);
  };

  const updateTodo = (index) => {
    const updatedTodo = [...todo];
    updatedTodo[index] = input;
    setTodo(updatedTodo);
    setEditIndex(-1); 
    setInput(""); 
  };

  return (
    <>
    <div className="flex w-full items-center justify-center">
      <div className="max-w-[1080px] px-10 text-white">
      <img  src="https://i.pinimg.com/originals/31/36/cd/3136cd447c99783f59cd1a4c7d9ca9c1.png" className="h-[200px] w-[200px] mx-auto" alt="" />
        <h1 className="text-center text-5xl mt-20 font-bold">TODO MANAGEMENT</h1>
        <div className="w-[500px] mx-auto flex flex-col gap-5 items-center mt-10">
          <input
            className="px-4 rounded-xl w-[500px] h-[60px] bg-[#0E1325] mt-2 placeholder:text-slate-400 placeholder:font-semibold"
            type="text"
            value={input}
            onChange={handleInput}
            placeholder="Enter your task"
          />
          <button
            className="w-full h-10 rounded-2xl bg-white text-[#090C17] font-bold"
            onClick={addTodo}
          >
            Add task
          </button>
        </div>

        <div className="max-w-[1000px] mx-auto flex flex-wrap overflow-hidden items-start mt-10 gap-5 justify-center">
          {todo.map((currValue, index) => (
            <div
              className="max-w-[300px] px-3 py-2 h-fit bg-[#0C0F1E] rounded-xl border border-slate-700 "
              key={index}
            >
              {editIndex === index ? (
                <input
                  type="text"
                  value={input}
                  onChange={handleInput}
                  className="px-4 rounded-3xl w-full bg-[#0E1325] mt-5 placeholder:text-slate-400 placeholder:font-semibold"
                />
              ) : (
                <p>{currValue}</p>
              )}
              <div className="flex gap-2 items-center justify-between mt-5">
                {editIndex === index ? (
                  <button
                    onClick={() => updateTodo(index)}
                    className="bg-slate-800 w-[130px] rounded-lg"
                  >
                    Update
                  </button>
                ) : (
                  <>
                  <div className="flex items-center justify-center gap-2 bg-slate-800 w-[130px] rounded-lg">
                  <FiEdit />
                    <button
                      onClick={() => toggleEdit(index)}
                    >
                      Edit
                    </button>
                  </div>

                    <div className="flex items-center justify-center gap-2  bg-red-500 w-[130px] rounded-lg">
                    <MdDelete />
                    <button
                      onClick={() => deleteTodo(index)}
                    >
                      Delete 
                    </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </>
  );
}

export default App;
