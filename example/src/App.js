import React from 'react'

import TextVice from 'react-text-vice'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      text: "Hello there!",
      spacing: 0
    }
  }


  handleChange = ({target}) => {
    this.setState({
      [target.name] : [target.value]
    })
  }

  render() {
    const {text, spacing} = this.state;
    return (
      <div style={{fontFamily: "sans-serif"}}>
        <div>This text will scale too container width</div>

        <TextVice
          font="Times New Roman, serif"
          textStyle={{
            letterSpacing: spacing
          }}
        >
          {text}
        </TextVice>

        <div>Change Text</div>
        <input type="text" onChange={this.handleChange} name="text" value={text}/>
        <div>Change Letter Spacing</div>
        <input type="range" onChange={this.handleChange} name="spacing" value={spacing} step="0.01" min="1" max="10"/>

        <hr/>
        <a href="https://github.com/JonasGruenwald/react-text-vice">GitHub</a>
      </div>
    )
  }
}

export default App
