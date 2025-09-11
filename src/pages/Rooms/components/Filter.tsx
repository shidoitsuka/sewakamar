import { Chip, Group, NumberInput, Select } from "@mantine/core";
import { LuFilter } from "react-icons/lu";
import { AmenitiesFilter } from "./AmenitiesFilter";
import { useState } from "react";

export const RoomFilter: React.FC = () => {
	const [selectedFilter, setSelectedFilter] = useState<string | Array<string>>(
		"1"
	);

	const handleSortChange = (newValue: string | Array<string>): void => {
		setSelectedFilter(newValue);
	};

	return (
		<section className="container mx-auto mt-6">
			<div className="border-primary rounded-lg border p-6">
				<div className="flex items-center space-x-3">
					<div className="bg-primary/30 text-primary rounded p-3">
						<LuFilter size={24} />
					</div>
					<div>
						<span className="text-xl font-bold">Filter Rooms</span>
						<p className="text-muted">4 rooms available</p>
					</div>
				</div>
				<div className="mt-4 grid grid-cols-4 gap-4">
					<div>
						<h6 className="font-semibold">Guests</h6>
						<Select
							allowDeselect={false}
							defaultValue="1 Person"
							data={[
								"1 Person",
								"2 Person",
								"3 Person",
								"4 Person",
								"5 Person",
							]}
						/>
					</div>
					<div>
						<h6 className="font-semibold">Sort by</h6>
						<Chip.Group value={selectedFilter} onChange={handleSortChange}>
							<Group gap="sm">
								<Chip value="1">Rating</Chip>
								<Chip value="2">Price</Chip>
							</Group>
						</Chip.Group>
					</div>
					<div>
						<h6 className="font-semibold">Price Range</h6>
						<div className="flex">
							<NumberInput
								hideControls
								leftSection={<span className="px-2">IDR</span>}
								styles={{
									input: {
										borderTopRightRadius: 0,
										borderBottomRightRadius: 0,
									},
								}}
							/>
							<div className="mt-4 h-px w-4 bg-gray-400"></div>
							<NumberInput
								hideControls
								leftSection={<span className="px-2">IDR</span>}
								styles={{
									input: {
										borderTopLeftRadius: 0,
										borderBottomLeftRadius: 0,
									},
								}}
							/>
						</div>
					</div>
					<div>
						<h6 className="font-semibold">Amenities</h6>
						<AmenitiesFilter />
					</div>
				</div>
			</div>
		</section>
	);
};
