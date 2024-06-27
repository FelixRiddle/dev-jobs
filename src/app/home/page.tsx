"use server";

import axios from "axios";

import apiUrl from "@/lib/mappings/apiUrl";
import "../../../public/css/app.css";

/**
 * Get all jobs
 */
export async function getAllJobs() {
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

/**
 * 
 * @returns 
 */
export default async function Page() {
    const jobs = await getAllJobs();
	
    return (
        <div className="lista-vacantes">
            {/* Section of job postings */}
            <h2>List of job postings</h2>
            
			{jobs.map((job: any) => {
				return (
					<div className="vacante">
						<div className="caja">
							<h3>{job.company}</h3>
							<p className="puesto">{job.title}</p>
						</div>
						
						<div className="caja">
							<p className="etiqueta">
								Location
							</p>
							<p className="nombre">
								{job.location}
							</p>
						</div>
						
						<div className="caja">
							<p className="etiqueta">
								Contract
							</p>
							<p className="nombre contrato">
								{job.contract}
							</p>
						</div>
						
						<div className="caja centrar-vertical">
							<a href={`/job/show/${job.url}`} className="btn btn-verde">
								More information
							</a>
						</div>
					</div>
				);
			})}
        </div>
    );
}
