"use server";

import createAxiosInstance from "@/lib/createAxiosInstance";
import Status from "@/lib/types/Status";
import { cookies } from "next/headers";

interface NormalResponse {
	messages: Array<Status>;
}

/**
 * Get user profile
 */
export default async function logout(): Promise<NormalResponse | undefined> {
	try {
		const instance = createAxiosInstance();
		
		// Clear cookie
		cookies().delete("token");
		
		const response = await instance.get("/rest/user/logout");
		
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
