import { NextPageContext } from "next";
import { getSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
import useCurrentUser from "../hooks/useCurrentUser";

function Profiles() {
	const router = useRouter();
	const { data: user } = useCurrentUser();

	return (
		<div className="h-full flex items-center justify-center">
			<div className="flex flex-col">
				<h1 className="text-3xl md:text-6xl text-white text-center">Who is watching?</h1>

				<div className="flex items-center justify-center gap-8 mt-10">
					<div onClick={() => router.push("/")}>
						<div className="group flex-row w-44 mx-auto">
							<div className="relative h-44 w-44 rounded-md flex items-center justify-center border-2 border-transparent transition group-hover:border-white group-hover:cursor-pointer overflow-hidden">
								<Image src="/images/default-red.png" alt="Profile Image" fill />
							</div>
							<div className="text-gray-400 text-center group-hover:text-white mt-4 transition">
								{user?.name}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export async function getServerSideProps(context: NextPageContext) {
	const session = await getSession(context);

	if (!session) {
		return {
			redirect: {
				destination: "/auth",
				permanent: false,
			},
		};
	}

	return {
		props: {},
	};
}

export default Profiles;
