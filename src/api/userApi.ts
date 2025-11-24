import { ApiRequestError } from "../common/utils";
import type { ApiResponse } from "../types/api";
import { apiThunks } from "./apiThunks";

export interface UserLoginPayload {
	identifier: string;
	password: string;
}

export interface UserLoginResponse {
	token: string;
}

export interface User {
	id: number;
	username: string;
	email: string;
	phone: string;
	bank_id: number;
	bank_number: string;
	is_tenant: boolean;
}

export const postUserLogin = async (
	payload: UserLoginPayload
): Promise<ApiResponse<UserLoginResponse>> => {
	const response = await apiThunks<ApiResponse<UserLoginResponse>>({
		method: "POST",
		url: "/api/v1/user/auth/login",
		payload,
	});

	if (!response.success) {
		throw new ApiRequestError(response);
	}

	return response.data;
};

export const getUser = async (): Promise<ApiResponse<User>> => {
	const response = await apiThunks<ApiResponse<User>>({
		method: "GET",
		url: "/api/v1/user/profile",
	});

	if (!response.success) {
		throw new ApiRequestError(response);
	}

	return response.data;
};
