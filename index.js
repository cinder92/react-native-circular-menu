import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
	View,
	StyleSheet,
	Animated,
	Text,
	Easing,
	TouchableOpacity,
	Dimensions
} from 'react-native';

const screen = Dimensions.get("window");

class CircularMenu extends Component{

	constructor(props){
		super(props);

		this.state = {
			animatedStyle : new Animated.Value(0),
			animatedContent : new Animated.Value(0),
			color : this.props.color,
			size : this.props.size,
			position : this.props.position
		}
	}

	componentWillReceiveProps(nextState){
		const {show, size} = nextState;

		let currentSize = (size) ? size : 20;

		Animated.timing(
			this.state.animatedStyle,{
				toValue : show ? currentSize : 0,
				delay : show ? 250 : 0,
				useNativeDriver : true,
				easing: Easing.inOut(Easing.ease)
			}
		).start();

		Animated.timing(
			this.state.animatedContent,{
				toValue : show ? 1 : 0,
				delay : show ? 350 : 0,
				useNativeDriver : true,
				easing: Easing.inOut(Easing.ease)
			}
		).start()
	}

	render(){
		const {animatedStyle, animatedContent, color, position} = this.state;
		const {show, items, closeBtn} = this.props;
		return (
			<View style={styles.wrap} pointerEvents={!show ? "none" : "auto" }>

			   <Animated.View style={[{
				   transform : [
					   {
						   scale : animatedStyle
					   }
				   ]
			   },styles.container,{
				   backgroundColor : color ? color : "#F23B58"
			   },(!position || position === "topLeft") ? {
				   top : 0,
				   left : -20
			   } : (position === "topRight") ? {
				   top : 0,
				   right : -20
			   } : (position === "topCenter") ? {
				   top : 0,
				   left : screen.width / 3
			   } : (position === "center") ? {
				   top : screen.height / 3,
				   left : screen.width / 3
			   } : (position === "bottomCenter") ? {
				   bottom : 0,
				   left : screen.width / 3
			   } : (position === "bottomLeft") ? {
				   bottom : 0,
				   left : -20
			   } : (position === "bottomRight") ? {
				   bottom : 0,
				   right : -20
			   } : {}]} />

			   <Animated.View style={{
				   opacity : animatedContent,
				   flex : 1
			   }}>
			   		{closeBtn}
					<View style={styles.content}>
					  {items}
					</View>
			   </Animated.View>

		   </View>
		)
	}
}

CircularMenu.propTypes = {
	color : PropTypes.string,
	show : PropTypes.bool.isRequired,
	items : PropTypes.array.isRequired,
	size : PropTypes.number,
	position : PropTypes.string
}

const styles = StyleSheet.create({
	container : {
		width : 100,
		height : 100,
		backgroundColor : "#F23B58",
		borderRadius : 50,
		position : "absolute"
	},

	wrap : {
		position : "absolute",
		top : 0,
		left : 0,
		right : 0,
		bottom : 0,
		zIndex : 4
	},

	content : {
		alignItems : "center",
		justifyContent : "center",
		flex : 1
	}
});

export default CircularMenu;
