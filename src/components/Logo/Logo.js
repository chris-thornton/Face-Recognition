import React from 'react';
import Tilt from 'react-tilt';
import brain from './brain.png';
import './Logo.css';

const Logo = ({ isSignedIn }) => {
	if (isSignedIn) {
		return (
		<Tilt className="Tilt shadow-2" options={{ max : 55 }} 
		style={{ height: '9.375vw', width: '9.375vw', marginLeft: '3vw',
		borderRadius: '50%' }} >
 		  <div className="Tilt-inner"> 
 		  <img alt='logo' src={brain}
 		  style={{ height: '6.25vw', width: '6.25vw', marginTop: '1.56vw' }}/> 
 		  </div>
		</Tilt>
	
			);
	} else {
	return (
		<Tilt className="Tilt shadow-2" options={{ max : 55 }} 
		style={{ height: '9.375vw', width: '9.375vw', borderRadius: '50%',
		marginTop: '1.93vw', marginLeft: '3vw' }}>
 		  <div className="Tilt-inner"> 
 		  <img alt='logo' src={brain}
 		  style={{ height: '6.25vw', width: '6.25vw', marginTop: '1.56vw' }}/> 
 		  </div>
		</Tilt>
	);
}
}

export default Logo;