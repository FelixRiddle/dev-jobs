"use server";

import { multipartAxiosInstance } from "@/lib/axios/multipartAxios";
import { NormalResponse } from "../../logout";

/**
 * Get user profile
 */
export default async function uploadPfp(formData: FormData): Promise<NormalResponse | undefined> {
	try {
		const instance = multipartAxiosInstance();
		
		const response = await instance.post(
			"/rest/user/profile/edit/pfp",
			formData,
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
