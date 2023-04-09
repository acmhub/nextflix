import { useCallback, useState } from "react";
import Image from "next/image";
import Input from "../components/Input";

function Auth() {
	const [variant, setVariant] = useState("login");

	const toggleVariant = useCallback(() => {
		setVariant((currentVariant) => (currentVariant === "login" ? "register" : "login"));
	}, [variant]);

	return (
		<div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
			<div className="bg-black w-full h-full lg:bg-opacity-50">
				<nav className="px-12 pb-5 pt-20">
					<div className="relative h-12">
						<Image src="/images/logo.png" alt="Logo" className="object-contain" fill />
					</div>
				</nav>

				<div className="flex justify-center">
					<div className="bg-black/80 text-white p-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
						<h1 className="text-4xl mb-8 font-semibold">{variant === "login" ? "Sign in" : "Register"}</h1>

						<div className="flex flex-col gap-4">
							{variant === "register" && (
								<Input label="Username" value="" onChange={() => {}} id="name" />
							)}
							<Input label="Email" type="email" value="" onChange={() => {}} id="email" />
							<Input label="Password" type="password" value="" onChange={() => {}} id="password" />
						</div>

						<button className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition">
							{variant === "login" ? "Login" : "Sign up"}
						</button>

						<p className="text-neutral-500 mt-12">
							{variant === "login" ? "First time using Nextflix?" : "Already have an account?"}
							<span className="text-white ml-1 hover:underline cursor-pointer" onClick={toggleVariant}>
								{variant === "login" ? "Create an account." : "Log in."}
							</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Auth;
