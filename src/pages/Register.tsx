import { Button, TextInput } from "@mantine/core";
import { FcGoogle } from "react-icons/fc";
import type React from "react";
import { PhoneInput } from "../components/forms/PhoneInput";
import { Form } from "../components/forms/Form";
import { useNavigate } from "@tanstack/react-router";

interface RegisterForm {
	fullName: string;
	password: string;
}

export const Register: React.FC = () => {
	const navigate = useNavigate();

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
						<Form<RegisterForm>
							className="w-full"
							defaultValues={{}}
							onSubmit={console.log}
						>
							{() => (
								<>
									<div className="grid w-full grid-cols-2 gap-2">
										<TextInput
											className="col-span-2"
											label="Full Name"
											placeholder="Name"
											w="100%"
										/>
										<TextInput
											label="Password"
											placeholder="Password"
											type="password"
											w="100%"
										/>
										<TextInput
											label="Repeat Password"
											placeholder="Password"
											type="password"
											w="100%"
										/>
										<TextInput
											label="Email"
											placeholder="mail@domain.com"
											w="100%"
										/>
										<PhoneInput
											label="Phone Number"
											name="phone"
											placeholder="Phone"
											type="number"
											w="100%"
										/>
									</div>
									<Button fullWidth className="mt-4" type="submit">
										Register
									</Button>
								</>
							)}
						</Form>
						<span className="text-sm">Already registered?</span>
						<Button
							fullWidth
							variant="outline"
							onClick={() => navigate({ to: "/login" })}
						>
							Login
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
