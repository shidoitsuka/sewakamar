import { createFileRoute } from "@tanstack/react-router";
import { DefaultLayout } from "../../components/layout/DefaultLayout";
import { Room } from "../../pages/Room";

const RouteComponent: React.FC = () => {
	return (
		<DefaultLayout>
			<Room />
		</DefaultLayout>
	);
};

export const Route = createFileRoute("/room/$id")({
	component: RouteComponent,
});
