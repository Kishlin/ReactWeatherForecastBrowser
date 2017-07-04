import React, { Component } from 'react';

class GoogleMap extends Component {
	componentDidMount() {
		console.log('Drawing map !');
		new google.maps.Map(this.refs.map, {
			zoom: 12,
			center: {
				lat: this.props.lat,
				lng: this.props.lon
			}
		});
		console.log(this.props.lat);
		console.log(this.props.lon);
	}

	render() {
		return <div ref="map" />;
	}
}

export default GoogleMap;