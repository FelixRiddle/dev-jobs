"use client";

import apiUrl from "@/lib/mappings/apiUrl"

/**
 * Login frontend
 */
export default function LoginFrontend() {
	const url = apiUrl();
	
	return (
		<div>
			<form action="/login" method="POST" className="default-form">
				<div className="campo">
					<label htmlFor="email">E-Mail</label>
					<input type="email" name="email" id="email" placeholder="E-Mail" required />
				</div>
				<div className="campo">
					<label htmlFor="password">Password</label>
					<input type="password" name="password" id="password" placeholder="Password" required />
				</div>
				
				<div className="campo actions">
					<a href={`${url}/auth/create-account`}>Create an account</a>
					<a href={`${url}/auth/reset-password`}>Forgot password</a>
				</div>
				<div className="campo">
					<input type="submit" value="Login" className="btn btn-azul" />
				</div>
			</form>
		</div>
	);
}
