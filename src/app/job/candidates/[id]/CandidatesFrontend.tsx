"use client";

import apiUrl from "@/lib/mappings/apiUrl";
import Job from "@/lib/types/Job";

/**
 * Candidates frontend
 */
export default function CandidatesFrontend({
	job
}: {
	job: Job
}) {
	
	return (
		<div className="lista-candidatos">
			<h2>Candidates list</h2>
			
			{job && (
				<div>
					{job.candidates.length === 0 && (
						<div>
							<p>There are no job candidates</p>
						</div>
					) || (
						job.candidates.map((candidate) => {
							return (
								<div className="candidato">
									<div className="caja">
										<p className="etiqueta">Name:</p>
										<p className="nombre">{candidate.name}</p>
									</div>
									<div className="caja">
										<p className="etiqueta">Email:</p>
										<div className="nombre">{candidate.email}</div>
									</div>
									
									<div className="caja">
										<a
											href={`${apiUrl()}/uploads/resume/${candidate.resume}`}
											className="btn btn-verde"
										>Resume</a>
									</div>
								</div>
							);
						})
					)}
				</div>
			)}
		</div>
	);
}
