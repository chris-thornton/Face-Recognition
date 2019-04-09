import React from 'react';
import './FaceRecognition.css';

const divCenter = {
	left: '50%'
};

const divNext = {
	position: 'relative',
	left: '-50%'
};

const FaceRecognition = ({ imageUrl, boxes }) => {
	return (
		<div className='ma2 absolute maxWidth' style={divCenter}>
		<div style={divNext}>
		  <img id="inputimage" alt='' src={imageUrl} height='auto'/>
		  {boxes.map(box => {
		  	return
          <div key={`box${box.topRow}${box.rightCol}`}
              className='bounding-box'
              style={{top: box.topRow, right: box.rightCol, 
              	bottom: box.bottomRow, left: box.leftCol}}>
          </div>
        })
		}
		  </div>
		  </div>
	);
}

export default FaceRecognition;