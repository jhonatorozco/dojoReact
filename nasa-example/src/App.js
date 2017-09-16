import React, {Component} from 'react'
import axios from 'axios'

const url='https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      inputText: '' ,
      outputText: ''
    }
    this.textChanged = this.textChanged.bind(this)
  }

  textChanged(event){
    var name= event.target.value
    this.setState({outputText: name})
    this.setState({inputText: name})
  }

  //Creación del DOM virtual
  render(){
    return (
      <div>
        <input type='text' onChange={this.textChanged} value={this.state.inputText} />
        <br/>
        <a>Hi {this.state.outputText} Welcome to the page! </a>
      </div>
    )
  }
}


class NASA extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imgUrl: ''
    }
    this.getImage= this.getImage.bind(this)
  }

  getImage(event){
    var self=this
    axios.get(url)
    .then(function(response){
      console.log('Img url: ', response.data.url)
      self.setState({imgUrl : response.data.url})
    })
    .catch(function(error){

    })
  }

  render(){
    return(
      <div>
        <img src={this.state.imgUrl} />
        <br/>
        <button onClick={this.getImage}> Push </button>
      </div>

    )
  }
}

export {App,NASA}
