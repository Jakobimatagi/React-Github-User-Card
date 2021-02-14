import './App.css';
import React from 'react';
import axios from 'axios';
import Followers from './follower'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: [],
      location: [],
      bio: [],

    }
  }

  componentDidMount(){
    console.log('mounted');
   this.githubData(this.state.username)
  }

  
  githubData = getData => {
    console.log("Get Data")
    
    axios
  .get('https://api.github.com/users/jakobimatagi')
  .then (res => { 
    console.log(res.data)
     this.setState({
       ...this.state,
       name: res.data.name,
       location: res.data.location,
       bio: res.data.bio,
      
     }) 
  })
  .catch(err => console.log(err))
  }

  
  


  render (){

    return(
      <div className="App">
          <h1>{this.state.name}</h1>
          <h2>{this.state.bio}</h2>
          <h3>{`Location: ${this.state.location}`}</h3>
          <Followers />
      </div>

    )
  }
}

export default App;
