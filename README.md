# react-native-circular-menu

A Ripple menu effect for your react native application

[![npm version](https://img.shields.io/npm/v/react-native-circular-menu.svg?style=flat-square)](https://www.npmjs.com/package/react-native-circular-menu)
[![NPM downloads](https://img.shields.io/npm/dm/react-native-circular-menu.svg?style=flat-square)](https://www.npmjs.com/package/react-native-circular-menu)
[![Package Quality](http://npm.packagequality.com/shield/react-native-circular-menu.svg?style=flat-square)](http://packagequality.com/#?package=react-native-circular-menu)
[![Donate](https://img.shields.io/badge/Donate-Patreon-green.svg?style=flat-square)](http://paypal.me/dcergo)


# Example

![example](https://github.com/cinder92/react-native-circular-menu/blob/master/ezgif.com-video-to-gif.gif)

# How to install

`npm i -S react-native-circular-menu` 

# How to use

```
import CircularMenu from 'react-native-circular-menu';

...

render(){
   return(
      <CircularMenu
         items={this._renderItems()}
         closeBtn={this._renderCloseBtn()}
         show={false}
         items={[...]}
         position={"topLeft"}
      />
   )
}
```

# Props

| Name  | Description | Required |
| ----- | ------------| -------- |
| show | Set `true` to show and `false` to hide | yes |
| color | Change color of ripple effect | no |
| size  | Change the scale size of circle (default : 20) | no |
| items | Menu items (array) | yes |
| position | Change position of animation circle (default : `topLeft`) | no |
| closeBtn | Receives a component for close button | yes |

# Positions

Circular Menu supports 7 positions, `topLeft`, `topCenter`, `topRight`, `center`, `bottomLeft`, `bottomCenter`, `bottomRight`.

# TODO
- [x] Test in iPhone 
- [ ] Test in Android
- [ ] Add animations

# of coooourse PR are welcome :)
