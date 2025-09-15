import { LuMap, LuPhone, LuMail } from "react-icons/lu";

export const DefaultFooter: React.FC = () => {
	return (
		<footer className="bg-primary py-12 text-gray-100">
			<div className="container mx-auto px-4">
				<div className="grid gap-8 md:grid-cols-4">
					<div>
						<div className="mb-4 flex items-center space-x-2">
							<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white">
								<span className="text-primary text-lg font-bold">RR</span>
							</div>
							<span className="text-xl font-bold">Room Rent</span>
						</div>
						<p className="text-primary-foreground/80 mb-4">
							Your one stop room renting platform since forever.
						</p>
					</div>
					<div>
						<h3 className="mb-4 text-lg font-bold">Menu</h3>
						<ul className="text-primary-foreground/80 space-y-2">
							<li>
								<a
									className="hover:text-accent transition-colors"
									href="#routes"
								>
									Home
								</a>
							</li>
							<li>
								<a
									className="hover:text-accent transition-colors"
									href="#services"
								>
									About
								</a>
							</li>
							<li>
								<a
									className="hover:text-accent transition-colors"
									href="#why-us"
								>
									Why Us
								</a>
							</li>
							<li>
								<a
									className="hover:text-accent transition-colors"
									href="#gallery"
								>
									Countries
								</a>
							</li>
							<li>
								<a
									className="hover:text-accent transition-colors"
									href="#contact"
								>
									Contact
								</a>
							</li>
						</ul>
					</div>
					<div>
						<h3 className="mb-4 text-lg font-bold">Reach Us</h3>
						<ul className="text-primary-foreground/80 space-y-2">
							<li className="flex items-center gap-2">
								<LuPhone className="h-4 w-4" />
								<span>+49 12-312-722</span>
							</li>
							<li className="flex items-center gap-2">
								<LuMail className="h-4 w-4" />
								<span>info@roomrent.com</span>
							</li>
							<li className="flex items-start gap-2">
								<LuMap className="mt-1 h-4 w-4" />
								<span>
									blablablablablablablablabla
									<br />
									blablabla
								</span>
							</li>
						</ul>
					</div>
					<div>
						<h3 className="mb-4 text-lg font-bold">Payment Method</h3>
						<ul className="text-primary-foreground/80 space-y-2">
							<li>Bank Transfer</li>
							<li>Cryptocurrency</li>
						</ul>
					</div>
				</div>
				<div className="mt-8 border-t border-white/20 pt-8 text-center">
					<p>
						&copy; {new Date().getFullYear()} Room Rent. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};
