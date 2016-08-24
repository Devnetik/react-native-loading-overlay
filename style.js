/**
 * Created by michaelmalura on 30/07/16.
 */

import React, {Component} from 'react';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({

	background: {
		position       : 'absolute',
		top            : 0,
		left           : 0,
		bottom         : 0,
		right          : 0,
		flex           : 1,
		justifyContent : 'center',
		alignItems     : 'center',
		backgroundColor: 'rgba(0,0,0,0.7)'
	},
	text      : {
		color    : 'white',
		marginTop: 20
	}
});