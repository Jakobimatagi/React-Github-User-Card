import React from 'react';
import axios from 'react'




class Followers extends React.Component{

    constructor(){
        super();
        this.state ={
            name: [],
            bio: [],
            location: [],
        }
    }




    getFollowerData = followerData =>{
        console.log('follower data')
        axios
        .get('https://api.github.com/users/jakobimatagi/follower')
        .then(res =>{
         
        })
        .catch(err => console.log(err))
    
      }
    
}


export default Followers;