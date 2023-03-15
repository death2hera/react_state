import React, { Component } from 'react';
import './App.css';
class App extends Component{
  constructor(props){
    super(props)
    this.state={show: true, fullname: "john doe", pishur: "john doe.png", profession:"fullstack developer"}
    this.togglediv=this.togglediv.bind(this)

  }
  togglediv=()=>{
    const { show }=this.state;
    this.setState({ show: !show})
  }
  render(){
    return(
      <>
      <div className='App'>
        <h1>
          {this.state.fullname}
        </h1>
        
        <button onClick={this.togglediv}>show</button>
      </div>
      <div className='App'>
        { this.state.show&&<Profile/>}
      </div>
      
      </>
    )
  }
}
class Profile extends Component{
  state={
    profession: "fullstack developer", pishur: "john doe.png", bio:"I love to program and design web pages"
  }
  render(){
    return(
      <>
      <div className='App'>
      <img src={this.state.pishur}/>
      <h2>{this.state.profession}</h2>
      <h2>{this.state.bio}</h2>
      </div>
      
      </>
    )
  }
}

export default App;
