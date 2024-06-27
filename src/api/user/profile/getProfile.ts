"use server";

import apiUrl from "@/lib/mappings/apiUrl";
import Status from "@/lib/types/Status";
import User from "@/lib/types/User";
import axios from "axios";

interface UserProfileResponse {
	user?: User;
	messages: Array<Status>;
}

/**
 * Get user profile
 */
export default async function getUserProfile(): Promise<UserProfileResponse | undefined> {
	try {
		const url = apiUrl();
		
		const instance = axios.create({
			baseURL: url,
			headers: {
				'Content-Type': 'application/json'
			}
		});
		
		const response = await instance.get(
			"/rest/user/profile"
		);
		
		return response.data;
	} catch(err: any) {
		
		// If the error has response, then it's still a valid status response
		if(err.response) {
			const data = err.response.data;
            return data;
        }
		
		// Other kind of error
		console.log(`Couldn't create user, error: `);
		console.error(err);
        
        return undefined;
	}
}
