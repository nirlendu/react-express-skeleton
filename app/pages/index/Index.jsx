/**
 * Copyright - WebApp
 */

/*
 global require module
 */

import React from 'react'
import { StyleSheet, css } from 'aphrodite'

import CoreStyle from  'app/config/core/style'

import Banner from 'app/containers/index/Banner'

const Style = StyleSheet.create({
	Wrapper : {
		[CoreStyle.PC.BREAKPOINT]:{
			width: '85%',
			margin: '5% auto',
		},
		[CoreStyle.TAB.BREAKPOINT]:{
			width: '100%',
			paddingBottom: '15%',
		},
		[CoreStyle.MOB.BREAKPOINT]:{
			width: '100%',
			paddingBottom: '15%',
		},
	},
})

export default class Index extends React.Component {
	render() {
		return (
			<div className={css(Style.Wrapper)}>
				<Banner
					data={this.props.data}
				/>
			</div>
		)
	}
}
