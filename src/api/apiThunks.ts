/* eslint-disable @typescript-eslint/no-explicit-any */
import { toast } from "sonner";
import xior from "xior";
import { useAuthStore } from "../store/authStore";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface Config<_TResponse = any, TPayload = any, TParameters = any> {
	url: string;
	baseUrl?: string;
	method: "GET" | "POST" | "PUT" | "DELETE";
	params?: TParameters;
	payload?: TPayload;
}

interface ApiSuccess<T> {
	success: true;
	data: T;
	status: number;
}

export interface ApiError {
	success: false;
	error: any;
	status: number;
}

type ApiResponse<T> = ApiSuccess<T> | ApiError;

const apiClient = xior.create({
	baseURL: import.meta.env["VITE_APP_BASEURL"],
	withCredentials: true,
});

apiClient.interceptors.request.use((config) => {
	const token = useAuthStore.getState().token;

	console.log("token", token);

	if (token) {
		config.headers = config.headers || {};
		config.headers["Authorization"] = `Bearer ${token}`;
	}
	return config;
});

export const apiThunks = async <
	TResponse = any,
	TPayload = any,
	TParameters extends Record<string, any> | undefined = any,
>(
	config: Config<TResponse, TPayload, TParameters>
): Promise<ApiResponse<TResponse>> => {
	const { baseUrl, method, params, payload, url } = config;

	try {
		const response = (await apiClient.request({
			url: url,
			method,
			baseURL: baseUrl || import.meta.env["VITE_APP_BASEURL"],
			params: method === "GET" || method === "DELETE" ? params : undefined,
			data: method === "POST" || method === "PUT" ? payload : undefined,
		})) as { data: TResponse; status: number };

		return {
			success: true,
			data: response.data,
			status: response.status,
		};
	} catch (error: unknown) {
		const axiosError = error as {
			response?: { data?: unknown; status?: number };
			message?: string;
		};

		toast.error((axiosError.response?.data as { error: string }).error);

		return {
			success: false,
			error: axiosError.response?.data ?? axiosError.message ?? "Unknown error",
			status: axiosError.response?.status ?? 500,
		};
	}
};
