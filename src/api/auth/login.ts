"use server";

import createAxiosInstance from "@/lib/createAxiosInstance";
import apiUrl from "@/lib/mappings/apiUrl";
import Status from "@/lib/types/Status";
import axios from "axios";
import { cookies } from "next/headers";

export interface CreateUserResponse {
	messages: Array<Status>;
	token?: string;
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
		const instance = createAxiosInstance();
		
		const response = await instance.post(
			"/rest/auth/login",
			userData
		);
		
		const data = response.data;
		const token = data.token;
		if(token) {
			// Store token with nextjs utility
			cookies().set('token', token, {
				httpOnly: false,
				secure: process.env.NODE_ENV === 'production',
				maxAge: 60 * 60 * 24 * 7, // One week
				path: '/',
			});
		}
		
		return data;
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
