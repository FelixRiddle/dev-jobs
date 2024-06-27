"use client";

import { useEffect, useState } from "react";
import Status from "../types/Status";
import { useInterval } from "react-interval-hook";

/**
 * Status messages
 */
export default function useStatusMessages() {
	const [statusMessages, setStatusMessages] = useState<Array<Status>>([]);
	const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
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
                // console.log('Callback when timer is stopped');
				console.log(`Status messages cleared: `, statusMessages);
            },
		}
	);
	
	
	useEffect(() => {
		if(statusMessages.length === 0) {
			stop();
		}
	}, [statusMessages]);
	
	useEffect(() => {
		if(!formSubmitted) {
			return;
		}
		
		setFormSubmitted(false);
		start();
		
	}, [formSubmitted]);
	
	return {
		statusMessages,
		setStatusMessages,
		setFormSubmitted
	};
}
