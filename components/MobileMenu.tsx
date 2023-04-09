interface MobileMenuProps {
	visible?: boolean;
}

function MobileMenu({ visible }: MobileMenuProps) {
	if (!visible) return null;

	return (
		<div className="absolute top-8 left-0 flex flex-col border-2 bg-black w-56 border-gray-800 py-5">
			<div className="flex flex-col gap-4">
				<div className="text-center text-white hover:underline px-3">Home</div>
				<div className="text-center text-white hover:underline px-3">Series</div>
				<div className="text-center text-white hover:underline px-3">Films</div>
				<div className="text-center text-white hover:underline px-3">New & Popular</div>
				<div className="text-center text-white hover:underline px-3">My List</div>
				<div className="text-center text-white hover:underline px-3">Browse by languages</div>
			</div>
		</div>
	);
}

export default MobileMenu;
