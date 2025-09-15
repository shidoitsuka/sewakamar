import { type LinkProps, Link } from "@tanstack/react-router";
import type { Room } from "../../types/room";
import { Badge } from "@mantine/core";
import { LuMapPin, LuStar, LuUser } from "react-icons/lu";
import { amenities } from "../../constants/amenities";

interface Props {
	to: LinkProps["to"];
	room: Room;
}

export const RoomCard: React.FC<Props> = ({ to, room }) => {
	return (
		<Link key={room.id} to={to}>
			<div className="group hover:border-primary cursor-pointer overflow-hidden rounded-lg border-2 border-transparent shadow-lg transition-all duration-300 hover:shadow-xl">
				<div className="relative h-64 overflow-hidden">
					<img
						alt={room.title}
						className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
						src="https://picsum.photos/500/200"
					/>
					<div className="absolute top-4 right-4">
						<Badge>${room.price}/night</Badge>
					</div>
					<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
					<div className="absolute bottom-4 left-4">
						<div className="flex items-center space-x-1 text-sm text-white">
							<LuStar className="h-4 w-4 fill-current text-yellow-400" />
							<span className="font-medium">{room.rating}</span>
							<span className="opacity-80">({room.reviews})</span>
						</div>
					</div>
				</div>

				<div className="flex flex-col bg-white p-6">
					<h3 className="text-foreground mb-2 text-xl font-bold text-balance">
						{room.title}
					</h3>

					<div className="text-muted mb-3 flex items-center space-x-1">
						<LuMapPin className="h-4 w-4" />
						<span className="text-sm">{room.location}</span>
					</div>

					<div className="text-muted mb-4 flex items-center space-x-1">
						<LuUser className="h-4 w-4" />
						<span className="text-sm">Up to {room.guests} guests</span>
					</div>

					<div className="mb-4 flex h-14 grow flex-wrap items-start gap-2">
						{room.amenities.slice(0, 3).map((amenity) => {
							const IconComponent = amenities[amenity]?.icon || LuMapPin;
							return (
								<Badge key={amenity} variant="outline">
									<div className="flex items-center gap-x-2">
										<IconComponent className="h-3 w-3" />
										<span>{amenity}</span>
									</div>
								</Badge>
							);
						})}
						{room.amenities.length > 3 && (
							<Badge variant="outline">+{room.amenities.length - 3} more</Badge>
						)}
					</div>
				</div>
			</div>
		</Link>
	);
};
