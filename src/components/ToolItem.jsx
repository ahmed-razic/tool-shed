import { FaTimes } from 'react-icons/fa';

function ToolItem({ tool, onDelete, onToggle }) {
  return (
    <div
      className={`tool ${tool.unavailable && 'unavailable'}`}
      onDoubleClick={() => onToggle(tool.id)}
    >
      <h3>
        {tool.name}{' '}
        <FaTimes
          color='red'
          style={{ cursor: 'pointer' }}
          onClick={() => onDelete(tool.id)}
        />
      </h3>
      <p>Model: {tool.model}</p>
      <p>Quantity: {tool.quantity}</p>
    </div>
  );
}

export default ToolItem;
