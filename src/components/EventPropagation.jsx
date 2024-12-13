import React from 'react'
import './EV.css'
const EventPropagation = () => {
	const handleGrandParent = () => {
		console.log("GrandParent Clicked!");
	};

	const handleParentClick = () => {
		console.log("Parent Clicked!");
	};

	const handleChildClick = (event) => {
		console.log(event);
		console.log("Child Clicked!");
	}

  return (
	  <>
		  <section className='main-div'>
			  <div className='g-div' onClick={handleGrandParent}>
				  <div className='p-div' onClick={handleParentClick}>
					  <button className='c-div' onClick={handleChildClick}>Child Div</button>
				  </div>
			  </div>
	  </section>
	  </>
  )
}

export default EventPropagation