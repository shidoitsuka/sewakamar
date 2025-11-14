import { createFileRoute, redirect } from "@tanstack/react-router";
import { Register } from "../pages/Register";
import { useAuthStore } from "../store/authStore";

const RouteComponent: React.FC = () => {
	return <Register />;
};

export const Route = createFileRoute("/register")({
	component: RouteComponent,
	beforeLoad: ({ location }) => {
		const { isAuthenticated } = useAuthStore.getState();

		if (isAuthenticated()) {
			// eslint-disable-next-line @typescript-eslint/only-throw-error
			throw redirect({
				to: "/",
				search: {
					redirect: location.href,
				},
			});
		}
	},
});
