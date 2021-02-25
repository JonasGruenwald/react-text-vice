import React from 'react'
import PropTypes from 'prop-types'
import { isEqual } from 'lodash'

class TextVice extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      viewBox: '0 0 1000 1000'
    }
    this.textEl = React.createRef()
  }

  componentDidUpdate(prevProps) {
    if (String(prevProps.children) !== String(this.props.children)) {
      // Recalculate on text change
      this.calculateBox()
    } else if (!isEqual(prevProps.textStyle, this.props.textStyle)) {
      // Recalculate on style change
      this.calculateBox()
    }
  }

  componentDidMount() {
    this.calculateBox()

    // If FontFace set is supported, recalculate when fonts have loaded
    if (document.fonts) {
      document.fonts.ready.then(() => {
        console.log('fonts ready!')
        this.calculateBox()
      })
    }
  }

  calculateBox() {
    const box = this.textEl.current.getBBox()
    this.setState(
      {
        viewBox: `${box.x} ${box.y} ${box.width} ${box.height}`
      },
      () => {
        if (this.props.onFit) {
          this.props.onFit(this.state.viewBox)
        }
      }
    )
  }

  render() {
    const {
      children,
      textStyle,
      svgStyle,
      textClassName,
      svgClassName,
      font,
      width,
      height,
      preserveAspectRatio
    } = this.props

    // Merge all text object styles together in one object
    const fullTextStyle = {
      ...textStyle
    }
    if (font) {
      fullTextStyle.fontFamily = font
    }

    return (
      <svg
        className={svgClassName}
        style={svgStyle}
        viewBox={this.state.viewBox}
        width={width}
        height={height}
        preserveAspectRatio={preserveAspectRatio}
      >
        <text
          x={0}
          y={0}
          style={fullTextStyle}
          className={textClassName}
          ref={this.textEl}
        >
          {children}
        </text>
      </svg>
    )
  }
}

TextVice.propTypes = {
  children: PropTypes.node,
  textStyle: PropTypes.object,
  svgStyle: PropTypes.object,
  textClassName: PropTypes.string,
  svgClassName: PropTypes.string,
  font: PropTypes.string,
  onFit: PropTypes.func,
  height: PropTypes.string,
  width: PropTypes.string,
  preserveAspectRatio: PropTypes.string
}

TextVice.defaultProps = {
  children: null,
  textStyle: {},
  svgStyle: {},
  textClassName: null,
  svgClassName: null,
  font: null,
  onFit: null,
  width: '100%',
  height: '100%',
  preserveAspectRatio: 'xMidYMid meet'
}

export default TextVice
