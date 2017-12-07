// Core
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Instruments
import FilterSlider from '../../components/FilterSlider';
import { changeSliderFilterValue } from '../../actions/filter';

class FilterSliderContainer extends React.Component {

  handleChange = (value) => {
    this.props.changeSliderFilterValue(value);
  };

  render () {
    return (
      <FilterSlider value={this.props.value}
                    onChange={this.handleChange}
      />
    );
  }
}

FilterSliderContainer.propTypes = {
  value: PropTypes.number.isRequired,
  changeSliderFilterValue: PropTypes.func.isRequired,
};

function mapStateToProps (state) {
  return {
    value: state.filter.value
  };
}

export default connect(mapStateToProps, { changeSliderFilterValue })(FilterSliderContainer);
