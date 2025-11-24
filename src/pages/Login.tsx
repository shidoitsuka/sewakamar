import { Button } from "@mantine/core";
import { FcGoogle } from "react-icons/fc";
import type React from "react";
import { Form } from "../components/forms/Form";
import { TextInput } from "../components/forms/TextInput";
import { useNavigate } from "@tanstack/react-router";
import z from "zod";
import { useMutation } from "@tanstack/react-query";
import { postUserLogin } from "../api/userApi";
import { useAuthStore } from "../store/authStore";
import { toast } from "sonner";

interface LoginForm {
	identifier: string;
	password: string;
}

export const Login: React.FC = () => {
	const navigate = useNavigate();

	const { setToken } = useAuthStore();

	const validator = z.object({
		identifier: z.string().min(1, "Required"),
		password: z.string().min(1, "Required"),
	});

	const { mutate } = useMutation({
		mutationFn: (data: LoginForm) => postUserLogin(data),
		onSuccess(data) {
			setToken(data.data.token);
			void navigate({ to: "/" });
			toast.success("Welcome!");
		},
		onError() {
			console.error("test");
		},
	});

	const submitFormData = (data: LoginForm): void => {
		mutate(data);
	};

	return (
		<div className="container mx-auto h-screen max-w-4xl py-14">
			<div className="flex h-full w-full items-center justify-center rounded-lg shadow-2xl">
				<div className="bg-primary h-full w-1/3 rounded-lg"></div>
				<div className="h-full w-2/3 rounded-r-lg bg-white">
					<div className="flex h-full w-full flex-col items-center justify-center space-y-4 px-4 py-4">
						{/* top */}
						<div className="border-muted w-full space-y-2 border-b pb-4 text-center">
							<div className="bg-primary mx-auto flex h-10 w-10 items-center justify-center rounded-lg">
								<span className="text-lg font-bold text-white">RR</span>
							</div>
							<h6 className="font-bold">Your one stop stay.</h6>
						</div>
						{/* !top */}
						<Form<LoginForm>
							className="w-full"
							defaultValues={{ identifier: "", password: "" }}
							validator={validator}
							onSubmit={submitFormData}
						>
							{({ onSubmit }) => (
								<div className="w-full space-y-2">
									<TextInput
										label="Username or Email"
										name="identifier"
										placeholder="Username"
										w="100%"
									/>
									<TextInput
										label="Password"
										name="password"
										placeholder="Password"
										w="100%"
									/>

									<div className="w-full space-y-2">
										<span className="text-muted text-sm">
											Forgot your password?{" "}
											<span className="text-primary font-semibold underline">
												Click here
											</span>
										</span>
									</div>
									<Button fullWidth type="button" onClick={onSubmit}>
										Login
									</Button>
								</div>
							)}
						</Form>
						<span className="text-sm">Don't have account yet?</span>
						<Button
							fullWidth
							variant="outline"
							onClick={() => navigate({ to: "/register" })}
						>
							Register
						</Button>
						<span className="text-muted text-sm">or continue with</span>
						<div>
							<div className="border-muted/30 rounded-full border p-3">
								<FcGoogle size={24} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
