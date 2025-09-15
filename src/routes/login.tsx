import { createFileRoute } from "@tanstack/react-router";

const RouteComponent: React.FC = () => {
	return <div>Hello "/login"!</div>;
};

export const Route = createFileRoute("/login")({
	component: RouteComponent,
});
