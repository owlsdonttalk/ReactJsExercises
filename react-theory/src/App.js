import './App.css';
import React, {Component} from "react";
import Car from "./Car/Car";

class App extends Component {
	render()
	{
		const divStyle = {
			textAlign: 'center',
		}

		return (
			<div style={divStyle}>
				<h1>Hello,world!</h1>
				<Car name={'Ford'} year={'2018'}>
					<p style={{color: 'blue'}}>BLUE</p>
				</Car>
				<Car name={'Audi'} year={'2016'}>
					<p style={{color: 'red'}}>COLOR</p>
				</Car>
				<Car name={'Mazda'} year={'2015'}/>
			</div>
		);
	}
}

export default App;
