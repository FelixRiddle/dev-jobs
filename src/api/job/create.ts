"use server";

import createAxiosInstance from "@/lib/createAxiosInstance";

export interface CreateJobData {
	title: string;
	company?: string;
	location: string;
	salary: number;
	contract?: string;
	description?: string;
	skills: Array<string>;
}

/**
 * Get all jobs
 */
export default async function createJob(jobData: CreateJobData) {
	try {
		const instance = createAxiosInstance();
		
		console.log(`Create job with data: `, jobData);
		
		const response = await instance.post(`/rest/job/create`, {
			...jobData
		});
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
