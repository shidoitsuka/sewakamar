import { type UseQueryResult, useQuery } from "@tanstack/react-query";
import { type PropertyParameters, getProperty } from "../propertyApi";
import type { ApiRequestError } from "../../common/utils";
import type { ApiResponse } from "../../types/api";

export const useGetPropertyQuery = (
	parameters?: PropertyParameters
): UseQueryResult<ApiResponse<{ test: string }>, ApiRequestError> => {
	return useQuery({
		queryKey: ["propertyList"],
		queryFn: () => getProperty(parameters),
	});
};
