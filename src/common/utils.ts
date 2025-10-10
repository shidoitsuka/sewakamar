// eslint-disable-next-line unicorn/prevent-abbreviations
import type { ApiError } from "../api/apiThunks";

export const isProduction = import.meta.env.MODE === "production";

export const getAuthToken = (): string | null => {
	const token = localStorage.getItem("authToken");
	return token;
};

export class ApiRequestError extends Error {
	public constructor(public apiError: ApiError) {
		super(String(apiError.error) || "API request failed");
		this.name = "ApiRequestError";
	}
}
