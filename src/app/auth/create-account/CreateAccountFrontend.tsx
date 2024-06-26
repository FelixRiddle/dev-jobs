"use client";

import createUser from "@/api/auth/createUser";
import apiUrl from "@/lib/mappings/apiUrl";
import Status from "@/lib/types/Status";
import { useEffect, useRef, useState } from "react";
import { useInterval } from "react-interval-hook";

/**
 * Create account frontend
 */
export default function CreateAccountFrontend() {
	const url = apiUrl();
	const [statusMessages, setStatusMessages] = useState<Array<Status>>([]);
	const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
	const form = useRef<any>(null);
	const { start, stop } = useInterval(
		() => {
			if(statusMessages.length > 0) {
				setStatusMessages((messages) => {
					return messages.slice(1);
				});
			}
		},
		2000, {
			autoStart: false,
            onFinish: () => {
                console.log('Callback when timer is stopped');
            },
		}
	);
	
	/**
	 * Submit form
	 */
	async function submitForm(e: any) {
		e.preventDefault();
		
		console.log(`Submit form`);
		
		if(!form.current) {
			console.error("Couldn't get the form!");
			return;
		}
		
		// Convert form to object
		let userData: any = {};
		const formData = new FormData(form.current);
		formData.forEach((value, key) => userData[key] = value);
		
		// Create user
		const data = await createUser(userData);
		
		// Update status messages
		if(data) {
			setStatusMessages(data.messages);
			console.log(`Set messages: `, data);
			setFormSubmitted(true);
		}
	}
	
	useEffect(() => {
		if(statusMessages.length === 0) {
			stop();
		}
	}, [statusMessages]);
	
	useEffect(() => {
		if(!formSubmitted) {
			return;
		}
		
		console.log(`Start clear interval`);
		setFormSubmitted(false);
		start();
		
	}, [formSubmitted]);
	
	return (
		<div>
			{/* Show status messages */}
			<div className="alertas">
				{statusMessages.map((message) => {
					return (
						<div className="error alerta" key={message.message}>{message.message}</div>
					);
				})}
			</div>
			
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
		</div>
	);
}
