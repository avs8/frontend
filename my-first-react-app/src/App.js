import React, { Component } from 'react';
import uuid from 'uuid';
import Projects from './Component/Projects';
import AddProject from './Component/AddProject';
import './App.css';


class App extends Component {
    constructor() {
        super();
		this.state = {
		    projects: []

		}
	}

	componentWillMount(){
    	this.setState({projects:[
			{
				id:uuid.v4(),
				title:'Ajita',
				category: 'pLaying1'
			},
			{
				id:uuid.v4(),
				title:'Ajita2',
				category: 'pLaying2'
			},
			{
				id:uuid.v4(),
				title:'Ajita3',
				category: 'pLaying3'
			},

		]})
	}
	handleAddProject(project) {
		let projects = this.state.projects;
		projects.push(project);
		this.setState({projects:projects})

	}
	handleDeleteProject(id){
		let projects = this.state.projects;
		let index = projects.findIndex(x => x.id === id);
		projects.splice(index, 1);
		this.setState({projects:projects});
	}
  render() {
    return (
      <div className="App">
		  <AddProject addProject={this.handleAddProject.bind(this)}/>
          <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)} />
      </div>
    );
  }
}



export default App;
