import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Facebook, Instagram } from "lucide-react";

export default function Footer() {
	return (
		<footer className="bg-gray-900 text-white">
			<div className="container mx-auto px-4 py-8 md:py-12 ">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 lg:w-[95%] lg:mx-auto">
					{/* Contact Details */}
					<div>
						<h3 className="text-xl font-bold mb-4">Contact Us</h3>
						<ul className="space-y-2">
							<li className="flex items-start">
								<MapPin className="w-5 h-5 mr-2 mt-1 flex-shrink-0" />
								<span>
									Sarbaguna Investment
									<br />
									Tangal - 12, Lalitpur
								</span>
							</li>
							<li className="flex items-center">
								<Phone className="w-5 h-5 mr-2 flex-shrink-0" />
								<a href="tel:+9779709043043">+977 9709043043</a>
							</li>
							<li className="flex items-center">
								<Mail className="w-5 h-5 mr-2 flex-shrink-0" />
								<a href="mailto:business@sarbaguna.com">
									business@sarbaguna.com
								</a>
							</li>
							<li className="flex items-center">
								<Mail className="w-5 h-5 mr-2 flex-shrink-0" />
								<a href="mailto:support@sarbaguna.com">
									support@sarbaguna.com
								</a>
							</li>
						</ul>
					</div>

					{/* Quick Links */}
					<div>
						<h3 className="text-xl font-bold mb-4">Quick Links</h3>
						<ul className="space-y-2">
							<li>
								<Link href="/" className="hover:underline">
									Home
								</Link>
							</li>
							<li>
								<Link href="/about" className="hover:underline">
									About Us
								</Link>
							</li>
							<li>
								<Link
									href="/services"
									className="hover:underline"
								>
									Services
								</Link>
							</li>
							<li>
								<Link
									href="/contact"
									className="hover:underline"
								>
									Contact
								</Link>
							</li>
						</ul>
					</div>

					{/* Payment Partners */}
					<div>
						<h3 className="text-xl font-bold mb-4">
							Payment Partners
						</h3>
						<div className="flex space-x-4">
							<Image
								src="/esewa.png"
								alt="eSewa"
								width={100}
								height={40}
							/>
							<Image
								src="/khalti.png"
								alt="Khalti"
								width={80}
								height={40}
							/>
						</div>
					</div>

					{/* Social Links */}
					<div>
						<h3 className="text-xl font-bold mb-4">Follow Us</h3>
						<div className="flex space-x-4">
							<a
								href="https://facebook.com/sarbaguna"
								target="_blank"
								rel="noopener noreferrer"
								className="hover:text-blue-400"
							>
								<Facebook className="w-6 h-6" />
								<span className="sr-only">Facebook</span>
							</a>
							<a
								href="https://instagram.com/sarbaguna"
								target="_blank"
								rel="noopener noreferrer"
								className="hover:text-pink-400"
							>
								<Instagram className="w-6 h-6" />
								<span className="sr-only">Instagram</span>
							</a>
							<a
								href="https://tiktok.com/@sarbaguna"
								target="_blank"
								rel="noopener noreferrer"
								className="hover:text-gray-400"
							>
								<svg
									className="w-6 h-6"
									viewBox="0 0 24 24"
									fill="currentColor"
								>
									<path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
								</svg>
								<span className="sr-only">TikTok</span>
							</a>
						</div>
					</div>
					<div>
						<div className="">
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.9404530046!2d85.31816731503721!3d27.69011798280097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19b3a5a2f5f7%3A0x8d0b8e0c8f5e5b0a!2sTangal%2C%20Lalitpur%2044600!5e0!3m2!1sen!2snp!4v1637304123456!5m2!1sen!2snp"
								width="100%"
								height="200"
								style={{ border: 0 }}
								allowFullScreen={false}
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"
								title="Google Map of Sarbaguna Investment"
							></iframe>
						</div>
					</div>
				</div>

				{/* Google Map */}

				{/* Copyright */}
				<div className="mt-8 text-center text-sm">
					<p>
						&copy; {new Date().getFullYear()} Sarbaguna Investment.
						All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}
