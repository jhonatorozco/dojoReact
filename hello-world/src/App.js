import React, {Component} from 'react'

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

export default App
