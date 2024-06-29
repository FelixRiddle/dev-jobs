"use client";

import apiUrl from "@/lib/mappings/apiUrl";
import { PopulatedJob } from "@/lib/types/Job";
import Link from "next/link";

/**
 * Job frontend
 */
export default function JobFrontend({
	job,
}: {
	job: PopulatedJob,
}) {
	const url = apiUrl();
	
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
				<div className="contenido">
					<h2>Job description</h2>
					<div className="vacante-descripcion" dangerouslySetInnerHTML={{ __html: job.description ?? "", }}>
					</div>
					
					<Link href={`/job/edit/${job.url}`} className="btn btn-azul editar-btn">Edit job</Link>
				</div>
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
			
			<div className="contenedor datos-reclutador">
				<div className="enviar-datos">
					<h2>Contact Employer</h2>
					<p>Fill the formulary, upload your resume and we will contact you soon</p>
					
					<form
						method="POST"
						action={`${url}/job/${job.url}`}
						className="default-form"
						encType="multipart/form-data"
					>
						<div className="campo">
							<label htmlFor="name">Name</label>
							<input type="text" name="name" id="name" placeholder="Name" />
						</div>
						<div className="campo">
							<label htmlFor="email">E-Mail</label>
							<input type="email" name="email" id="email" placeholder="E-Mail" />
						</div>
						<div className="campo">
							<label htmlFor="resume">Upload resume(PDF)</label>
							<input type="file" name="resume" id="resume" placeholder="Resume" />
						</div>
						<div className="campo">
							<input type="submit" className="btn btn-verde" value="Send" />
						</div>
					</form>
				</div>
				
				<div className="info-reclutador">
					<h2>Employer information</h2>
					<p
						className={"user-navbar-element"}
						style={{ display: "inline" }}
					>{job.author.name}</p>
					{job.author.image && (
						<img src={`${url}/uploads/profile/${job.author.image}`} alt="Employer image" />
					)}
				</div>
			</div>
		</div>
	);
}

