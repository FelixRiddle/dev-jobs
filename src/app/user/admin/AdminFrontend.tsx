"use client";

import deleteJob from "@/api/job/delete";
import Job from "@/lib/types/Job";
import mongoose from "mongoose";
import { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

/**
 * Admin frontend
 */
export default function AdminFrontend({
	jobs: userJobs = []
}: {
	jobs: Job[]
}) {
	const [jobs, setJobs] = useState(userJobs);
	
	/**
	 * Called when delete job is clicked
	 */
	async function onDeleteJob(event: any, id: mongoose.Types.ObjectId, index: number) {
		// Delete via axios
		withReactContent(Swal).fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!",
			cancelButtonText: "Don't delete",
		}).then(async (result) => {
			if (result.isConfirmed) {
				// Send request
				const data = await deleteJob(id.toString());
				
				// Get message info
				const firstMessage = data.messages[0];
				const message = firstMessage.message;
				if(!firstMessage.error) {
					withReactContent(Swal).fire({
						title: "Deleted!",
						text: "The job post has been deleted.",
						icon: "success"
					});
					
					// Remove job by index
					setJobs((jobs) => {
						return jobs.filter((_, i) => i !== index);
					});
				} else {
					withReactContent(Swal).fire({
						title: "Error",
						text: `The job post couldn't be delete. Reason: ${message}`,
						icon: "error"
					});
				}
			}
		});
	}
	
	return (
		<main className="lista-vacantes">
			<h2>Navigation</h2>
			<div className="botones separador">
				<a href={`/user/profile`} className="btn btn-azul">Edit profile</a>
				<a href={`/job/create`} className="btn btn-verde">Create a job</a>
			</div>
			
			<h2>Your job posts</h2>
			
			<div className={"panel-administracion"}>
				{jobs.length > 0 && (
					jobs.map((job, index) => {
						return (
							<div key={job.url} className="vacante">
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
									<a href="#" className="btn btn-rojo" onClick={(event) => onDeleteJob(event, job._id, index)}>Delete</a>
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
