import React from 'react';

const Navigation = ({ onRouteChange }) => {
	return (
		<nav style={{display: 'flex', justifyContent: 'flex-end',
		marginBottom: 'calc(-15px - 1vw)'}}>
		  <p onClick={() => onRouteChange('signin')} 
		  className='link dim black underline mr3 pointer' 
		  style={{fontSize: 'calc(12px + 1vw)'}}>Sign Out</p>
		  </nav>
	);
}

export default Navigation;