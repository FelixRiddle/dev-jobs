"use client";

import createUser from "@/api/auth/createUser";
import apiUrl from "@/lib/mappings/apiUrl";
import Status from "@/lib/types/Status";
import { useEffect, useRef, useState } from "react";

/**
 * Create account frontend
 */
export default function CreateAccountFrontend() {
	const url = apiUrl();
	const [statusMessages, setStatusMessages] = useState<Array<Status>>([]);
	const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
	const [deleteMessagesInterval, setDeleteMessagesInterval] = useState<NodeJS.Timeout | undefined>(undefined);
	const form = useRef<any>(null);
	const alerts = useRef<any>(null);
	const parentElement = useRef<any>(null);
	
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
		if(!formSubmitted) {
			return;
		}
		
		console.log(`Enabling clear interval`);
		
		const alertsElement = alerts.current;
		if(!alertsElement) {
			console.error("Couldn't get the alerts element!");
			return;
		}
		
		if(!alertsElement.children) {
			console.error("Couldn't get the alerts children elements!");
			return;
		}
		
		// Delete a message every 2 seconds
		const interval = setInterval(() => {
			if(statusMessages.length > 0) {
				setStatusMessages((messages) => {
					return messages.slice(1);
				});
			} else {
				setDeleteMessagesInterval((interval) => {
					console.log(`Forcefully clear interval`);
					clearInterval(interval);
					return undefined;
				});
			}
		}, 2000);
		
		setDeleteMessagesInterval(interval);
		setFormSubmitted(false);
		
        // //	Clearing the interval
        // return () => {
		// 	console.log(`Clear interval`);
		// 	clearInterval(interval);
		// };
	}, [formSubmitted]);
	
	return (
		<div ref={parentElement}>
			{/* Show status messages */}
			<div className="alertas" ref={alerts}>
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
