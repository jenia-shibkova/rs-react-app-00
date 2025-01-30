export interface ListData {
	total_count: number;
	incomplete_results: boolean;
	items: [
		{

		},
	];
}
			
export interface ListProps {
	items: Array<any>;
	// html_url: string;
	// avatar_url: string;
	// login: string;
	isFetching: boolean;
}