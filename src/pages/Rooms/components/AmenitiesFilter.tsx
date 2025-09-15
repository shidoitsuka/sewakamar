import { MultiSelect, Group, Text, type MultiSelectProps } from "@mantine/core";

import { createElement } from "react";
import { amenities } from "../../../constants/amenities";

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
