import { ApiRequestError } from "../common/utils";
import type { ApiResponse } from "../types/api";
import { apiThunks } from "./apiThunks";

export interface PropertyParameters {
	country?: string;
}

export const getProperty = async (
	parameters?: PropertyParameters
): Promise<ApiResponse<{ test: string }>> => {
	console.log("parameters", parameters);

	const response = await apiThunks<ApiResponse<{ test: string }>>({
		method: "GET",
		url: "/api/v1/public/properties",
		params: parameters,
	});

	if (!response.success) {
		throw new ApiRequestError(response);
	}

	return response.data;
};
