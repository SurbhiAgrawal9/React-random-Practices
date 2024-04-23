
// Handle Objects using UseState Hook

import  React from 'react';
import { useState } from 'react';

function App(){
	const [myObject, setObject] = useState(
		{
			name: "ironmen",
			age: 50,
			work: "superHero",

		}
	)

	const changeInfo = () => {
		setObject({...myObject , age: 60, name: 'thor'})  //spread operator
	}

	return (

		<>
		<h1>name:{myObject.name} & age : {myObject.age} & work: {myObject.work}</h1>
		<button onClick={changeInfo}>change update</button>
		</>
	)
}

export default App;
