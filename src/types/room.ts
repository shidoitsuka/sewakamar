export interface Room {
	id: string;
	title: string;
	location: string;
	price: number;
	rating: number;
	reviews: number;
	image: string;
	amenities: Array<string>;
	guests: number;
	owner: {
		id: string;
		name: string;
		avatar: string;
	};
}

export interface RoomDetail extends Room {
	roomImages: Array<string>;
	availableDate: Array<string>;
	geo: string;
	userReviews: Array<string>;
	description: string;
}
