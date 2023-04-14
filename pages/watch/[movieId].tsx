import React from "react";
import { useRouter } from "next/router";
import useMovie from "../../hooks/useMovie";
import { IoMdArrowBack } from "react-icons/io";
import Link from "next/link";

function Watch() {
	const router = useRouter();
	const { movieId } = router.query;
	const { data } = useMovie(movieId as string);

	return (
		<div className="bg-black h-screen w-screen">
			<nav className="fixed w-full p-4 z-10 flex items-center gap-4 bg-black/70">
				<Link href="/">
					<IoMdArrowBack size={20} />
				</Link>
				<p className="font-bold">
					<span className="font-light pr-2">Watching:</span>
					{data?.title}
				</p>
			</nav>

			<video className="h-full w-full" src={data?.videoUrl} poster={data?.thumbnailUrl} autoPlay controls />
		</div>
	);
}

export default Watch;
