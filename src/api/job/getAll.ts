import apiUrl from "@/lib/mappings/apiUrl";
import axios from "axios";

/**
 * Get all jobs
 */
export default async function getAllJobs() {
	try {
		const url = apiUrl();
		
		const instance = axios.create({
			baseURL: url,
			headers: {
				"Content-Type": "application/json",
			},
		});
		
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
