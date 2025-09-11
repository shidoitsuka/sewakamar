import { MultiSelect, Group, Text, type MultiSelectProps } from "@mantine/core";
import { LuWifi, LuBath, LuAccessibility, LuAirVent } from "react-icons/lu";

import { createElement } from "react";
import type { IconType } from "react-icons/lib";

const amenities: Record<
	string,
	{ icon: IconType; label: string; value: string }
> = {
	"Wi-Fi": {
		icon: LuWifi,
		label: "Wi-Fi",
		value: "wifi",
	},
	Bathtub: {
		icon: LuBath,
		label: "Bathtub",
		value: "bathtub",
	},
	"Disability Friendly": {
		icon: LuAccessibility,
		label: "Disability Friendly",
		value: "disability",
	},
	"Air Conditioner": {
		icon: LuAirVent,
		label: "Air Conditioner",
		value: "aircond",
	},
};

const renderMultiSelectOption: MultiSelectProps["renderOption"] = ({
	option,
}) => {
	const amenity = amenities[option.label];
	return (
		<Group gap="sm">
			{amenity && createElement(amenity.icon)}
			<div>
				<Text opacity={0.5} size="xs">
					{amenity?.label}
				</Text>
			</div>
		</Group>
	);
};

export const AmenitiesFilter: React.FC = () => {
	return (
		<>
			<MultiSelect
				hidePickedOptions
				searchable
				data={["Wi-Fi", "Bathtub", "Disability Friendly", "Air Conditioner"]}
				maxDropdownHeight={300}
				placeholder="Search for amenities"
				renderOption={renderMultiSelectOption}
			/>
		</>
	);
};
