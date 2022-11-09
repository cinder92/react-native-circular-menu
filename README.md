# react-native-circular-menu

A Ripple menu effect for your react native application

[![npm version](https://img.shields.io/npm/v/react-native-circular-menu.svg?style=flat-square)](https://www.npmjs.com/package/react-native-circular-menu)
[![NPM downloads](https://img.shields.io/npm/dm/react-native-circular-menu.svg?style=flat-square)](https://www.npmjs.com/package/react-native-circular-menu)
[![Package Quality](http://npm.packagequality.com/shield/react-native-circular-menu.svg?style=flat-square)](http://packagequality.com/#?package=react-native-circular-menu)
[![Donate](https://img.shields.io/badge/Donate-Patreon-green.svg?style=flat-square)](http://paypal.me/dcergo)

# Example

![example](https://github.com/cinder92/react-native-circular-menu/blob/master/ezgif.com-video-to-gif.gif)

# How to install

`yarn add react-native-circular-menu`

# How to use

```
...
import CircularMenu from 'react-native-circular-menu';

const App = () => {
  const [show, setState] = useState(false);

  const renderItems = () => [<Text style={{color: 'green'}}>Menu Item</Text>];

  const renderCloseBtn = () => (
    <TouchableOpacity
      onPress={() => {
        setState(!show);
      }}>
      <Text>Close Menu</Text>
    </TouchableOpacity>
  );

  return (
    <View>
      <StatusBar hidden />
      <Text onPress={() => setState(!show)}>Open Menu</Text>
      <CircularMenu
        items={renderItems()}
        closeBtn={renderCloseBtn()}
        show={show}
        position={'center'}
        contentStyle={{backgroundColor: 'transparent'}}
        closeDelay={250}
        openDelay={0}
      />
    </View>
  );
```

# Props

| Name         | Description                                               | Required |
| ------------ | --------------------------------------------------------- | -------- |
| show         | Set `true` to show and `false` to hide                    | yes      |
| color        | Change color of ripple effect                             | no       |
| size         | Change the scale size of circle (default : 20)            | no       |
| items        | Menu items (array)                                        | yes      |
| position     | Change position of animation circle (default : `topLeft`) | no       |
| closeBtn     | Receives a component for close button                     | yes      |
| openDelay    | Change delay before the menu opens (default : 250)        | no       |
| closeDelay   | Change delay before the menu closes (default : 350)       | no       |
| contentStyle | Style object for the child container                      | no       |

# Positions

Circular Menu supports 7 positions, `topLeft`, `topCenter`, `topRight`, `center`, `bottomLeft`, `bottomCenter`, `bottomRight`.

# TODO

- [x] Test in iPhone
- [x] Test in Android
- [ ] Add animations

# of coooourse PR are welcome :)
