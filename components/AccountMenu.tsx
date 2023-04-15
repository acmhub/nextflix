import { signOut } from "next-auth/react";
import Image from "next/image";
import useCurrentUser from "../hooks/useCurrentUser";

interface AccountMenuProps {
	visible?: boolean;
}

function AccountMenu({ visible }: AccountMenuProps) {
	if (!visible) return null;
	const { data } = useCurrentUser();

	return (
		<div className="bg-black w-56 absolute top-14 right-0 py-5 flex-col border-2 border-gray-800 flex">
			<div className="flex flex-col gap-3">
				<div className="px-3 group/item flex flex-row gap-3 items-center w-full">
					<div className="relative w-8 h-8">
						<Image
							src="/images/default-red.png"
							alt="Profile image"
							className="object-contain rounded-md"
							fill
						/>
					</div>
					<p className="text-white text-sm group-hover/item:underline">{data?.name}</p>
				</div>

				<hr className="bg-gray-600 border-0 h-px my-4" />

				<div className="text-center text-white text-sm hover:underline px-3" onClick={() => signOut()}>
					Sign out
				</div>
			</div>
		</div>
	);
}

export default AccountMenu;
