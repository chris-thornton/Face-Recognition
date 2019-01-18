import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit, isSignedIn }) => {
	if (isSignedIn) {
		return (
			<div className='ma2 w-35 center'>
		<p className='f3'>
			{'This Smart Brain will detect faces in your pictures.'}
			<br />{'Enter link to image address in box below.'}
		</p>
		<div className='form pa4 center br4 shadow-5'>
		  <input className='f4 pa2 br3 w-75' type='text' onChange={onInputChange}/>
		  <button 
		    className='w-25 grow f4 link ph3 br3 pv2 dib white bg-light-purple'
		    onClick={onButtonSubmit}
		    >Detect</button>
		 </div>
		</div>
			);
	} else {
	return (
		<div className='mt2 w-35' style={{marginLeft: '11vw'}}>
		<p className='f3'>
			{'This Smart Brain will detect faces in your pictures.'}
			<br />{'Enter link to image address in box below.'}
		</p>
		<div className='form pa4 center br4 shadow-5'>
		  <input className='f4 pa2 br3 w-75' type='text' onChange={onInputChange}/>
		  <button 
		    className='w-25 grow f4 link ph3 br3 pv2 dib white bg-light-purple'
		    onClick={onButtonSubmit}
		    >Detect</button>
		 </div>
		</div>
	);
}
}

export default ImageLinkForm;