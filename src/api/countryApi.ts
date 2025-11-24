import { ApiRequestError } from "../common/utils";
import type { ApiResponse } from "../types/api";
import type { Country } from "../types/country";
import { apiThunks } from "./apiThunks";

export const getCountry = async (): Promise<ApiResponse<Array<Country>>> => {
	const response = await apiThunks<ApiResponse<Array<Country>>>({
		method: "GET",
		url: "/api/v1/public/countries",
	});

	if (!response.success) {
		throw new ApiRequestError(response);
	}

	return response.data;
};
