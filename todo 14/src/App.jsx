import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);

  const [editIndex, setEditIndex] = useState(-1); // Index of todo item being edited

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const addTodo = () => {
    setTodo((prevVal) => {
      return [...prevVal, input];
    });
    setInput(""); // Clear input after adding todo
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
    setEditIndex(-1); // Exit edit mode after updating
    setInput(""); // Clear input after updating
  };

  return (
    <>
      <div className="w-[1080px] mx-auto text-white">
        <h1 className="text-center text-5xl mt-20">TODO</h1>
        <div className="w-[500px] mx-auto flex flex-col gap-5 items-center mt-10">
          <input
            className="px-4 rounded-3xl w-[500px] h-[100px] bg-[#0E1325] mt-5 placeholder:text-slate-400 placeholder:font-semibold"
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

        <div className="h-[2px] w-[1000px] mx-auto mt-5 bg-gray-400 bg-opacity-50"></div>

        <div className="max-w-[1000px] mx-auto flex flex-wrap overflow-hidden items-center mt-10 gap-5 justify-center">
          {todo.map((currValue, index) => (
            <div
              className="max-w-[300px] px-3 py-2 h-fit bg-[#0C0F1E] rounded-xl border "
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
                    <button
                      onClick={() => toggleEdit(index)}
                      className="bg-slate-800 w-[130px] rounded-lg"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteTodo(index)}
                      className="bg-red-500 w-[130px] rounded-lg"
                    >
                      Delete
                    </button>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
