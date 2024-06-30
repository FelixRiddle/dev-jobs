"use server";

import createAxiosInstance from "@/lib/createAxiosInstance";

/**
 * Get job by id
 */
export default async function jobById(jobId: string) {
    try {
		const instance = createAxiosInstance();
		
		const response = await instance.get(`/rest/job/candidates/${jobId}`);
		
		const data = response.data;
        
        return data;
    } catch (error: any) {
        console.error(`Error fetching job: ${error}`);
		
		if(error.response) {
			return error.data;
		}
		
        return null;
    }
}
