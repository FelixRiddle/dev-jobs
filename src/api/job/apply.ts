"use server";

import { multipartAxiosInstance } from "@/lib/axios/multipartAxios";

/**
 * Get all jobs
 */
export default async function applyJob(userData: FormData, jobUrl: string) {
	try {
		const instance = multipartAxiosInstance();
		
		const response = await instance.post(`/rest/job/apply/${jobUrl}`, userData);
		const data = response.data;
		
		return data;
	} catch(err: any) {
		
		// If the error has response, then it's still a valid status response
		if(err.response) {
			const data = err.response.data;
            return data;
        }
		
		// Other kind of error
		console.error(err);
        
        return undefined;
	}
}
