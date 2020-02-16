import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  const handleFocus = (event) => event.target.select();
  return (
    <div>
      <div className='center'>
        <div className='form center br3'>
          <input className='f4 pa2 w-70 center' type='tex' 
            onChange={onInputChange} 
            placeholder={'Enter URL'}
            onFocus={handleFocus}
            />
          <button
            className='w-30 grow f4 link ph3 pv2 dib white bg-black'
            onClick={onButtonSubmit}
          >Click</button>
        </div>
      </div>
    </div>
  );
}

export default ImageLinkForm;