import React from 'react';
import axios from 'axios';
import styled from 'styled-components';



class Followers extends React.Component {
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
    .get('https://api.github.com/users/jakobimatagi/followers')
    .then (res => { 
      console.log(res.data);
    const loginData = res.data.map(item =>{
        return (<div>{item.login}</div>);
    
    })
    console.log(loginData);
       this.setState({
         ...this.state,
        name: loginData,
        
       }) 
    })
    .catch(err => console.log(err))
    }
  
    
    
  
  
    render (){
  
      return(
        <Styleddiv>
        <div className="followerApp">
            <h1>Followers</h1>
            <h3>{this.state.name}</h3>
        </div>
        </Styleddiv>
      )
    }
  }


    

export default Followers;


const Styleddiv = styled.div`
  
h3{
    background-color: #e0b1cb;
    text-transform: uppercase;
    border-radius: 15%;
    padding: 1rem;
}




`