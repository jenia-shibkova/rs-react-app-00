import { Component } from 'react';
import { ListProps } from './types.ts';
import Card from '../Card';
import Loader from '../Loader';
import EmptyState from '../EmptyState';
import './styles.css';

class List extends Component<ListProps> {
  render() {
    const { items, isFetching } = this.props;

    if (isFetching) {
      return (
        <div className="list-container">
          <Loader />
        </div>
      );
    }

    if (items?.length) {
      return (
        <div>
          <div className="list">
            {items.map((item, i) => {
              return (
                <Card
                  key={i}
                  name={item.name}
                  url={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                  comics={item.comics}
                  series={item.series}
                  stories={item.stories}
                />
              );
            })}
          </div>
        </div>
      );
    } else {
      return (
        <div className="list-container">
          <EmptyState />
        </div>
      );
    }
  }
}

export default List;
