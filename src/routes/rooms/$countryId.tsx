import { createFileRoute } from "@tanstack/react-router";
import { DefaultLayout } from "../../components/layout/DefaultLayout";
import { Rooms } from "../../pages/Rooms";

const RouteComponent: React.FC = () => {
	return (
		<DefaultLayout>
			<Rooms />
		</DefaultLayout>
	)
};

export const Route = createFileRoute("/rooms/$countryId")({
	component: RouteComponent,
});
