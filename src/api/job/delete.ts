"use server";

import createAxiosInstance from "@/lib/createAxiosInstance";

/**
 * Get all jobs
 */
export default async function deleteJob(id: string) {
	try {
		const instance = createAxiosInstance();
		
		const response = await instance.delete(`/rest/job/delete/${id}`);
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
