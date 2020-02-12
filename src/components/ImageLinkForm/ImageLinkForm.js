import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  const handleFocus = (event) => event.target.select();
  return (
    <div>
      <h1 className='f3'>
        {'Which celebrity do you look like?'}
      </h1>
      <div className='center'>
        <div className='form center pa4 br3 shadow-5'>
          <input className='f4 pa2 w-70 center' type='tex' 
            onChange={onInputChange} 
            placeholder={'Enter URL'}
            onFocus={handleFocus}
            />
          <button
            className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'
            onClick={onButtonSubmit}
          >Click</button>
        </div>
      </div>
    </div>
  );
}

export default ImageLinkForm;