import React from 'react';
import './file-upload.css';

const FileUpload = ({encodeImageAsUrl}) => {


    return(
        <input id="inputFileToLoad" type="file" onChange={encodeImageAsUrl}/>
    )
};

export default FileUpload;
