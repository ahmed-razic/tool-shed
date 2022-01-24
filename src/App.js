import { useState } from 'react';
import Header from './components/Header';
import AddTool from './components/AddTool';
import ToolList from './components/ToolList';
import toolsData from './data/ToolsData';

function App() {
  const [tools, setTools] = useState(toolsData);
  const [showAddTool, setShowAddTool] = useState(false);

  //Add Tool
  const addTool = (tool) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTool = { id, ...tool };
    setTools([...tools, newTool]);
  };

  //Delete Tool
  const deleteTool = (id) => {
    setTools(tools.filter((tool) => tool.id !== id));
  };

  //Toogle availability
  const toggleAvailability = (id) => {
    setTools(
      tools.map((tool) =>
        tool.id === id ? { ...tool, unavailable: !tool.unavailable } : tool
      )
    );
  };

  return (
    <div className='container'>
      <Header
        onAdd={() => setShowAddTool(!showAddTool)}
        showAdd={showAddTool}
      />
      {showAddTool && <AddTool onAdd={addTool} />}
      {tools.length > 0 ? (
        <ToolList
          tools={tools}
          onDelete={deleteTool}
          onToggle={toggleAvailability}
        />
      ) : (
        'No tasks found'
      )}
    </div>
  );
}

export default App;
