import React from "react";
import axios from 'axios';

let API_KEY = process.env.REACT_APP_LOCATION_KEY;
console.log('api key', API_KEY);

class App extends React.Component {
  //constructor function 
  constructor(props){
    //add state
    super(props);
    this.state ={
      starWarsChars: [],
    }
  }
  
  //add helper functions 
  handleSubmit = async (event) =>  {
    event.preventDefault();
    let starWarsCharacters = await axios.get("https://swapi.dev/api/people/?page=1");
    this.setState({
      starWarsChars: starWarsCharacters.data.results,
    });
  }



  render() {
    let starWarsList = this.state.starWarsChars.map((charName, index) => {
      return <li key={index}>{charName.name}</li>;
    });

    return <>
      <h1>Data from SWAPI!!</h1>
      <ul>{starWarsList}</ul>
      <form onSubmit={this.handleSubmit}>
        <button type="submit">Display Star Wars Characters</button>
      </form>










    </>;
  }
}

export default App;
