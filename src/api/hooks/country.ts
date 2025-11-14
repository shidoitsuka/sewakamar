import { type UseQueryResult, useQuery } from "@tanstack/react-query";
import type { ApiRequestError } from "../../common/utils";
import type { ApiResponse } from "../../types/api";
import { type CountryResponse, getCountry } from "../country";

export const useGetCountryQuery = (): UseQueryResult<
	ApiResponse<CountryResponse>,
	ApiRequestError
> => {
	return useQuery({
		queryKey: ["countryList"],
		queryFn: getCountry,
	});
};
