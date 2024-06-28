"use client";

import { useRef, useState } from "react";
import useStatusMessages from "../useStatusMessages";

/**
 * Use form
 * 
 * Easily send requests to the backend with automatic form data fetching.
 * 
 * Also uses status messages to display information.
 */
export default function useForm({
	callback,
}: {
	callback: (formObjectData: any) => any;
}) {
	const [externalState, setExternalState] = useState<{
        [key: string]: any;
    }>({})
	const form = useRef<any>(null);
	const {
		statusMessages,
		setStatusMessages,
		setFormSubmitted
	} = useStatusMessages();
	
	/**
	 * Submit form
	 */
	async function submitForm(e: any) {
		e.preventDefault();
		
		if(!form.current) {
			return;
		}
		
		// Convert form to object
		let formObjectData: any = {
			// Insert external state first
			...externalState,
		};
		const formData = new FormData(form.current);
		formData.forEach((value, key) => formObjectData[key] = value);
		
		// Call api function
		const data = await callback(formObjectData);
		
		// Update status messages
		if(data) {
			const messages = data.messages;
			if(messages && Array.isArray(messages)) {
				setStatusMessages(messages);
			}
		}
		
		setFormSubmitted(true);
	}
	
	return {
		formRef: form,
		statusMessages,
		submitForm,
		externalState,
		setExternalState,
	};
}

