import React, {Component} from 'react';
import {
	Text,
	Image,
	TouchableHighlight,
	View,
	ActivityIndicator,
	ProgressBarAndroid
} from 'react-native';
import Style from './style';

class LoadingOverlay extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View style={[Style.background]}>
				<ActivityIndicator
					size="large"
					animating={true}
					color="white"
				/>
				<Text style={Style.text}>{this.props.text || 'Loading data...'}</Text>
			</View>
		)
	}
}

export default LoadingOverlay;