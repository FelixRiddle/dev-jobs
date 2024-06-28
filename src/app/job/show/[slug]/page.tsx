"use server";

import axios from "axios";
import { redirect } from "next/navigation";

import Header from "@/components/header/Header";
import apiUrl from "@/lib/mappings/apiUrl";
import JobFrontend from "./JobFrontend";
import Job from "@/lib/types/Job";
import optionalUser from "@/lib/auth/optionalUser";

/**
 * Fetch job data
 */
export async function getJobDataByUrl(jobUrl: string): Promise<Job | undefined> {
	try {
		const url = apiUrl();
		
		const instance = axios.create({
			baseURL: url,
			headers: {
				"Content-Type": "application/json",
			},
		});
		
		const response: any = await instance.get(`/rest/job/get/url/${jobUrl}`);
		const data = response.data;
		
		if(data && data.job) {
			return data.job;
		} else {
			return undefined;
		}
	} catch(err) {
		console.error(err);
		
		return undefined;
	}
}

/**
 * Job 
 */
export default async function Page({
	params
}: {
	params: {
		slug: string;
	}
}) {
	const user = await optionalUser();
	const job = await getJobDataByUrl(params.slug);
	
	if(!job) {
		return redirect("/404");
	}
	
	return (
        <div>
			<Header
				title={job.title}
				tagline={job.company}
				user={user}
				bar={true}
			/>
			
			<main className="contenido-principal contenedor">
				<JobFrontend
					job={job}
				/>
			</main>
		</div>
    );
}
