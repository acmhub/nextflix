import { NextPageContext } from "next";
import { getSession } from "next-auth/react";
import Navbar from "../components/Navbar";
import Billboard from "../components/Billboard";
import MovieList from "../components/MovieList";
import useMovieList from "../hooks/useMovieList";

export default function Home() {
	const { data: movies = [] } = useMovieList();

	return (
		<div>
			<Navbar />
			<Billboard />

			<div className="pb-40">
				<MovieList data={movies} title="Trending now" />
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
