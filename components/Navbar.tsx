import { useCallback, useState, useEffect } from "react";
import Image from "next/image";
import { BsChevronDown, BsSearch, BsBell } from "react-icons/bs";
import NavbarItem from "./NavbarItem";
import MobileMenu from "./MobileMenu";
import AccountMenu from "./AccountMenu";

const TOP_OFFSET = 66;

function Navbar() {
	const [showMobileMenu, setShowMobileMenu] = useState(false);
	const [showAccountMenu, setShowAccountMenu] = useState(false);
	const [showBackground, setShowBackground] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY >= TOP_OFFSET) {
				setShowBackground(true);
			} else {
				setShowBackground(false);
			}
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const toggleMobileMenu = useCallback(() => {
		setShowMobileMenu((current) => !current);
	}, []);

	const toggleAccountMenu = useCallback(() => {
		setShowAccountMenu((current) => !current);
	}, []);

	return (
		<nav className="fixed w-full z-40">
			<div
				className={`${
					showBackground ? "bg-zinc-900/90" : "bg-transparent"
				} flex flex-row items-center transition duration-500 px-4 md:px-16 py-6`}
			>
				<div className="relative h-4 lg:h-7 w-16">
					<Image src="/images/logo.png" alt="Logo" className="object-contain" fill />
				</div>

				<div className="hidden lg:flex flex-row ml-8 gap-7">
					<NavbarItem label="Home" />
					<NavbarItem label="Series" />
					<NavbarItem label="Films" />
					<NavbarItem label="New & Popular" />
					<NavbarItem label="My List" />
					<NavbarItem label="Browse by languages" />
				</div>

				<div
					className="relative lg:hidden flex flex-row items-center gap-2 ml-8 text-white cursor-pointer"
					onClick={toggleMobileMenu}
				>
					<p className="text-sm">Browse</p>
					<BsChevronDown className={`transition ${showMobileMenu && "rotate-180"}`} />
					<MobileMenu visible={showMobileMenu} />
				</div>

				<div className="flex flex-row ml-auto gap-7 items-center">
					<div className="text-gray-200 hover:text-gray-300 transition cursor-pointer">
						<BsSearch />
					</div>
					<div className="text-gray-200 hover:text-gray-300 transition cursor-pointer">
						<BsBell />
					</div>

					<div
						className="relative flex flex-row items-center gap-2 cursor-pointer"
						onClick={toggleAccountMenu}
					>
						<div className="relative w-6 h-6 lg:w-10 lg:h-10">
							<Image
								src="/images/default-red.png"
								alt="Profile image"
								className="object-contain rounded-md"
								fill
							/>
						</div>
						<BsChevronDown className={`transition ${showAccountMenu && "rotate-180"}`} />
						<AccountMenu visible={showAccountMenu} />
					</div>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
