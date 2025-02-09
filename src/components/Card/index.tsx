import type { JSX } from 'react';
import { CardProps } from './types.ts';
import { NavLink } from 'react-router';
import './styles.css';

const Card = (props: CardProps): JSX.Element => {
  const { id, name, url, comics, series, stories } = props;

  return (
    <NavLink to={`/${id}`} className="card">
      <img src={url} alt="Hero Image" />

      <div className="title">
        <h3 className="name">{name}</h3>
      </div>

      <div className="card-hover">
        <p className="item-info">
          <span className="info-name">Comics:</span>
          <span className="info-value">{comics?.available}</span>
        </p>
        <p className="item-info">
          <span className="info-name">Series:</span>
          <span className="info-value">{series?.available}</span>
        </p>
        <p className="item-info">
          <span className="info-name">Stories:</span>
          <span className="info-value">{stories?.available}</span>
        </p>
      </div>
    </NavLink>
  );
};

export default Card;
