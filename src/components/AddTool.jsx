import { useState } from 'react';

function AddTool({ onAdd }) {
  const [name, setName] = useState('');
  const [model, setModel] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [unavailable, setUnavailable] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      alert('Please enter name');
      return;
    }

    onAdd({ name, model, quantity, unavailable });
    setName('');
    setModel('');
    setQuantity(1);
    setUnavailable(false);
  };

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label htmlFor='tool'>Tool Name</label>
        <input
          type='text'
          name='tool'
          id='tool'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label htmlFor='model'>Tool Model</label>
        <input
          type='text'
          name='model'
          id='model'
          value={model}
          onChange={(e) => setModel(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label htmlFor='quantity'>Tool Quantity</label>
        <input
          type='number'
          name='quantity'
          id='quantity'
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
      </div>
      <div className='form-control-check'>
        <label htmlFor='unavailable'>Unavailable</label>
        <input
          type='checkbox'
          name='unavailable'
          id='unavailable'
          value={unavailable}
          onChange={(e) => {
            setUnavailable(e.currentTarget.checked);
          }}
        />
      </div>
      <div className='form-control'>
        <input type='submit' value='Save Tool' className='btn btn-block' />
      </div>
    </form>
  );
}

export default AddTool;
