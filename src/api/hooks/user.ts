import { type UseQueryResult, useQuery } from "@tanstack/react-query";
import type { ApiRequestError } from "../../common/utils";
import type { ApiResponse } from "../../types/api";
import { type User, getUser } from "../userApi";

export const useGetUserDetail = (): UseQueryResult<
	ApiResponse<User>,
	ApiRequestError
> => {
	return useQuery({
		queryKey: ["userInfo"],
		queryFn: getUser,
	});
};
