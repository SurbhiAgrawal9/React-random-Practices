import React, { useReducer } from "react";


const reducer = (state , action) => {
   switch(action){
	case 'change kr ':
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
          
		   <button onClick={() => dispatch("change kr ")}>{isOn? 'Light On' : 'Light off'}</button>

		</div>)
}

export default App;
