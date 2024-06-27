import createAxiosInstance from "@/lib/createAxiosInstance";

/**
 * Get all jobs
 */
export default async function getAllJobs() {
	try {
		const instance = createAxiosInstance();
		
		const response = await instance.get("/rest/job/get_all");
		
		// Data
		const data = response.data;
		if(!data) {
			return [];
		}
		
		// Jobs
		const jobs = data.jobs;
		if(!jobs) {
			return [];
		}
		
		return jobs;
	} catch(err) {
		console.error(err);
		
		return [];
	}
}
