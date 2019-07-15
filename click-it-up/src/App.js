import React, { Component }from 'react';
import './App.css';
import Navbar from "./components/navbar"
import Header from "./components/header"
import doggos from "./doggos.json"
import ImagesContainer from "./components/imagesContainer"

class App extends Component {

  state = {
    doggos,
    doggoClicked: [],
    score: 0,
  };

imageClick = event => {
  const targetDoggo = event.target.alt;
  const DoggoAlreadyClicked =
    this.state.doggoClicked.indexOf(targetDoggo) > -1;

//if you click on a fish that has already been selected, the game is reset and cards reordered
  if (DoggoAlreadyClicked) {
    this.setState({
      doggos: this.state.doggos.sort(function(a, b) {
        return 0.5 - Math.random();
      }),
      doggoClicked: [],
      score: 0
    });
      alert("Doggo already clicked ! Try Again !");

//if you click on an available fish, your score is increased and cards reordered
  } else {
    this.setState(
      {
        doggos: this.state.doggos.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        doggoClicked: this.state.doggoClicked.concat(
          targetDoggo
        ),
        score: this.state.score + 1
      },
//if you get all 12 fish corrent you get a congrats message and the game resets        
      () => {
        if (this.state.score === 12) {
          alert("Congrats ! You Clicked All the Doggos !!");
          this.setState({
            doggos: this.state.doggos.sort(function(a, b) {
              return 0.5 - Math.random();
            }),
            doggoClicked: [],
            score: 0
          });
        }
      }
    );
  }
};

render() {
    return (
      <div>
        <Navbar
          score={this.state.score}
        />
        <Header/>
         <div className="wrapper">
         {this.state.doggos.map(doggos => (
           <ImagesContainer
             imageClick={this.imageClick}
             id={doggos.id}
             key={doggos.id}
             image={doggos.image}
           />
         ))}
       </div>
      </div>
    )
  }
}
export default App;