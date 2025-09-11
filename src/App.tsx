import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RouterProvider } from "@tanstack/react-router";
import type { FunctionComponent } from "./common/types";
import type { TanstackRouter } from "./main";
import { TanStackRouterDevelopmentTools } from "./components/utils/development-tools/TanStackRouterDevelopmentTools";
import { createTheme, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";

const queryClient = new QueryClient();

type AppProps = { router: TanstackRouter };

const theme = createTheme({
	colors: {
		primary: [
			"#fff0e5",
			"#fce1d3",
			"#f1c1aa",
			"#e7a07d",
			"#de8357",
			"#d86d38",
			"#d76830",
			"#bf5723",
			"#ab4c1c",
			"#963f13",
		],
	},
	primaryColor: "primary",
});

const App = ({ router }: AppProps): FunctionComponent => {
	return (
		<QueryClientProvider client={queryClient}>
			<MantineProvider theme={theme}>
				<RouterProvider router={router} />
			</MantineProvider>
			<TanStackRouterDevelopmentTools
				initialIsOpen={false}
				position="bottom-left"
				router={router}
			/>
			<ReactQueryDevtools initialIsOpen={false} position="bottom" />
		</QueryClientProvider>
	);
};

export default App;
