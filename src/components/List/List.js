// Core
import React from 'react';
import PropTypes from 'prop-types';

// Instruments
import './List.scss';
import Card from '../Card';

const List = ({ cards }) => {

  if (cards.length === 0) {
    return <p className='list__notify'>No results found matching your criteria</p>;
  }

  return (
    <div className='list'>
      {cards.map(card => (
        <div className='list__item'
             key={card.data.id}>
          <Card {...card.data} />
        </div>
      ))}
    </div>
  );
};

List.propTypes = {
  cards: PropTypes.array.isRequired,
};

export default List;
