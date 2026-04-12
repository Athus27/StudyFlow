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
			<div className="user-page">
				<h1 className="text-center">Enter Your Data</h1>

				<form className="input-form" onSubmit={onSubmit}>
					<input
						className="input"
						type="text"
						name="username"
						placeholder="Username"
					/>
					<input
						className="input"
						type="text"
						name="email"
						placeholder="Email"
					/>
					<input
						className="input"
						type="password"
						name="password"
						placeholder="Password"
					/>
					<input
						className="input"
						type="password"
						name="confirmPassword"
						placeholder="Confirm Password"
					/>

					{error && <p>{error}</p>}

					<button className="button" type="submit" disabled={loading}>
						{loading ? "Creating..." : "Register"}
					</button>
				</form>
			</div>
		</div>
	);
};
