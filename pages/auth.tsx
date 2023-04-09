import { useCallback, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import axios from "axios";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import Input from "../components/Input";

function Auth() {
	const router = useRouter();
	const [email, setEmail] = useState("");
	const [name, setName] = useState("");
	const [password, setPassword] = useState("");
	const [variant, setVariant] = useState("login");

	const toggleVariant = useCallback(() => {
		setVariant((currentVariant) => (currentVariant === "login" ? "register" : "login"));
	}, [variant]);

	const login = useCallback(async () => {
		try {
			await signIn("credentials", {
				email,
				password,
				redirect: false,
				callbackUrl: "/",
			});

			router.push("/profiles");
		} catch (error) {
			console.log(error);
		}
	}, [email, password, router]);

	const register = useCallback(async () => {
		try {
			await axios.post("/api/register", {
				email,
				name,
				password,
			});

			login();
		} catch (error) {
			console.log(error);
		}
	}, [email, name, password, login]);

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
								<Input
									label="Username"
									value={name}
									onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
									id="name"
								/>
							)}
							<Input
								label="Email"
								type="email"
								value={email}
								onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
								id="email"
							/>
							<Input
								label="Password"
								type="password"
								value={password}
								onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
								id="password"
							/>
						</div>

						<button
							className="bg-red-600 py-3 rounded-md w-full mt-10 hover:bg-red-700 transition"
							onClick={variant === "login" ? login : register}
						>
							{variant === "login" ? "Login" : "Sign up"}
						</button>

						<div className="flex flex-row items-center gap-4 mt-8 justify-center">
							<div
								className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition"
								onClick={() => signIn("google", { callbackUrl: "/profiles" })}
							>
								<FcGoogle size={30} />
							</div>
							<div
								className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition"
								onClick={() => signIn("github", { callbackUrl: "/profiles" })}
							>
								<FaGithub size={30} />
							</div>
						</div>

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
