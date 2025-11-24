import { type LinkProps, Link } from "@tanstack/react-router";
import { LuArrowRight } from "react-icons/lu";
import type { Country } from "../../types/country";

interface Props {
	to: LinkProps["to"];
	params: LinkProps["params"];
	country: Country;
}

export const CountryCard: React.FC<Props> = ({ to, country, params }) => {
	return (
		<Link params={params} to={to}>
			<div className="group hover:border-primary cursor-pointer overflow-hidden rounded-lg border-2 border-transparent bg-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
				<div className="relative h-64 overflow-hidden">
					<img
						alt={country.name}
						className="h-full w-full rounded-lg object-cover transition-transform duration-500 group-hover:scale-110"
						src={country.path || "https://picsum.photos/200"}
						onError={(e) => (e.target.src = "https://picsum.photos/200")}
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
					<div className="absolute bottom-4 left-4 text-white">
						<h3 className="mb-1 text-2xl font-bold">{country.name}</h3>
						<p className="text-sm opacity-90">
							{country.roomCount || 0} rooms available
						</p>
					</div>
				</div>
				<div className="flex h-36 flex-col p-6">
					<p className="text-muted grow text-balance">
						{country.description.slice(0, 50) + "..."}
					</p>
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
