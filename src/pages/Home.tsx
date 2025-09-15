import { useTranslation } from "react-i18next";
import type { FunctionComponent } from "../common/types";
import { Button, TextInput } from "@mantine/core";
import { LuStar, LuMapPin, LuUsers } from "react-icons/lu";
import { CountryCard } from "../components/cards/CountryCard";
import type { Country } from "../types/country";

export const Home = (): FunctionComponent => {
	const { t, i18n } = useTranslation();

	const onTranslateButtonClick = async (): Promise<void> => {
		if (i18n.resolvedLanguage === "en") {
			await i18n.changeLanguage("es");
		} else {
			await i18n.changeLanguage("en");
		}
	};

	const countries: Array<Country> = [
		{
			id: "japan",
			name: "Japan",
			image: "",
			description: "Discover traditional ryokans and modern apartments",
			roomCount: 1247,
		},
		{
			id: "italy",
			name: "Italy",
			image: "",
			description: "Stay in historic villas and cozy apartments",
			roomCount: 892,
		},
		{
			id: "thailand",
			name: "Thailand",
			image: "",
			description: "Tropical escapes and cultural experiences",
			roomCount: 1156,
		},
		{
			id: "france",
			name: "France",
			image: "",
			description: "Elegant châteaux and Parisian apartments",
			roomCount: 743,
		},
		{
			id: "morocco",
			name: "Morocco",
			image: "",
			description: "Authentic riads and desert retreats",
			roomCount: 567,
		},
		{
			id: "greece",
			name: "Greece",
			image: "",
			description: "Island villas and ancient city stays",
			roomCount: 634,
		},
	];

	return (
		<>
			<div>
				<div className="flex h-screen w-full flex-col items-center justify-center">
					<section className="relative flex h-full w-full items-center justify-center">
						<div
							className="absolute inset-0 bg-cover bg-center bg-no-repeat"
							style={{
								backgroundImage: "url('https://picsum.photos/1300/600')",
							}}
						>
							<div className="absolute inset-0 bg-black/40"></div>
						</div>

						<div className="relative z-10 mx-auto max-w-4xl px-4 text-center text-white">
							<h1 className="mb-6 text-5xl font-bold text-balance md:text-7xl">
								Find Your Perfect Stay
							</h1>
							<p className="mb-8 text-xl text-balance opacity-90 md:text-2xl">
								Discover amazing rooms and unique experiences around the world
							</p>

							<div className="mx-auto mb-8 flex max-w-2xl flex-col gap-4 sm:flex-row">
								<div className="relative flex-1">
									<input className="text-muted-foreground absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 transform" />
									<TextInput
										placeholder="Where do you want to stay?"
										size="lg"
										type="text"
									/>
								</div>
								<Button size="lg">Search Rooms</Button>
							</div>

							<div className="flex items-center justify-center space-x-8 text-sm opacity-80">
								<div className="flex items-center space-x-2">
									<LuStar className="h-4 w-4 fill-current" />
									<span>4.8+ Rating</span>
								</div>
								<div className="flex items-center space-x-2">
									<LuMapPin className="h-4 w-4" />
									<span>50+ Countries</span>
								</div>
								<div className="flex items-center space-x-2">
									<LuUsers />
									<span>10,000+ Happy Guests</span>
								</div>
							</div>
						</div>

						<div className="absolute bottom-8 left-1/2 -translate-x-1/2 transform animate-bounce">
							<div className="flex h-10 w-6 justify-center rounded-full border-2 border-white/50">
								<div className="mt-2 h-3 w-1 animate-pulse rounded-full bg-white/50"></div>
							</div>
						</div>
					</section>
				</div>

				<section className="px-4 py-20 sm:px-6 lg:px-8">
					<div className="mx-auto max-w-7xl">
						<div className="mb-16 text-center">
							<h2 className="text-primary mb-4 text-4xl font-bold md:text-5xl">
								Explore Destinations
							</h2>
							<p className="text-primary/50 mx-auto max-w-2xl text-xl text-balance">
								Choose from our carefully selected countries and discover unique
								accommodations
							</p>
						</div>

						<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
							{countries.map((country, index) => (
								<CountryCard key={index} country={country} to="/" />
							))}
						</div>
					</div>
				</section>
			</div>
		</>
	);
};
