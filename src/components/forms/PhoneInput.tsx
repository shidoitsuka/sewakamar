import {
	TextInput as MantineTextInput,
	Menu,
	type TextInputProps,
} from "@mantine/core";
import { type JSX, useState } from "react";
import {
	Controller,
	useFormContext,
	type FieldValues,
	type Path,
} from "react-hook-form";

const COUNTRY_CODES = {
	"": "🏳️",
	"1": "🇺🇸",
	"44": "🇬🇧",
	"86": "🇨🇳",
	"91": "🇮🇳",
	"81": "🇯🇵",
	"49": "🇩🇪",
	"33": "🇫🇷",
	"39": "🇮🇹",
	"61": "🇦🇺",
	"62": "🇮🇩",
};

interface ControlledPhoneInputProps<T extends FieldValues>
	extends Omit<TextInputProps, "name"> {
	name: Path<T>;
}

export function PhoneInput<T extends FieldValues>({
	name,
	...props
}: ControlledPhoneInputProps<T>): JSX.Element {
	const { control } = useFormContext<T>();
	const [countryCode, setCountryCode] = useState("");

	return (
		<Controller
			control={control}
			name={name}
			render={({
				field: { onChange, value, ...field },
				fieldState: { error },
			}) => {
				return (
					<MantineTextInput
						{...props}
						{...field}
						error={error?.message}
						leftSectionWidth={50}
						type="tel"
						value={value}
						leftSection={
							<>
								<Menu withinPortal>
									<Menu.Target>
										<span className="flex cursor-pointer items-center gap-x-2 text-sm text-black">
											{COUNTRY_CODES[
												countryCode as keyof typeof COUNTRY_CODES
											] || "🏳️"}
											<span className="ml-1">+</span>
										</span>
									</Menu.Target>
									<Menu.Dropdown>
										{Object.keys(COUNTRY_CODES).map((country) => (
											<Menu.Item
												key={country}
												onClick={() => {
													setCountryCode(country);
													onChange(country);
												}}
											>
												{COUNTRY_CODES[country as keyof typeof COUNTRY_CODES]} +
												{country}
											</Menu.Item>
										))}
									</Menu.Dropdown>
								</Menu>
							</>
						}
						leftSectionProps={{
							style: {
								padding: 0,
								margin: 0,
								justifyContent: "start",
								paddingLeft: 14,
							},
						}}
						onChange={(event) => {
							const input = event.target.value;
							const digitsOnly = input.replace(/\D/g, "");
							onChange(digitsOnly);
							setCountryCode(digitsOnly.slice(0, 2));
						}}
					/>
				);
			}}
		/>
	);
}
