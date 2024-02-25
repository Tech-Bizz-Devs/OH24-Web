import React from 'react'
import ToDo from './components/ToDo'
import axios from "axios";

const App = () => {
  const [toDos, setToDos] = useState([]);
  const [input, setInput] = useState("");
  const [updateUI, setUpdateUI] = useState(false);


  useEffect(() => {
    axios.get(`${baseURL}/get`).then((res) => setToDos(res.data)).catch((err) => console.log(res.data)).catch((err) => console.log(err));
  },[updateUI]);
 
  const saveToDo = () => {
    axios
      .post(`${baseURL}/save`, { toDo: input })
      .then((res) => {
        console.log(res.data);
        setInput("");
        setUpdateUI((prevState) => !prevState);
      })
      .catch((err) => console.log(err));
  };
  
  return (
    <main>
    <div className="container">
      <h1 className="title">ToDo App</h1>

      <div className="input_holder"> 
      <input value={input}
            onChange={(e) => setInput(e.target.value)} type="text" placeholder="Add a ToDo..."/>
      <button onClick={saveToDo}>Add</button>
    </div>

<div className="list">
{toDos.map((el) => (
            <ToDo
              text={el.toDo}
              id={el._id}
              key={el._id}
/>))}
</div>

  </div>
  </main>
      )
}

export default App
