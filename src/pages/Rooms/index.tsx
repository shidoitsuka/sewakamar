import { RoomFilter } from "./components/Filter";

export const Rooms: React.FC = () => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const mockData = [
		{
			id: "jp-1",
			title: "Traditional Ryokan in Kyoto",
			location: "Gion District, Kyoto",
			price: 180,
			rating: 4.9,
			reviews: 127,
			image: "/placeholder.svg?height=300&width=400&text=Kyoto+Ryokan",
			amenities: ["Wifi", "Traditional Bath", "Garden View", "Tea Ceremony"],
			guests: 2,
			owner: {
				id: "owner-1",
				name: "Hiroshi Tanaka",
				avatar: "/placeholder.svg?height=40&width=40&text=HT",
			},
		},
		{
			id: "jp-2",
			title: "Modern Tokyo Apartment",
			location: "Shibuya, Tokyo",
			price: 120,
			rating: 4.7,
			reviews: 89,
			image: "/placeholder.svg?height=300&width=400&text=Tokyo+Apartment",
			amenities: ["Wifi", "Kitchen", "City View", "Metro Access"],
			guests: 4,
			owner: {
				id: "owner-2",
				name: "Yuki Sato",
				avatar: "/placeholder.svg?height=40&width=40&text=YS",
			},
		},
		{
			id: "jp-3",
			title: "Zen Garden House",
			location: "Arashiyama, Kyoto",
			price: 200,
			rating: 4.8,
			reviews: 156,
			image: "/placeholder.svg?height=300&width=400&text=Zen+Garden",
			amenities: [
				"Wifi",
				"Private Garden",
				"Meditation Space",
				"Bamboo Forest",
			],
			guests: 3,
			owner: {
				id: "owner-3",
				name: "Kenji Nakamura",
				avatar: "/placeholder.svg?height=40&width=40&text=KN",
			},
		},
	];

	return (
		<>
			<div className="mx-auto min-h-screen">
				<section className="relative h-[28rem] overflow-hidden">
					<div
						className="absolute inset-0 bg-cover bg-center bg-no-repeat"
						style={{ backgroundImage: "url('https://picsum.photos/900/200')" }}
					>
						<div className="absolute inset-0 bg-black/50"></div>
					</div>

					<div className="relative z-10 flex h-full items-center justify-center pt-4 text-center text-white">
						<div className="mx-auto px-4">
							<h1 className="mb-2 text-4xl font-bold md:text-6xl">
								Rooms in Japan
							</h1>
							<p className="text-muted text-xl">
								Experience Japan in your very own way
							</p>
						</div>
					</div>
				</section>
				<RoomFilter />
			</div>
		</>
	);
};
