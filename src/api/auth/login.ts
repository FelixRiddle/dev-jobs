"use server";

import apiUrl from "@/lib/mappings/apiUrl";
import Status from "@/lib/types/Status";
import axios from "axios";

export interface CreateUserResponse {
	messages: Array<Status>;
}

export interface LoginUserData {
	email: string;
	password: string;
}

/**
 * Create user
 */
export default async function loginUser(userData: LoginUserData): Promise<CreateUserResponse | undefined> {
	try {
		const url = apiUrl();
		
		const instance = axios.create({
			baseURL: url,
			headers: {
				'Content-Type': 'application/json'
			}
		});
		
		const response = await instance.post(
			"/rest/auth/login",
			userData
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
