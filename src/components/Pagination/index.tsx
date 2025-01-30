import { Component } from 'react';
import { PaginationProps } from './types.ts';
import './styles.css';

class Pagination extends Component<PaginationProps> {
	render() {
		// const { items } = this.props;

		// const { html_url, avatar_url, login } = this.props;

		return (
			<div className="pagination">
				<button>&larr;</button>
				<button>&rarr;</button>
			</div>
		)
	}
}

export default Pagination;