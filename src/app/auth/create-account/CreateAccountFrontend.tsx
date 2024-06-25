"use client";

import apiUrl from "@/lib/mappings/apiUrl";

/**
 * Create account frontend
 */
export default function CreateAccountFrontend() {
	const url = apiUrl();
	
	return (
		<main className="contenedor">
			<form action={`${url}/auth/create-account`} method="POST" className="default-form">
				<div className="campo">
					<label htmlFor="name">Name</label>
					<input type="text" name="name" id="name" placeholder="Nombre" />
				</div>
				<div className="campo">
					<label htmlFor="email">E-Mail</label>
					<input type="email" name="email" id="email" placeholder="Email" />
				</div>
				<div className="campo">
					<label htmlFor="password">Password</label>
					<input type="password" name="password" id="password" placeholder="Password" />
				</div>
				<div className="campo">
					<label htmlFor="confirmPassword">Confirm password</label>
					<input type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm password" />
				</div>
				
				{/* Actions */}
				<div className="campo acciones">
					<a href={`${url}/auth/login`}>Go back to log in</a>
				</div>
				
				<div className="campo">
					<input type="submit" value="Create account" className="btn btn-azul" />
				</div>
			</form>
		</main>
	);
}
