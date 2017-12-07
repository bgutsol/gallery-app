// Core
import React from 'react';
import PropTypes from 'prop-types';
import InputRange from 'react-input-range';

// Instruments
import './FilterSlider.scss';

class FilterSlider extends React.Component {
  constructor (props) {
    super(props);

    this.state = { value: 0 };
  }

  handleChange = (value) => {
    this.setState({ value });
    this.props.onChange(value);
  };

  render () {
    return (
      <div className='filterSlider'>
        <h2 className='filterSlider__title'>Top commented</h2>
        <div className='filterSlider__input'>
          <InputRange
            maxValue={600}
            minValue={0}
            step={10}
            value={this.state.value}
            onChange={this.handleChange}
          />
        </div>
        <p className='filterSlider__currFilter'>
          Current Filter: <strong>
            { this.state.value }
          </strong>
        </p>
      </div>
    );
  }
}

FilterSlider.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default FilterSlider;
