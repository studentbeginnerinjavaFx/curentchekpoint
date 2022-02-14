import React, {Component} from 'react';
import './App.css';
import img1 from './image/imageInSrc.jpg'
class App extends Component {
 constructor(){
   super();
   this.state = {
    Person: {
      fullName: "kassraoui Seddik",
      bio: "I just love developpment",
      imgSrc: img1,
      profession: "web dev"
    },
    show: false
  };
 }
  

  ShowPerson = () => {
    this.setState({
      ...this.state,
      show: !this.state.show
    });
  };
 render(){
  return (
    <div className="App">
      {this.state.show && (
          <div>
            <h1>{this.state.Person.fullName}</h1>
            <h1>{this.state.Person.bio}</h1>
            <img src={this.state.Person.imgSrc} alt="image"/>
            <h1>{this.state.Person.profession}</h1>
            <br/>
          </div>
        )}

        <button onClick={this.ShowPerson}>Check state</button>
    </div>
  );
 }
}

export default App;
