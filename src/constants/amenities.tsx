import type { IconType } from "react-icons/lib";
import { LuAccessibility, LuAirVent, LuBath, LuWifi } from "react-icons/lu";

export const amenities: Record<
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
