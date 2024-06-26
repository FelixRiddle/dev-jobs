"use client";

import createUser, { RegisterUserData } from "@/api/auth/createUser";
import apiUrl from "@/lib/mappings/apiUrl";
import Status from "@/lib/types/Status";
import { MutableRefObject, useRef, useState } from "react";

/**
 * Create account frontend
 */
export default function CreateAccountFrontend() {
	const url = apiUrl();
	const [statusMessages, setStatusMessages] = useState<Array<Status>>([]);
	const form = useRef<any>(null);
	
	/**
	 * Submit form
	 */
	async function submitForm(e: any) {
		e.preventDefault();
		
		if(!form.current) {
			console.error("Couldn't get the form!");
			return;
		}
		
		let userData: any = {};
		const formData = new FormData(form.current);
		formData.forEach((value, key) => userData[key] = value);
		
		const data = await createUser(userData);
		
		console.log(`Data: `, data);
	}
	
	return (
		<main className="contenedor">
			{/* Show status messages */}
			{statusMessages.map((message) => {
				return (
					<div className="error alerta">{message.message}</div>
				);
			})}
			
			<form className="default-form" ref={form}>
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
					<input type="submit" value="Create account" className="btn btn-azul" onClick={submitForm} />
				</div>
			</form>
		</main>
	);
}
