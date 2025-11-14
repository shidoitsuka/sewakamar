import {
	TextInput as MantineTextInput,
	type TextInputProps,
} from "@mantine/core";
import type { JSX } from "react";
import {
	Controller,
	useFormContext,
	type FieldValues,
	type Path,
} from "react-hook-form";

interface ControlledTextInputProps<T extends FieldValues>
	extends Omit<TextInputProps, "name"> {
	name: Path<T>;
}

export function TextInput<T extends FieldValues>({
	name,
	...props
}: ControlledTextInputProps<T>): JSX.Element {
	const { control } = useFormContext<T>();

	return (
		<Controller
			control={control}
			name={name}
			render={({ field, fieldState: { error } }) => (
				<MantineTextInput {...field} {...props} error={error?.message} />
			)}
		/>
	);
}
