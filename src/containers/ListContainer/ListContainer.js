// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Instruments
import List from '../../components/List';
import { fetchCardsList } from '../../actions/list';

class ListContainer extends Component {

  componentDidMount () {
    this.props.fetchCardsList();
  }

  render () {
    if (this.props.isLoading) {
      return <p className='list__notify'>Loading...</p>;
    }

    if (this.props.hasError) {
      return <p className='list__notify'>Something wrong</p>;
    }

    const filteredCards = this.props.cards
      .filter(card => card.data.num_comments > this.props.filterValue)
      .sort((a, b) => b.data.num_comments - a.data.num_comments);
    return <List cards={filteredCards} />;
  }
};

ListContainer.propTypes = {
  cards: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  hasError: PropTypes.bool.isRequired,
  filterValue: PropTypes.number.isRequired,
  fetchCardsList: PropTypes.func.isRequired,
};

function mapStateToProps (state) {
  return {
    cards: state.list.cards,
    isLoading: state.list.isLoading,
    hasError: state.list.hasError,
    filterValue: state.filter.value
  };
}

export default connect(mapStateToProps, { fetchCardsList })(ListContainer);
