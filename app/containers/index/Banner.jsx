/**
 * Copyright - Panally Internet
 */

/*
 global require module
 */

import React from 'react'
import { StyleSheet, css } from 'aphrodite'

import CoreStyle from 'app/config/core/style'
import Url from 'app/config/core/url'

const Style = StyleSheet.create({
	Parent : {
		[CoreStyle.PC.BREAKPOINT]:{
			display: '-webkit-inline-flex',
			display: '-ms-inline-flexbox',
			display: 'inline-flex',
			marginLeft: '7.5%',
			marginRight: 'auto',
			width: '85%',
		},
		[CoreStyle.TAB.BREAKPOINT]:{
		},
		[CoreStyle.MOB.BREAKPOINT]:{
		},
	}
})

class Banner extends React.Component {

	render() {
		return (
			<div className={css(Style.Parent)}>
				{this.props.data.First}
			</div>
		);
	}
}

export default Banner;
