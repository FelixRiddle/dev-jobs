"use server";

import getAllJobs from "@/api/job/getAll";
import "../../../public/css/app.css";


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
