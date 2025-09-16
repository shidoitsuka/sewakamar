import { apiThunks } from "./apiThunks";

export const testApi = async (): Promise<void> => {
	const response = await apiThunks<{ test: string }>({
		method: "GET",
		url: "/todos",
	});
	if (response.success) {
		const a = response.data.test;
		console.log(a);
	}
};
