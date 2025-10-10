import { type UseQueryResult, useQuery } from "@tanstack/react-query";
import { getProperty } from "../property";
import type { ApiRequestError } from "../../common/utils";
import type { ApiResponse } from "../../types/api";

export const useGetPropertyQuery = (): UseQueryResult<
	ApiResponse<{ test: string }>,
	ApiRequestError
> => {
	return useQuery({
		queryKey: ["propertyList"],
		queryFn: getProperty,
	});
};
