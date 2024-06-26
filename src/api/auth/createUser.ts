"use server";

import createAxiosInstance from "@/lib/createAxiosInstance";
import apiUrl from "@/lib/mappings/apiUrl";
import Status from "@/lib/types/Status";
import axios from "axios";

export interface CreateUserResponse {
	messages: Array<Status>;
}

export interface RegisterUserData {
	name: string;
	email: string;
	password: string;
	confirmPassword: string;
}

/**
 * Create user
 */
export default async function createUser(userData: RegisterUserData): Promise<CreateUserResponse | undefined> {
	try {
		const instance = createAxiosInstance();
		
		const response = await instance.post(
			"/auth/create-account",
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
