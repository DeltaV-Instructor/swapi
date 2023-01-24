import React from "react";

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

  handleSubmit = (event) =>  {
    event.preventDefault();
    console.log("🚀 ~ file: App.js:17 ~ App ~ event", event);
    
  }



  render() {
    return <>
      <h1>Data from SWAPI!!</h1>

      <form onSubmit={this.handleSubmit}>
        <button type="submit">Display Star Wars Characters</button>
      </form>
    </>;
  }
}

export default App;
