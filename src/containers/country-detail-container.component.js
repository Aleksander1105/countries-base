import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCountry } from '../actions/actions-countries.js';
import CountryDetails from '../presentational/country-details.component';

class CountryDetailsContainer extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		const id = parseInt(this.props.params.id);
		this.props.dispatch(getCountry(id));
	}

	render() {
		return (
			<CountryDetails country={this.props.selectedCountry} />
		)
	}
}

const mapStateToProps = function (store) {
	return {
		selectedCountry: store.countriesReducer.selectedCountry
	};
};

export default connect(mapStateToProps)(CountryDetailsContainer);