import React from 'react';
import './FaceRecognition.css';

const divCenter = {
	left: '50%'
};

const divNext = {
	position: 'relative',
	left: '-50%'
};

const FaceRecognition = ({ imageUrl, box }) => {
	return (
		<div className='ma2 absolute maxWidth' style={divCenter}>
		<div style={divNext}>
		  <img id="inputimage" alt='' src ={imageUrl} height='auto'/>
		  <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.botRow, left: box.leftCol}}>
		  </div>
		  </div>
		  </div>
	);
}

export default FaceRecognition;