import React from "react";
import { Header } from "../../components/common/Header";

/**
 * @typedef {Object} RegisterPageProps
 * @property {string} error
 * @property {boolean} loading
 * @property {(event: React.FormEvent<HTMLFormElement>) => void | Promise<void>} onSubmit
 */

/** @param {RegisterPageProps} props */
export const RegisterPage = ({ error, loading, onSubmit }) => {
	return (
		<div>
			<Header />
			<div className="user-page flex flex-col items-center justify-center pt-8">
				<h1 className="text-center font-bold">Enter Your Data</h1>

				<form className="input-form flex w-80 flex-col gap-3" onSubmit={onSubmit}>
					<input
						className="input rounded-[32px] border border-[#d0d6dc] bg-[#e6eaf0] p-4"
						type="text"
						name="username"
						placeholder="Username"
					/>

					<div className="estados flex w-full flex-row items-center justify-between">
						<label className="ml-5 font-semibold" htmlFor="estados">
							Estado:
						</label>

						<select
							className="input h-12 min-w-40 rounded-[3px] border border-[#d0d6dc] bg-[#e6eaf0] px-4 text-center"
							name="Estados"
							id="estados"
							defaultValue=""
						>
							<option value="" disabled>
								Selecione o estado
							</option>
						</select>
					</div>

					<input className="input rounded-[32px] border border-[#d0d6dc] bg-[#e6eaf0] p-4" type="text" name="email" placeholder="Email" />
					<input
						className="input rounded-[32px] border border-[#d0d6dc] bg-[#e6eaf0] p-4"
						type="password"
						name="password"
						placeholder="Password"
					/>
					<input
						className="input rounded-[32px] border border-[#d0d6dc] bg-[#e6eaf0] p-4"
						type="password"
						name="confirmPassword"
						placeholder="Confirm Password"
					/>

					{error && <p>{error}</p>}

					<button
						className="button cursor-pointer rounded-[32px] border border-[#d0d6dc] p-2.5 hover:bg-[#3f566b] disabled:cursor-not-allowed disabled:opacity-70"
						type="submit"
						disabled={loading}
					>
						{loading ? "Creating..." : "Register"}
					</button>
				</form>
			</div>
		</div>
	);
};
