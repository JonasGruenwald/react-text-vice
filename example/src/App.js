import React from 'react'

import TextVice from 'react-text-vice'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      text: "Hello there!"
    }
  }

  handleTextChange = ({target}) => {
    this.setState({text: target.value})
  }

  render() {
    const {text} = this.state;
    return (
      <div style={{fontFamily: "sans-serif"}}>
        <div>This text will scale too container width</div>

        <TextVice
          font="Times New Roman, serif"
        >
          {text}
        </TextVice>

        <div>Change Text</div>
        <input type="text" onChange={this.handleTextChange} value={text}/>
        <hr/>
        <a href="https://github.com/JonasGruenwald/react-text-vice">GitHub</a>
      </div>
    )
  }
}

export default App
