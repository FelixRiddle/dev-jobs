"use client";

import Job from "@/lib/types/Job";

/**
 * Job frontend
 */
export default function JobFrontend({
	job,
}: {
	job: Job,
}) {
	
	return (
		<div>
			<div className="contenido-superior vacante contenedor">
				<div className="caja">
					<p className="empresa">Company</p>
					<p className="nombre">{job.company}</p>
				</div>
				<div className="caja">
					<p className="etiqueta">Location</p>
					<p className="nombre">{job.location}</p>
				</div>
				<div className="caja">
					<p className="etiqueta">Contract</p>
					<p className="nombre">{job.contract}</p>
				</div>
				<div className="caja">
					<p className="etiqueta">Salary</p>
					<p className="nombre">${job.salary}</p>
				</div>
			</div>
			
			<div className="vacante-contenedor contenedor">
				<main className="contenido">
					<h2>Job description</h2>
					<div className="vacante-descripcion" dangerouslySetInnerHTML={{ __html: job.description ?? "", }}>
					</div>
				</main>
				<aside className="sidebar">
					<h2>Required knowledge</h2>
					<ul className="skills">
						{job.skills.map((skill) => {
							return (
                                <li key={skill}>
                                    {skill}
                                </li>
                            );
						})}
					</ul>
				</aside>
			</div>
			
		</div>
	);
}
