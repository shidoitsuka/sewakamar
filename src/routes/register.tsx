import { createFileRoute } from "@tanstack/react-router";
import { Register } from "../pages/Register";

const RouteComponent: React.FC = () => {
	return <Register />;
};

export const Route = createFileRoute("/register")({
	component: RouteComponent,
});
