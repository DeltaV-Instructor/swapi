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
    // // // // // // console.log("🚀 ~ file: App.js:17 ~ App ~ event", event);
    let starWarsCharacters = await axios.get("https://swapi.dev/api/people/?page=1");
    // // // // // // console.log("🚀 ~ file: App.js:24 ~ App ~ handleSubmit= ~ starWarsCharacters", starWarsCharacters);
    // console.log('GGGGGGG', starWarsCharacters.data.results);
    this.setState({
      starWarsChars: starWarsCharacters.data.results,
    });
  }



  render() {
    // console.log('!!!!!!!',this.state.starWarsChars);
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
