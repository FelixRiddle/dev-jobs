"use server";

import createAxiosInstance from "@/lib/createAxiosInstance";

/**
 * Send reset password email
 */
export default async function sendResetPasswordEmail(formData: FormData) {
	try {
		const req = createAxiosInstance();
		
		const response = await req.post("/rest/auth/reset-password", formData);
		
		const data = response.data;
		
		return data;
	} catch(err: any) {
		console.log(`Error`);
		
		if(err.response) {
			return err.response.data;
		}
		
		console.error(err);
		
		return undefined;
	}
}
