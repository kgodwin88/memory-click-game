import React, { Component } from "react";
import Image from "./components/Image";
import Wrapper from "./components/Wrapper";
import Nav from "./components/Nav";
import images from "./images.json";
import Header from "./components/Header";
import Footer from "./components/Footer";
let newArray =[]
class App extends Component {
  state = {
    images,
    score: 0,
    topScore: 0,
    greeting: 'Click an Image to Begin!'
  };
  shuffle = array =>{
    let counter = array.length;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
  }
  checkMemory = id => {
    console.log(id)
    if(!newArray.includes(id)){
    this.setState({score: this.state.score + 1})
    this.setState({greeting: "You Guessed Correctly!"})
    this.shuffle(images)
    newArray.push(id)
    if(this.state.score >= this.state.topScore){
      
      this.setState({topScore: this.state.score + 1})
    }
    if(this.state.topScore = 12){
      this.setState({greeting:"You won!"})
      this.setState({score: 0})
      newArray =[];
    }
    }
    else{
      this.setState({greeting:"You Guessed Incorrectly"})
      this.setState({score: 0})
      newArray =[];
      this.shuffle(images)
    }
  };

  render() {
    return (
      <div>
        <Nav 
        score = {this.state.score}
        topScore= {this.state.topScore}
        greeting ={this.state.greeting} />
        <Header />
        <Wrapper>
          {this.state.images.map(image => (
            <Image
              checkMemory={this.checkMemory}
              id={image.id}
              key={image.id}
              image={image.image}
            />
          ))}
        </Wrapper>
        <Footer />
      </div>
    );
  }
}

export default App;
