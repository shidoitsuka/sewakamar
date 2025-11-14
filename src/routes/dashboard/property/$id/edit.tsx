import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";

function RouteComponent(): ReactNode {
	return <div>Hello "/dashboard/property/$id/edit"!</div>;
}

export const Route = createFileRoute("/dashboard/property/$id/edit")({
	component: RouteComponent,
});
