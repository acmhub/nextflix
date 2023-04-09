import React from "react";

interface InputProps {
	id: string;
	value: string;
	label: string;
	onChange: any;
	type?: string;
}

function Input({ id, value, label, onChange, type }: InputProps) {
	return (
		<div className="relative">
			<input
				id={id}
				name={id}
				value={value}
				type={type}
				className="block rounded-md px-6 pt-6 pb-1 w-full text-md text-white bg-neutral-700 appearance-none focus:outline-none focus:ring-0 peer"
				onChange={onChange}
				placeholder=" "
			/>
			<label
				className="
                    absolute top-4 left-6
                    text-md text-zinc-400 
                    -translate-y-3 scale-75 
                    peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
                    peer-focus:scale-75
                    peer-focus:-translate-y-3
                    transform origin-[0] duration-150 z-10
                "
				htmlFor={id}
			>
				{label}
			</label>
		</div>
	);
}

export default Input;
