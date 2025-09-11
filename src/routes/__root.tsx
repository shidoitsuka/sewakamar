import type * as React from "react";
import { HeadContent, Outlet, createRootRoute } from "@tanstack/react-router";

const RootComponent: React.FC = () => {
	return (
		<>
			<HeadContent />
			<Outlet />
		</>
	);
};

export const Route = createRootRoute({
	component: RootComponent,
	head: () => ({
		meta: [
			{
				title: "Room Rent - cheap way to stay overnight",
			},
			{
				name: "description",
				content: "Get your cheap room now!",
			},
			{
				property: "og:title",
				content: "Room Rent - cheap way to stay overnight",
			},
			{
				property: "og:description",
				content: "Room Rent - cheap way to stay overnight",
			},
		],
	}),
});
