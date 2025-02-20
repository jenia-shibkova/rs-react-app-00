import type { JSX } from 'react';
import classNames from 'classnames';
import { CardProps } from './types.ts';
import { NavLink } from 'react-router';
import useTheme from '../../hooks/useTheme.ts';
import styles from './card.module.css';

const Card = (props: CardProps): JSX.Element => {
  const { id, name, url, comics, series, stories } = props;

  const { theme } = useTheme();

  return (
    <NavLink to={`/${id}`} className={styles.card}>
      <img src={url} alt="Hero Image" />

      <div className={classNames(styles.title, styles[theme])}>
        <h3 className={classNames(styles.name, styles[theme])} data-testid="name">
          {name}
        </h3>
      </div>

      <div className={styles.cardHover}>
        <p className={styles.itemInfo}>
          <span className={styles.infoName}>Comics:</span>
          <span className={styles.infoValue} data-testid="comics">
            {comics.available}
          </span>
        </p>
        <p className={styles.itemInfo}>
          <span className={styles.infoName}>Series:</span>
          <span className={styles.infoValue} data-testid="series">
            {series.available}
          </span>
        </p>
        <p className={styles.itemInfo}>
          <span className={styles.infoName}>Stories:</span>
          <span className={styles.infoValue} data-testid="stories">
            {stories.available}
          </span>
        </p>
      </div>
    </NavLink>
  );
};

export default Card;
