import { LuInfo, LuMapPin, LuStar } from "react-icons/lu";
import { DatePickerInput } from "@mantine/dates";
import type { RoomDetail } from "../../types/room";
import { useState } from "react";
import { Avatar, Button, Select, Tooltip } from "@mantine/core";
import { amenities } from "../../constants/amenities";
import { twMerge } from "tailwind-merge";

export const Room: React.FC = () => {
	const [selectedImageIndex, setSelectedImageIndex] = useState(0);

	const mockData: RoomDetail = {
		id: "jp-1",
		title: "Traditional Ryokan in Kyoto",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla sunt commodi necessitatibus, ipsa iure, esse, consequuntur tempore expedita culpa deleniti id aperiam itaque nostrum vitae earum. Deleniti accusamus corrupti natus.",
		location: "Gion District, Kyoto",
		price: 180,
		rating: 4.9,
		reviews: 127,
		image: "/placeholder.svg?height=300&width=400&text=Kyoto+Ryokan",
		amenities: ["Wi-Fi", "Bathtub", "Air Conditioner", "Disability Friendly"],
		guests: 2,
		owner: {
			id: "owner-1",
			name: "Hiroshi Tanaka",
			avatar: "/placeholder.svg?height=40&width=40&text=HT",
		},
		availableDate: ["2025-09-13"],
		geo: "longlat",
		userReviews: [""],
		roomImages: [
			"https://picsum.photos/500/300",
			"https://picsum.photos/500/310",
			"https://picsum.photos/500/305",
		],
	};

	return (
		<div className="container mx-auto py-24">
			<h1 className="text-3xl font-bold">{mockData.title}</h1>
			<div className="text-muted mt-2 flex items-center gap-x-4 text-sm">
				<h6 className="flex items-center gap-x-1">
					<LuStar className="fill-current text-yellow-400" /> {mockData.rating}{" "}
					({mockData.reviews} reviews)
				</h6>
				<h6 className="flex items-center gap-x-1">
					<LuMapPin className="text-primary" /> {mockData.location}
				</h6>
			</div>
			<div className="mt-4 grid grid-cols-4 gap-8">
				<div className="col-span-3">
					<div className="bg-primary/10 relative h-96 overflow-hidden rounded-lg">
						<img
							alt={`${mockData.title} - Image ${selectedImageIndex + 1}`}
							className="mx-auto h-full w-auto object-cover"
							src={mockData.roomImages[selectedImageIndex]}
						/>
					</div>
					<div className="mt-4 grid grid-cols-4 gap-4">
						{mockData.roomImages.map((image, index) => (
							<img
								key={index}
								alt={`${mockData.title} - Thumbnail ${index + 1}`}
								src={image}
								className={twMerge(
									"h-full w-full cursor-pointer rounded-lg object-cover transition-all duration-150 hover:brightness-50",
									index === selectedImageIndex && "brightness-50"
								)}
								onClick={() => {
									setSelectedImageIndex(index);
								}}
							/>
						))}
					</div>

					<div className="mt-8">
						<h2 className="text-2xl font-bold">About this place</h2>
						<p className="text-dark mt-2 font-light">{mockData.description}</p>
					</div>

					<div className="border-t-primary my-4 h-px w-full border-t" />

					<div>
						<h3 className="text-xl font-semibold">Room details</h3>
						<div></div>
					</div>

					<div>
						<h3 className="text-xl font-semibold">Amenities</h3>
						<div className="text-dark grid grid-cols-4">
							{mockData.amenities.map((amenity, index) => {
								const IconComponent = amenities[amenity]?.icon || LuInfo;
								return (
									<div key={index} className="flex items-center gap-x-2">
										<IconComponent />
										{amenity}
									</div>
								);
							})}
						</div>
					</div>
				</div>
				<div className="sticky top-24 self-start">
					<div className="border-primary rounded-lg border-2 p-4 shadow-lg">
						<div className="mt-2 mb-4">
							<span className="text-2xl font-bold">${mockData.price}</span>
							<span> / night</span>
						</div>
						<div>
							<DatePickerInput
								label="Pick dates range"
								placeholder="Pick date"
								type="range"
							/>

							<Select
								allowDeselect={false}
								data={["1 Person", "2 Person"]}
								defaultValue="1 Person"
								label="Guests"
							/>

							<Button fullWidth className="mt-4">
								Book Now
							</Button>

							<p className="text-muted mt-4 text-center text-xs">
								You won't be charged yet.
							</p>
						</div>
					</div>
					<div className="border-primary mt-8 rounded-lg border-2 px-4 py-6 shadow-lg">
						<div className="flex items-center gap-x-2">
							<Avatar color="primary" />
							<h6 className="font-semibold">{mockData.owner.name}</h6>
						</div>

						<div className="text-dark mt-4 border-t pt-4 text-xs">
							<div className="flex items-center justify-between">
								<p>Response Time:</p>
								<p>Very Quick</p>
							</div>
							<div className="flex items-center justify-between">
								<Tooltip
									closeDelay={500}
									label="% of this room owner of renting their room(s)"
									position="bottom"
									target="#rentRate"
								/>
								<p className="flex cursor-help items-center" id="rentRate">
									<LuInfo className="mr-1" />
									Renting rate:
								</p>
								<p>98%</p>
							</div>
						</div>

						<Button fullWidth className="mt-4" variant="outline">
							View Profile
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};
