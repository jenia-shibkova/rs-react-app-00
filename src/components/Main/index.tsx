import { Component } from 'react';
import Header from '../Header';
import List from '../List';
import { MainProps } from './types.ts';
import ErrorBoundary from '../ErrorBoundary';
import ErrorButton from '../ErrorButton';
import './styles.css';

class Main extends Component<MainProps> {
	render() {
		console.log('this.props.handleInputChange', this.props.handleInputChange)
		return (
			<div className="main-wrapper">
				<Header
					handleInputChange={this.props.handleInputChange}
					handleClick={this.props.handleClick}
					text={this.props.text}
				/>
				<List
					items={this.props.data}
					isFetching={this.props.isFetching}
				/>

        <ErrorBoundary>
          <ErrorButton />
        </ErrorBoundary>
			</div>
		);
	}
}

export default Main;