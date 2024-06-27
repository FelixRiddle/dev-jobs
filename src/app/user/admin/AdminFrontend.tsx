"use client";

import apiUrl from "@/lib/mappings/apiUrl";

/**
 * Admin frontend
 */
export default function AdminFrontend() {
	const url = apiUrl();
	
	return (
		<main className="lista-vacantes">
			<h2>Navigation</h2>
			<div className="botones separador">
				<a href={`${url}/user/profile/edit`} className="btn btn-azul">Edit profile</a>
				<a href={`${url}/job/create`} className="btn btn-verde">Create a job</a>
			</div>
		</main>
	);
}
