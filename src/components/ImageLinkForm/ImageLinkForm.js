import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit, isSignedIn }) => {
	if (isSignedIn) {
		return (
		<div className='ma2 w-35 center'>
		<p style={{fontSize: 'calc(12px + 1vw)'}}>
			{'This Smart Brain will detect faces in your pictures.'}
			<br />{'Enter link to image address in box below.'}
		</p>
		<div className='form center br4 shadow-5'>
		  <input className='br4 w-75' type='text' onChange={onInputChange}
		  style={{ height: '2.5vw', fontSize: 'calc(10px + .75vw)',
		   marginTop: '1.9vw', paddingLeft: '1vw', minHeight: 30}}/>
		  <button 
		    className='w-25 grow link ph3 br4 pv2 dib white bg-light-purple'
		    onClick={onButtonSubmit} style={{fontSize: 'calc(10px + .75vw)'}}
		    >Detect</button>
		 </div>
		</div>
			);
	} else {
	return (
		<div className='mt2 w-35' style={{marginLeft: 'auto'}}>
		<p style={{fontSize: 'calc(12px + 1vw)'}}>
			{'This Smart Brain will detect faces in your pictures.'}
			<br />{'Enter link to image address in box below.'}
		</p>
		<div className='form center br4 shadow-5'>
		  <input className='w-75 br4' type='text' onChange={onInputChange}
		  style={{ height: '2.5vw', fontSize: 'calc(10px + .75vw)',
		   marginTop: '1.9vw', paddingLeft: '1vw', minHeight: 30}}/>
		  <button 
		    className='w-25 grow link ph3 br4 pv2 dib white bg-light-purple'
		    onClick={onButtonSubmit} style={{fontSize: 'calc(10px + .75vw)'}}
		    >Detect</button>
		 </div>
		</div>
	);
}
}

export default ImageLinkForm;