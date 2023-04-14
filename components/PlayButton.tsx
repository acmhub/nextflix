import React from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { useRouter } from "next/router";

interface PlayButtonProps {
	movieId: string;
}

function PlayButton({ movieId }: PlayButtonProps) {
	const router = useRouter();

	return (
		<button
			className="bg-white text-black rounded py-1 md:py-2 px-2 md:px-4 w-auto text-xs lg:text-lg font-semibold flex items-center mt-3 md:mt-4 hover:bg-neutral-300 transition"
			onClick={() => router.push(`/watch/${movieId}`)}
		>
			<BsFillPlayFill className="h-4 w-4 lg:h-5 lg:w-5 mr-1" />
			Play
		</button>
	);
}

export default PlayButton;
