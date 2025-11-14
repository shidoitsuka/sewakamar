import { createFileRoute, redirect } from "@tanstack/react-router";
import { Login } from "../pages/Login";
import { useAuthStore } from "../store/authStore";

const RouteComponent: React.FC = () => {
	return <Login />;
};

export const Route = createFileRoute("/login")({
	component: RouteComponent,
	beforeLoad: () => {
		const { isAuthenticated } = useAuthStore.getState();

		if (isAuthenticated()) {
			// eslint-disable-next-line @typescript-eslint/only-throw-error
			throw redirect({
				to: "/",
			});
		}
	},
});
