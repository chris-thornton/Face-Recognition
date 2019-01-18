import React from 'react';
import Tilt from 'react-tilt';
import brain from './brain.png';
import './Logo.css';

const Logo = ({ isSignedIn }) => {
	if (isSignedIn) {
		return (
			<div className='ma2 mt0'>
		<Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
 		  <div className="Tilt-inner pa3"> 
 		  <img className='mt2' alt='logo' src={brain}/> 
 		  </div>
		</Tilt>
		</div>
			);
	} else {
	return (
		<div className='mt3' style={{marginLeft: '8vw'}}>
		<Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
 		  <div className="Tilt-inner pa3"> 
 		  <img className='mt2' alt='logo' src={brain}/> 
 		  </div>
		</Tilt>
		</div>
	);
}
}

export default Logo;