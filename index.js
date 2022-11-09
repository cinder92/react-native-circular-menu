import React, { useEffect, useReducer } from "react";
import PropTypes from "prop-types";
import { View, StyleSheet, Animated, Easing, Dimensions } from "react-native";

const screen = Dimensions.get("window");

const CircularMenu = (props) => {
  const reducer = (state, newState) => ({ ...state, ...newState });
  const [state, _] = useReducer(reducer, {
    animatedStyle: new Animated.Value(0),
    animatedContent: new Animated.Value(0),
    color: props.color,
    size: props.size,
    position: props.position,
  });

  const _handleUpdate = () => {
    const { show, openDelay, closeDelay } = props;
    const { size } = state;

    const currentSize = size ?? 20;
    const _openDelay = openDelay ?? 250;
    const _closeDelay = closeDelay ?? 350;

    Animated.timing(state.animatedStyle, {
      toValue: show ? currentSize : 0,
      delay: show ? _openDelay : 0,
      useNativeDriver: true,
      easing: Easing.inOut(Easing.ease),
    }).start();

    Animated.timing(state.animatedContent, {
      toValue: show ? 1 : 0,
      delay: show ? _closeDelay : 0,
      useNativeDriver: true,
      easing: Easing.inOut(Easing.ease),
    }).start();
  };

  const _computeStyles = () => {
    const { position } = state;
    let _position = position;

    // default position is topLeft
    if (position == null || position.length == 0) {
      _position = "topLeft";
    }

    switch (_position) {
      case "topLeft":
        return {
          top: 0,
          left: -20,
        };
      case "topRight":
        return {
          top: 0,
          right: -20,
        };
      case "topCenter":
        return {
          top: 0,
          left: screen.width / 3,
        };
      case "center":
        return {
          top: screen.height / 3,
          left: screen.width / 3,
        };
      case "bottomCenter":
        return {
          bottom: 0,
          left: screen.width / 3,
        };
      case "bottomLeft":
        return {
          bottom: 0,
          left: -20,
        };
      case "bottomRight":
        return {
          bottom: 0,
          right: -20,
        };
      default:
        return {};
    }
  };

  useEffect(() => _handleUpdate(), [props.show, props.size]);

  const { animatedStyle, animatedContent, color } = state;
  const { show, items, closeBtn, contentStyle } = props;

  const _animatedStyles = [
    {
      transform: [
        {
          scale: animatedStyle,
        },
      ],

      ...defaultStyles.container,
      backgroundColor: color ? color : "#F23B58",
      ..._computeStyles(),
    },
  ];

  return (
    <View style={defaultStyles.wrap} pointerEvents={!show ? "none" : "auto"}>
      <Animated.View style={_animatedStyles} />
      <Animated.View
        style={{
          opacity: animatedContent,
          flex: 1,
        }}
      >
        {closeBtn}
        <View style={[defaultStyles.content, contentStyle]}>{items}</View>
      </Animated.View>
    </View>
  );
};

CircularMenu.propTypes = {
  color: PropTypes.string,
  show: PropTypes.bool.isRequired,
  items: PropTypes.array.isRequired,
  size: PropTypes.number,
  position: PropTypes.arrayOf([
    "topCenter",
    "topLeft",
    "topRight",
    "center",
    "bottomLeft",
    "bottomCenter",
    "bottomRight",
  ]),
  closeBtn: PropTypes.element,
  openDelay: PropTypes.number,
  closeDelay: PropTypes.number,
  contentStyle: PropTypes.object,
};

const defaultStyles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    backgroundColor: "#F23B58",
    borderRadius: 50,
    position: "absolute",
  },

  wrap: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 4,
  },

  content: {
    alignItems: "center",
    justifyContent: "center",
    zIndex: 5,
  },
});

export default CircularMenu;
