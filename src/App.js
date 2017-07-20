import React, {Component} from 'react';
import './App.css'
import Clock from './clock.js';
import {Form, FormControl, Button} from 'react-bootstrap';

class CountDown extends Component{
	constructor(props){
		super(props);
		this.state = {
			deadline: "December 25, 2017",
			newDeadline: ""
		}
	}
	changeDeadline(){
		this.setState({deadline : this.state.newDeadline})
	}
	render(){
		return(
			<div className = "app">
				<div className ="AppTitle">Countdown to {this.state.deadline}</div>
						<Clock deadline = {this.state.deadline}/>
				<Form inline>
					<FormControl 
					className = "input" 
					placeholder="change deadline" onChange = {(event) => this.setState({newDeadline: event.target.value})}/>
					<Button onClick = {() => this.changeDeadline()}>Submit</Button>
				</Form>
			</div>
			)
	}

}

export default CountDown;