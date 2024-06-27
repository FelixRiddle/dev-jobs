"use client";

import apiUrl from "@/lib/mappings/apiUrl";
import Job from "@/lib/types/Job";

/**
 * Admin frontend
 */
export default function AdminFrontend({
	jobs
}: {
	jobs: Job[]
}) {
	const url = apiUrl();
	
	return (
		<main className="lista-vacantes">
			<h2>Navigation</h2>
			<div className="botones separador">
				<a href={`${url}/user/profile/edit`} className="btn btn-azul">Edit profile</a>
				<a href={`${url}/job/create`} className="btn btn-verde">Create a job</a>
			</div>
			
			<h2>Your job posts</h2>
			
			<div>
				{jobs.length > 0 && (
					jobs.map((job) => {
						return (
							<div key={job.url} className="vacante panel-administracion">
								<div className="caja">
									<h3>
										{job.company}
									</h3>
									<p className="puesto">
										{job.title}
									</p>
								</div>
								<div className="centrar-vertical caja">
									<a href={`/candidates/${job._id}`} className="btn btn-amarillo">Candidates</a>
								</div>
								<div className="centrar-vertical caja">
									<a href={`/job/edit/${job.url}`} className="btn btn-verde">Edit</a>
								</div>
								<div className="centrar-vertical caja">
									<a href="#" data-delete={job._id} className="btn btn-rojo">Delete</a>
								</div>
							</div>
						);
					})
				) || (
					<p>You have no job postings.</p>
				)}
			</div>
		</main>
	);
}
