# Loading overlay

[![Join the chat at https://gitter.im/Devnetik/react-native-loading-overlay](https://badges.gitter.im/Devnetik/react-native-loading-overlay.svg)](https://gitter.im/Devnetik/react-native-loading-overlay?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

[![npm](https://img.shields.io/npm/dm/react-native-loading-overlay.svg?maxAge=2592000)](https://www.npmjs.com/package/react-native-loading-overlay)
[![npm](https://img.shields.io/npm/v/react-native-loading-overlay.svg?maxAge=2592000)](https://www.npmjs.com/package/react-native-loading-overlay)
[![Beerpay](https://beerpay.io/Devnetik/react-native-loading-overlay/badge.svg?style=flat)](https://beerpay.io/Devnetik/react-native-loading-overlay)

## Getting started
```sh
npm install --save react-native-loading-overlay
```

## Example

```javascript
class Example extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loadingOverlayVisible: false
    };
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Text>Some content</Text>
        <LoadingOverlay visible={this.state.loadingOverlayVisible}/>
      </View>
    )
  }
}
```

## Constribute

Comments, Issues and Pull Requests are welcomed!

## License (MIT)

Copyright (c) 2016 Devnetik

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
## Support on Beerpay
Hey dude! Help me out for a couple of :beers:!

[![Beerpay](https://beerpay.io/Devnetik/react-native-loading-overlay/badge.svg?style=beer-square)](https://beerpay.io/Devnetik/react-native-loading-overlay)  [![Beerpay](https://beerpay.io/Devnetik/react-native-loading-overlay/make-wish.svg?style=flat-square)](https://beerpay.io/Devnetik/react-native-loading-overlay?focus=wish)