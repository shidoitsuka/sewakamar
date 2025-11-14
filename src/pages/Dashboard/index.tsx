import { useEffect, useState, type ReactNode } from "react";
import { FiHome, FiSettings, FiFileText } from "react-icons/fi";
import { Tabs } from "@mantine/core";
import { useNavigate, useSearch } from "@tanstack/react-router";
import { useGetUserDetail } from "../../api/hooks/user";

export const Dashboard = (): ReactNode => {
	const navigate = useNavigate();
	const searchParameters = useSearch({ strict: false });
	const [activeTab, setActiveTab] = useState<string>("");

	const { data } = useGetUserDetail();

	console.log("data", data);

	const menus: Array<{ key: string; title: string; icon: ReactNode }> = [
		{
			key: "overview",
			title: "Overview",
			icon: <FiHome />,
		},
		{
			key: "settings",
			title: "Settings",
			icon: <FiSettings />,
		},
		{
			key: "history",
			title: "Order History",
			icon: <FiFileText />,
		},
	];

	const handleTabChange = (value: string | null): void => {
		if (value) {
			void navigate({ to: `/dashboard`, search: { tab: value } });
			setActiveTab(value);
		}
	};

	useEffect(() => {
		const parameters = searchParameters as Record<string, string | undefined>;
		console.log(parameters);

		if (!parameters["tab"]) {
			void navigate({ to: `/dashboard`, search: { tab: menus[0]?.key } });
			setActiveTab(menus[0]?.key as string);
		} else {
			setActiveTab(parameters["tab"]);
		}
	}, [searchParameters]);

	return (
		<div className="container mx-auto grid grid-cols-5 gap-4 py-24">
			<div className="rounded-lg py-2 shadow">
				<Tabs
					display="block"
					orientation="vertical"
					value={activeTab}
					onChange={handleTabChange}
				>
					<Tabs.List>
						{menus.map((menu) => (
							<Tabs.Tab key={menu.key} value={menu.key}>
								<div className="flex w-full items-center gap-2">
									{menu.icon}
									<span>{menu.title}</span>
								</div>
							</Tabs.Tab>
						))}
					</Tabs.List>
				</Tabs>
			</div>
			<div className="col-span-4 rounded-lg py-2 shadow">
				<Tabs value={activeTab} onChange={handleTabChange}>
					{menus.map((menu) => (
						<Tabs.Panel key={menu.key} value={menu.key}>
							{menu.title} tab content
						</Tabs.Panel>
					))}
				</Tabs>
			</div>
		</div>
	);
};
