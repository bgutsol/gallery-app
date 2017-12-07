// Core
import React from 'react';
import PropTypes from 'prop-types';

// Instruments
import './Card.scss';

const Card = ({
                thumbnail,
                title,
                num_comments,
                permalink,
}) => (
  <div className='card'>
    <div className='card__img'>
      <img className='card__img-i' src={thumbnail} alt='' />
    </div>
    <div className='card__info'>
      <h3 className='card__title'>{title}</h3>
      <p className='card__comments-num'>
        Number of comments <strong>
          {num_comments}
        </strong>
      </p>
      <a className='card__link' href={`https://www.reddit.com${permalink}`}>Link</a>
    </div>
  </div>
);

Card.propTypes = {
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  num_comments: PropTypes.number.isRequired,
  permalink: PropTypes.string.isRequired,
};

export default Card;
