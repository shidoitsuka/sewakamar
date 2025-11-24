import { type UseQueryResult, useQuery } from "@tanstack/react-query";
import type { ApiRequestError } from "../../common/utils";
import type { ApiResponse } from "../../types/api";
import { getCountry } from "../countryApi";
import type { Country } from "../../types/country";

export const useGetCountryQuery = (): UseQueryResult<
	ApiResponse<Array<Country>>,
	ApiRequestError
> => {
	return useQuery({
		queryKey: ["countryList"],
		queryFn: getCountry,
	});
};
