import { ApiRequestError } from "../common/utils";
import type { ApiResponse } from "../types/api";
import { apiThunks } from "./apiThunks";

export interface CountryResponse {
	id: number;
	name: string;
	path: string | null;
	description: string | null;
}

export const getCountry = async (): Promise<ApiResponse<CountryResponse>> => {
	const response = await apiThunks<ApiResponse<CountryResponse>>({
		method: "GET",
		url: "/api/v1/public/countries",
	});

	if (!response.success) {
		throw new ApiRequestError(response);
	}

	return response.data;
};
