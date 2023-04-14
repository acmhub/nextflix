import React from "react";
import { useRouter } from "next/router";
import { BsFillPlayFill } from "react-icons/bs";
import FavoriteButton from "./FavoriteButton";

interface MovieCardProps {
	data: Record<string, any>;
}

function MovieCard({ data }: MovieCardProps) {
	const router = useRouter();

	return (
		<div className="group bg-zinc-900 col-span relative h-[12vw]">
			{/**
			 * Not using next/image because the hostname for src is dynamic
			 * It has to be configured in next.config.js
			 */}
			<img
				src={data.thumbnailUrl}
				alt="Thumbnail"
				className="cursor-pointer object-cover transition shadow-xl rounded-md group-hover:opacity-90 sm:group-hover:opacity-0 delay-300 w-full h-[12vw]"
			/>
			<div
				className="absolute top-0 opacity-0 transition duration-300 z-10 invisible sm:visible delay-300 w-full scale-0 
                group-hover:scale-110 group-hover:-translate-y-[6vw] group-hover:translate-x-[2vw] group-hover:opacity-100"
			>
				<img
					src={data.thumbnailUrl}
					alt="Thumbnail"
					className="cursor-pointer object-cover transition duration shadow-xl rounded-t-md w-full h-[12vw]"
				/>
				<div className="z-10 bg-zinc-800 p-2 lg:p-4 absolute w-full transition shadow-md rounded-b-md">
					<div className="flex items-center gap-3">
						<div
							className="cursor-pointer w-6 h-6 lg:w-10 lg:h-10 bg-white rounded-full flex justify-center items-center transition hover:bg-neutral-300"
							onClick={() => router.push(`/watch/${data.id}`)}
						>
							<BsFillPlayFill className="text-black translate-x-0.5" size={30} />
						</div>
						<FavoriteButton movieId={data?.id} />
					</div>

					<p className="text-red-600 font-semibold mt-4">
						New <span className="text-white">{new Date().getFullYear()}</span>
					</p>

					<div className="flex items-center mt-4 gap-4">
						<p className="text-[10px] lg:text-sm">{data.duration}</p>
					</div>

					<div className="flex items-center mt-4 gap-4">
						<p className="text-[10px] lg:text-sm">{data.genre}</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default MovieCard;
