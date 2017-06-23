# react-native-circular-menu

A Ripple menu effect for your react native application

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

# of coooourse PR are welcome :)
