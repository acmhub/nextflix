interface NavbarItemProps {
	label: string;
}

function NavbarItem({ label }: NavbarItemProps) {
	return <div className="text-white hover:text-gray-300 transition cursor-pointer">{label}</div>;
}

export default NavbarItem;
