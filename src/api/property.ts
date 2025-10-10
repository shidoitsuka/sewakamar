import { ApiRequestError } from "../common/utils";
import type { ApiResponse } from "../types/api";
import { apiThunks } from "./apiThunks";

export const getProperty = async (): Promise<ApiResponse<{ test: string }>> => {
	const response = await apiThunks<ApiResponse<{ test: string }>>({
		method: "GET",
		url: "/api/property/list",
	});

	if (!response.success) {
		throw new ApiRequestError(response);
	}

	return response.data;
};
