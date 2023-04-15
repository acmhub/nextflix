import React, { useCallback, useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import PlayButton from "./PlayButton";
import FavoriteButton from "./FavoriteButton";
import useInfoModalStore from "../hooks/useInfoModalStore";
import useMovie from "../hooks/useMovie";

interface InfoModalProps {
	visible?: boolean;
	onClose: any;
}

function InfoModal({ visible, onClose }: InfoModalProps) {
	const [isVisible, setIsVisible] = useState(!!visible);
	const { movieId } = useInfoModalStore();
	const { data = {} } = useMovie(movieId);

	useEffect(() => {
		setIsVisible(!!visible);
	}, [visible]);

	const handleClose = useCallback(() => {
		setIsVisible(false);
		setTimeout(() => {
			onClose();
		}, 300);
	}, [onClose]);

	if (!visible) return null;

	return (
		<div className="fixed inset-0 bg-black/80 flex justify-center items-center overflow-x-hidden overflow-y-auto duration-300 transition px-5 z-50">
			<div className="relative w-auto mx-auto max-w-3xl rounded-md overflow-hidden">
				<div
					className={`relative flex-auto bg-zinc-900 drop-shadow-md transform duration-300 ${
						isVisible ? "scale-100" : "scale-0"
					}`}
				>
					<div className="relative h-96">
						<video
							src={data?.videoUrl}
							poster={data?.thumbnailUrl}
							className="h-full w-full brightness-[60%] object-cover"
							autoPlay
							muted
							loop
						/>

						<AiOutlineClose
							className="absolute top-3 right-3 h-8 w-8 bg-black/70 text-white rounded-full p-1.5 cursor-pointer"
							onClick={handleClose}
						/>

						<div className="absolute bottom-[10%] left-10">
							<p className="text-3xl md:text-4xl h-full lg:text-5xl font-bold mb-8">{data?.title}</p>

							<div className="flex items-center gap-4">
								<PlayButton movieId={data?.movieId} />
								<FavoriteButton movieId={data?.movieId} />
							</div>
						</div>
					</div>

					<div className="px-12 py-8">
						<p className="text-red-600 font-semibold text-lg">
							New <span className="text-white">{new Date().getFullYear()}</span>
						</p>
						<p>{data?.duration}</p>
						<p>{data?.genre}</p>
						<p>{data?.description}</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default InfoModal;
