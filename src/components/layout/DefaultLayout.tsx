import type { PropsWithChildren } from "react";
import { DefaultNavbar } from "./DefaultNavbar";
import { DefaultFooter } from "./DefaultFooter";

export const DefaultLayout: React.FC<PropsWithChildren> = ({ children }) => {
	return (
		<>
			<div className="flex min-h-screen flex-col">
				<DefaultNavbar />
				<main className="grow">{children}</main>
				<DefaultFooter />
			</div>
		</>
	);
};
