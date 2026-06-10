import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const addTask = () => {
    if (!input.trim()) return;

    setTasks([
      ...tasks,
      {
        text: input,
        done: false
      }
    ]);

    setInput('');
  };

  const toggleTask = (index) => {
    const updated = [...tasks];

    updated[index].done =
        !updated[index].done;

    setTasks(updated);
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
              <li
                  key={index}
                  onClick={() => toggleTask(index)}
                  style={{
                    textDecoration:
                        task.done
                            ? 'line-through'
                            : 'none',
                    cursor: 'pointer'
                  }}
              >
                {task.text}
              </li>
          ))}
        </ul>
      </>
  );
}

export default App;