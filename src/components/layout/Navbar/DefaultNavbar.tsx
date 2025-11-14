import { Button } from "@mantine/core";
import { useNavigate } from "@tanstack/react-router";
import type { PropsWithChildren } from "react";
import { MenuProfile } from "./components/MenuProfile";
import { useAuthStore } from "../../../store/authStore";

export const DefaultNavbar: React.FC<PropsWithChildren> = () => {
	const navigate = useNavigate();
	const { isAuthenticated } = useAuthStore();

	return (
		<header className="border-b-primary fixed top-0 z-50 w-full border-b bg-white">
			<div className="container mx-auto flex items-center justify-between px-4 py-4">
				<div className="flex items-center space-x-2">
					<div className="bg-primary flex h-10 w-10 items-center justify-center rounded-lg">
						<span className="text-lg font-bold text-white">RR</span>
					</div>
					<span className="text-primary text-xl font-bold">Room Rent</span>
				</div>
				<nav className="hidden space-x-6 font-semibold md:flex">
					<a
						className="text-foreground hover:text-primary transition-colors"
						href="#routes"
					>
						Home
					</a>
					<a
						className="text-foreground hover:text-primary transition-colors"
						href="#services"
					>
						About
					</a>
					<a
						className="text-foreground hover:text-primary transition-colors"
						href="#why-us"
					>
						Contact
					</a>
				</nav>
				{isAuthenticated() ? (
					<MenuProfile />
				) : (
					<div className="flex items-center space-x-2">
						<Button
							variant="outline"
							onClick={() => navigate({ to: "/login" })}
						>
							Login
						</Button>
						<Button onClick={() => navigate({ to: "/register" })}>
							Register
						</Button>
					</div>
				)}
			</div>
		</header>
	);
};
