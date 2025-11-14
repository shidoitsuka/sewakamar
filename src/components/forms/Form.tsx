/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
	type FieldValues,
	type Path,
	type UseFormReturn,
	FormProvider,
	useForm,
} from "react-hook-form";
import type { JSX, ReactNode } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import type { ZodType } from "zod";
import type { ZodTypeDef } from "zod/v3";

export interface FormApi<T extends FieldValues> {
	onSubmit: (event?: React.BaseSyntheticEvent) => void;
	getValue: <K extends Path<T>>(name: K) => any;
	setValue: <K extends Path<T>>(name: K, value: any) => void;
	methods: UseFormReturn<T>;
}

interface FormProps<T extends FieldValues> {
	defaultValues?: Partial<T>;
	onSubmit: (data: T) => void;
	children: (api: FormApi<T>) => ReactNode;
	className?: string;
	validator?: ZodType<T, ZodTypeDef, any>;
}

export function Form<T extends FieldValues>({
	defaultValues,
	onSubmit,
	children,
	className,
	validator,
}: FormProps<T>): JSX.Element {
	const methods = useForm<T>({
		defaultValues: defaultValues as any,
		...(validator && { resolver: zodResolver(validator) }),
	});

	const formApi: FormApi<T> = {
		onSubmit: (event?: React.BaseSyntheticEvent) => {
			event?.preventDefault();
			event?.stopPropagation();
			void methods.handleSubmit(onSubmit)(event);
		},
		getValue: methods.getValues,
		setValue: methods.setValue,
		methods,
	};

	const handleFormSubmit = (event?: React.BaseSyntheticEvent): void => {
		event?.preventDefault();
		event?.stopPropagation();
		void methods.handleSubmit(onSubmit)(event);
	};

	return (
		<FormProvider {...methods}>
			<form className={className} onSubmit={handleFormSubmit}>
				{children(formApi)}
			</form>
		</FormProvider>
	);
}
