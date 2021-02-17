# react-text-vice

> Fit text to container using SVG

[![NPM](https://img.shields.io/npm/v/react-text-vice.svg)](https://www.npmjs.com/package/react-text-vice) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

A component that will place any text in an SVG `<text>` element and adjust the SVG `viewBox` so that the text fits in it
perfectly.

The SVG can then be styled like any regular SVG to fit its containers width / height, scale, crop etc, allowing the text
to be fitted to a container as if it was an image, while still retaining its accessibility.

This is supposed to be an alternative to various text-fit / fit-text libraries that did not work for me.

## Install

```bash
npm install --save react-text-vice
```

## Usage

```jsx
import React, {Component} from 'react'

import TextVice from 'react-text-vice'

class Example extends Component {
  render() {
    return (
      <TextVice
        font="sans-serif"
      >
        This text will fit its container
      </TextVice>
    )
  }
}
```

## Props

### `children`

Add text content directly as a child of the component, changing the text will trigger a re-fit.

### `font` (String)

Shortcut to set the `fontFamily` of the text, this can be used instead of textStyle / textClassName if all you want to change is the font family.

### `textStyle` (Object)

Styles to apply to the inner `<text>` Element, you can use this to set the font, text color etc, but changing the style
will currently not trigger a re-fit.

### `svgStyle` (Object)

Styles to apply to the outer `<svg>` element.

### `textClassName` (String)

Class to apply to the inner `<text>` element, use this if you wish to set the font styling from a CSS file.

### `svgClassName` (String)

Class to apply to the outer `<svg>` element

### `width`, `height`, `preserveAspectRatio` (String)

Standard SVG props to apply to the outer `<svg>` element, use this to control scaling etc as you would
with any other SVG.

### `onFit(viewBox)` (Function)

Function to be called when text has been fit, will be passed the `viewBox` string calculated for the outer `<svg>`

## License

MIT © [JonasGruenwald](https://github.com/JonasGruenwald)
