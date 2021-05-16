import React from 'react'
import TextVice from 'react-text-vice'
import "./style.css"

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
      [target.name] : target.value
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
            letterSpacing: `${spacing}px`
          }}
        >
          {text}
        </TextVice>

        <div>Change Text</div>
        <input type="text" onChange={this.handleChange} name="text" value={text}/>
        <br/> <br/>
        <div>Change Letter Spacing</div>
        <input type="range" onChange={this.handleChange} name="spacing" value={spacing} step="0.01" min="1" max="10"/>

        <br/> <br/>
        <div>Using an external font that loads in asynchronously</div>
        <TextVice
          textClassName="external-font"
          textStyle={{
            letterSpacing: `${spacing}px`
          }}
        >
          {text}
        </TextVice>
        <br/><br/>
        <div>Cropping vertically</div>
        <TextVice
          cropTop={0.25}
          cropBot={0.25}
          font="Arial Black, sans-serif"
          textStyle={{
            letterSpacing: `${spacing}px`
          }}
        >
          {text}
        </TextVice>
        <hr/>
        <a href="https://github.com/JonasGruenwald/react-text-vice">GitHub</a>
      </div>
    )
  }
}

export default App
