import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { DefaultLayout } from "../../components/layout/DefaultLayout";
import { Dashboard } from "../../pages/Dashboard";

function RouteComponent(): ReactNode {
	return (
		<DefaultLayout>
			<Dashboard />
		</DefaultLayout>
	);
}

export const Route = createFileRoute("/dashboard/")({
	component: RouteComponent,
});
