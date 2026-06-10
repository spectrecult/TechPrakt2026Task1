import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const addTask = () => {
    if (!input.trim()) return;

    setTasks([...tasks, input]);
    setInput('');
  };

  return (
      <>
        <h1>Task Tracker</h1>

        <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
        />

        <button onClick={addTask}>
          Додати
        </button>

        <ul>
          {tasks.map((task, index) => (
              <li key={index}>{task}</li>
          ))}
        </ul>
      </>
  );
}

export default App;