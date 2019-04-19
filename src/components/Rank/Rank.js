import React from 'react';

const Rank = ({name, entries}) => {
	return (
		<div style={{fontFamily: 'Courier New, sans-serif'}}>
		  <div className='white' style={{fontSize: 'calc(14px + 1vw)'}}>
		    {`${name}, your current entry count is...`}
		  </div>
		  <div className='white' style={{fontSize: 'calc(36px + 1vw)'}}>
		    {entries}
		  </div>
		</div>
	);
}

export default Rank;