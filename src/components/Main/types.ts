import { ChangeEvent } from 'react';

export interface MainProps {
	handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
	handleClick: () => void;
	text: string;
	data: any;
	isFetching: boolean;
}