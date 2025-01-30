import { Component } from 'react';
import { ListProps } from './types.ts';
import Card from '../Card';
import Loader from '../Loader';
import Pagination from '../Pagination';
import './styles.css';

class List extends Component<ListProps> {
	render() {
		const { items, isFetching } = this.props;
		console.log('list.....', 'items?.length', items?.length, items)
		// const { html_url, avatar_url, login } = this.props;
    console.log('isFetching....', isFetching)
		if (isFetching) {
	    return (
				<div className="list-container">
					<Loader />
				</div>
			)
		}
	

		if (items?.length) {
			return (
				<>
					<div className="list">
						{/* <img className="user__logo" src={avatar_url} alt="user" /> */}
						{items.map((item, i) => {
							console.log('item', item?.urls?.[0]?.url)
							return (
						
								<Card
									key={i}
									name={item.name}
									url={`${item.thumbnail.path}.${item.thumbnail.extension}`}
									comics={item.comics}
									series={item.series}
									stories={item.stories}
								/>
							)
						})}
					</div>
					<Pagination />
				</>
			);
		} else {
			return (
				<div className="list-container">
					<p>empty state</p>
				</div>
			)
		}
	}
}

export default List;