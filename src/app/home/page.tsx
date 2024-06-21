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
		
		const response = await instance.get("/job/get_all");
		
		const data = response.data;
		
		return data;
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
            
            <div className="vacante">
                <div className="caja">
                    <h3>Facebook</h3>
                    <p className="puesto">React developer</p>
                </div>
                
                <div className="caja">
                    <p className="etiqueta">
                        Location
                    </p>
                    <p className="nombre">
                        Remote
                    </p>
                </div>
                
                <div className="caja">
                    <p className="etiqueta">
                        Contract
                    </p>
                    <p className="nombre contrato">
                        Full-time
                    </p>
                </div>
                
                <div className="caja centrar-vertical">
                    <a href="#" className="btn btn-verde">
                        More information
                    </a>
                </div>
            </div>
        </div>
    );
}
