import { NextPageContext } from "next";
import { getSession, signOut } from "next-auth/react";
import useCurrentUser from "../hooks/useCurrentUser";

export default function Home() {
	const { data: user } = useCurrentUser();

	return (
		<div>
			<p>logged in as {user?.name}</p>
			<button className="h-10 w-full bg-white text-black" onClick={() => signOut()}>
				sign out
			</button>
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
