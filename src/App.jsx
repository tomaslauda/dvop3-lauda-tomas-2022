import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";

const TodoItem = ({ todo }) => {
  return (
    <div className="shadow-lg text-center shadow-cyan-500/50 text-cyan-700 rounded-full">
      <h3>{todo.title}</h3>
      <p>User ID: {todo.userId}</p>
      <p>ID: {todo.id}</p>
    </div>
  );
};

function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    setLoading(true);
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
    const responseJson = await response.json();
    setData(responseJson);
    console.log(responseJson);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>React App</h1>
      {loading ? (
        <p>Loading...</p>
        ) : (
          <div className="gap-2 grid-cols-3 grid">
            {data ? (
              data.map((todo) => (
                <TodoItem key={todo.id} todo={todo} />
              ))
            ) : (
            <p>No data</p>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
