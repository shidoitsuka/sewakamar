import { LuMap, LuPhone, LuMail } from "react-icons/lu";

export const DefaultFooter: React.FC = () => {
	return (
		<footer className="bg-primary text-gray-100 py-12">
			<div className="container mx-auto px-4">
				<div className="grid md:grid-cols-4 gap-8">
					<div>
						<div className="flex items-center space-x-2 mb-4">
							<div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
								<span className="text-accent-foreground font-bold text-lg">
									GT
								</span>
							</div>
							<span className="text-xl font-bold">Gesit Trans</span>
						</div>
						<p className="text-primary-foreground/80 mb-4">
							Melayani perjalanan nyaman dan aman ke seluruh Indonesia sejak
							2003. Kepercayaan Anda adalah prioritas utama kami.
						</p>
					</div>
					<div>
						<h3 className="font-bold text-lg mb-4">Menu</h3>
						<ul className="space-y-2 text-primary-foreground/80">
							<li>
								<a
									className="hover:text-accent transition-colors"
									href="#routes"
								>
									Rute & Harga
								</a>
							</li>
							<li>
								<a
									className="hover:text-accent transition-colors"
									href="#services"
								>
									Layanan
								</a>
							</li>
							<li>
								<a
									className="hover:text-accent transition-colors"
									href="#why-us"
								>
									Mengapa Kami
								</a>
							</li>
							<li>
								<a
									className="hover:text-accent transition-colors"
									href="#gallery"
								>
									Galeri
								</a>
							</li>
							<li>
								<a
									className="hover:text-accent transition-colors"
									href="#contact"
								>
									Kontak
								</a>
							</li>
						</ul>
					</div>
					<div>
						<h3 className="font-bold text-lg mb-4">Kontak Info</h3>
						<ul className="space-y-2 text-primary-foreground/80">
							<li className="flex items-center gap-2">
								<LuPhone className="w-4 h-4" />
								<span>+62 812-3456-7890</span>
							</li>
							<li className="flex items-center gap-2">
								<LuMail className="w-4 h-4" />
								<span>info@indonesiabus.com</span>
							</li>
							<li className="flex items-start gap-2">
								<LuMap className="w-4 h-4 mt-1" />
								<span>
									Jl. Raya Jakarta No. 123
									<br />
									Jakarta Pusat, DKI Jakarta
								</span>
							</li>
						</ul>
					</div>
					<div>
						<h3 className="font-bold text-lg mb-4">Jam Operasional</h3>
						<ul className="space-y-2 text-primary-foreground/80">
							<li>Senin - Jumat: 06:00 - 22:00</li>
							<li>Sabtu - Minggu: 05:00 - 23:00</li>
						</ul>
					</div>
				</div>
				<div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/80">
					<p>
						&copy; {new Date().getFullYear()} Gesit Trans. Semua hak cipta
						dilindungi.
					</p>
				</div>
			</div>
		</footer>
	);
};
