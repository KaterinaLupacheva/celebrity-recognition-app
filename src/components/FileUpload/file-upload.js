import React from 'react';
import './file-upload.css';

const FileUpload = ({encodeImageAsUrl}) => {
    return(
        <div className='file-upload'>
            <label htmlFor='inputFileToLoad' className='custom-file-upload'>Upload image</label>
            <input id="inputFileToLoad" type="file" onChange={encodeImageAsUrl}/>
        </div>
    )
};

export default FileUpload;
