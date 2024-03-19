import React, { useReducer } from "react";


const reducer = (state , action) => {
   switch(action){
	case 'change kr bey sala':
		return !state;
	default:
		return  state;
   } 
   
	   
}
function App() {

	const [isOn , dispatch] = useReducer(reducer, false );

	const bodyColor = {
		background: isOn ? 'grey' : 'black',
		minHeight: "100vh",
		width: "100vw"
		
	}

	return( <div style={bodyColor}>
          
		   <button onClick={() => dispatch("change kr bey sala")}>{isOn? 'Light On' : 'Light off'}</button>

		</div>)
}

export default App;
