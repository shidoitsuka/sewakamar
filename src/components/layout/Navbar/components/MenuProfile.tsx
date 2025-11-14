import { Avatar, Button, Menu } from "@mantine/core";
import type { ReactNode } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { IoSettingsOutline, IoExitOutline } from "react-icons/io5";
import { useAuthStore } from "../../../../store/authStore";

export const MenuProfile = (): ReactNode => {
	const { clearAuth } = useAuthStore();
	const onLogout = (): void => {
		clearAuth();
	};

	return (
		<Menu width={200}>
			<Menu.Target>
				<Button variant="transparent">
					<Avatar className="mr-2" size="sm" /> Richard
				</Button>
			</Menu.Target>
			<Menu.Dropdown>
				<Menu.Label>Settings</Menu.Label>
				<Menu.Item leftSection={<AiOutlineUser />}>Profile</Menu.Item>
				<Menu.Item leftSection={<IoSettingsOutline />}>Settings</Menu.Item>
				<Menu.Item
					color="red"
					leftSection={<IoExitOutline />}
					onClick={onLogout}
				>
					Logout
				</Menu.Item>
			</Menu.Dropdown>
		</Menu>
	);
};
