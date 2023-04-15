import { useCallback } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import useBillboard from "../hooks/useBillboard";
import PlayButton from "./PlayButton";
import useInfoModalStore from "../hooks/useInfoModalStore";

function Billboard() {
	const { data } = useBillboard();
	const { openModal } = useInfoModalStore();

	const handleOpenModal = useCallback(() => {
		openModal(data?.id);
	}, [openModal, data?.id]);

	return (
		<div className="relative h-[56.25vw]">
			<video
				className="h-[56.25vw] w-full object-cover brightness-[60%]"
				src={data?.videoUrl}
				poster={data?.thumbnailUrl}
				autoPlay
				muted
				loop
			/>

			<div className="absolute top-[30%] md:top-[40%] ml-4 md:ml-16">
				<p className="text-white text-xl md:text-5xl h-full w-[50%] lg:text-6xl font-bold drop-shadow-xl">
					{data?.title}
				</p>
				<div className="text-white text-[8px] md:text-lg mt-3 md:mt-8 w-[90%] md:w-[80%] lg:w-[50%] drop-shadow-xl">
					{data?.description}
				</div>

				<div className="flex fex-row items-center mt-3 md:mt-4 gap-3">
					<PlayButton movieId={data?.id} />

					<button
						className="bg-white/30 text-white rounded py-1 md:py-2 px-2 md:px-4 w-auto text-xs lg:text-lg font-semibold flex items-center mt-3 md:mt-4 hover:bg-white/20 transition"
						onClick={handleOpenModal}
					>
						<AiOutlineInfoCircle className="h-4 w-4 lg:h-5 lg:w-5 mr-1" />
						More Info
					</button>
				</div>
			</div>
		</div>
	);
}

export default Billboard;
