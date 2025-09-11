import { type LinkProps, Link } from "@tanstack/react-router";
import { LuArrowRight } from "react-icons/lu";

interface Props {
	to: LinkProps["to"];
	country: {
		name: string;
		image: string;
		roomCount: number;
		description: string;
	};
}

export const CountryCard: React.FC<Props> = ({ to, country }) => {
	return (
		<Link to={to}>
			<div className="group hover:border-primary cursor-pointer overflow-hidden rounded-lg border-2 border-transparent bg-white transition-all duration-300 hover:scale-105 hover:shadow-xl">
				<div className="relative h-64 overflow-hidden">
					<img
						alt={country.name}
						className="h-full w-full rounded-lg object-cover transition-transform duration-500 group-hover:scale-110"
						src={country.image || "https://picsum.photos/200"}
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
					<div className="absolute bottom-4 left-4 text-white">
						<h3 className="mb-1 text-2xl font-bold">{country.name}</h3>
						<p className="text-sm opacity-90">
							{country.roomCount} rooms available
						</p>
					</div>
				</div>
				<div className="flex h-36 flex-col p-6">
					<p className="text-muted grow text-balance">{country.description}</p>
					<div className="mt-4 flex items-center justify-between">
						<span className="text-primary text-sm font-semibold">
							Explore Rooms
						</span>
						<div className="bg-primary/10 group-hover:bg-primary text-primary flex h-8 w-8 items-center justify-center rounded-full transition-colors group-hover:text-white">
							<span>
								<LuArrowRight />
							</span>
						</div>
					</div>
				</div>
			</div>
		</Link>
	);
};
