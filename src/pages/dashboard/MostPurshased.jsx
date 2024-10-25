/* App.js */
import React, { Component } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
//var CanvasJSReact = require('@canvasjs/react-charts');
 
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
class MostPurshased extends Component {
	render() {
		const options = {
			title: {
				text: "Most Purchased Items Chart"
			},
			data: [
			{
				// Change type to "doughnut", "line", "splineArea", etc.
				type: "column",
				dataPoints: [
					{ label: "Blue Band",  y: 10  },
					{ label: "Electric Stove", y: 15  },
					{ label: "Philips Air Fryer", y: 25  },
					{ label: "Dell XPS 13",  y: 30  },
					{ label: "Nike Airforce 1",  y: 28  }
				]
			}
			]
		}
		return (
		<div>
			<CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}
export default MostPurshased;   