import { Component } from 'react';
import { CardProps } from './types.ts';
import './styles.css';

class Card extends Component<CardProps> {
	render() {
    const { name, url, comics, series, stories } = this.props;
console.log('comics', comics)
		return (
      <div className="card">
        <img src={url} alt="Hero Image" />
        {/* <svg viewBox="0 0 36 52" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <rect fill="#EC1D24" width="100%" height="100%"></rect>
          <path fill="#FEFEFE" d="M31.5 48V4H21.291l-3.64 22.735L14.102 4H4v44h8V26.792L15.577 48h4.229l3.568-21.208V48z">
          </path>
        </svg> */}
        {/* <div className="image-wrapper">

        </div> */}
        
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
      </div>
		);
	}
}

export default Card;