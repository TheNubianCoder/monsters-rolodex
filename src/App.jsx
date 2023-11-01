import {Component, useState} from 'react'
import { CardList } from './Components/Card-List/card-list.component';
import { SearchBox } from './Components/search-box/search-box.component';
import './App.css';

class App extends Component {
constructor(){
  super();


  this.state = {
    monsters: [],
    searchField: ""
  };

  this.handleChange = this.handleChange.bind(this);
}

//making api request using componentDidMount();
componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users') //fetching from api
  .then(Response => Response.json()) //response of api being converted to json format.
  .then(users => this.setState({monsters: users})); //setting the state of the monsters array to the json file being called with the api.
}

handleChange(e){
  this.setState({ searchField: e.target.value })
}

render(){
  const {monsters, searchField } = this.state;
  // the above is equivalent to const monsters = this.state.monsters;
  // const searchField = this.state.searchField;
  const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
  // filters content based on search text found.
  return(
  <div className='App'>
    <h1>Monsters Rolodex</h1>
    <SearchBox 
  placeholder="Search Monsters"
  handleChange={this.handleChange}
/>

    <CardList monsters = {filteredMonsters} />
   
  </div>
  )
}
}

export default App;

 

//life cycle methods
// onChange is an event function that executes a function when anything is either typed or removed anything.
// e represents the event
//get target or set target

//React events
//has synthetic events 


//"this" keyword: it is a special keyword in js that references the context in which it is being invoked.