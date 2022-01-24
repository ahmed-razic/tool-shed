import ToolItem from './ToolItem';

function ToolList({ tools, onDelete, onToggle }) {
  return (
    <>
      {tools.map((tool) => (
        <ToolItem
          key={tool.id}
          tool={tool}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </>
  );
}

export default ToolList;
