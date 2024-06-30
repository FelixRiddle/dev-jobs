"use server";

import createAxiosInstance from "@/lib/createAxiosInstance";

/**
 * Validate password
 */
export default async function validateToken(token: string) {
	try {
		const req = createAxiosInstance();
		
		const response = await req.post(`/rest/auth/create-password/validate/${token}`);
		
		const data = response.data;
		
		return data;
	} catch(err: any) {
		console.log(`Error`);
		
		// The error might have a response
		if(err.response) {
			return err.response.data;
		}
		
		console.error(err);
		
		return undefined;
	}
}
