"use client";

import { useRef, useState } from "react";
import useStatusMessages from "../useStatusMessages";

/**
 * Use form
 * 
 * Easily send requests to the backend with automatic form data fetching.
 * 
 * Also uses status messages to display information.
 * 
 * If an attempt to upload a file is made, the default behavior is to ignore the file
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
		formData.forEach((value, key) => {
			// Check if it's a file
			const isFile = value instanceof File;
			if(!isFile) {
                formObjectData[key] = value;
            } else {
				// Check if it's development
				if(process.env.NODE_ENV === "development") {
					console.warn("WARNING(useForm): An attempt to upload a file was made, this behavior is not supported.");
                    console.warn(`File: ${key} - ${value.name}`);
                }
			}
		});
		
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

