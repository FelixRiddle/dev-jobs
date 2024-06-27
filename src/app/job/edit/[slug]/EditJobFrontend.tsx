"use client";

import { MutableRefObject, useEffect, useRef, useState } from "react";

import apiUrl from "@/lib/mappings/apiUrl";
import Job from "@/lib/types/Job";
import { allSkills } from "@/lib/job/jobSkills";

/**
 * Edit job frontend
 */
export default function EditJobFrontend({
	job
}: {
	job: Job,
}) {
	const url = apiUrl();
	const [skills, setSkills] = useState(new Set(job.skills));
	const skillsElement: MutableRefObject<null | HTMLInputElement> = useRef(null);
	const everySkills = allSkills();
	
	/**
	 * Called on skill click
	 */
	function skillClick(e: any) {
		const skillName = e.target.textContent;
		
		if(e.target.classList.contains("activo")) {
			setSkills((skills) => {
				skills.delete(skillName);
				return skills;
			});
			
			e.target.classList.remove("activo");
		} else {
			setSkills((skills) => {
				skills.add(skillName);
				return skills;
			});
			
			e.target.classList.add("activo");
		}
		
		if(skillsElement.current) {
			const skillsArray: Array<string> = [...skills] as Array<string>;
			skillsElement.current.value = skillsArray.join(",");
		}
	}
	
	// Select skills
	useEffect(() => {
		const skillsElement: HTMLInputElement = document.querySelector("#skills") as HTMLInputElement;
		if(skillsElement) {
			skillsElement.value = job.skills.join(",");
		}
	}, []);
	
	return (
        <div className="contenedor">
			<form
				action={`${url}/rest/job/edit`}
				method="POST"
				className="default-form"
			>
				<h3>
					General information
				</h3>
				
				<div className="campo">
					<label htmlFor="title">Title</label>
					<input type="text" value={job.title} name="title" id="title" placeholder="Title" required />
				</div>
				
				<div className="campo">
					<label htmlFor="company">Company</label>
					<input type="text" value={job.company} name="company" id="company" placeholder="Company" required />
				</div>
				
				<div className="campo">
					<label htmlFor="location" className="location">Location</label>
					<input type="text" value={job.location} name="location" id="location" placeholder="Location" required />
				</div>
				
				<div className="campo">
					<label htmlFor="salary">Salary</label>
					<input type="text" value={job.salary} name="salary" id="salary" placeholder="Salary" required />
				</div>
				
				<div className="campo">
					<label htmlFor="contract">Contract</label>
					<select name="contract" id="contract" defaultValue={job.contract}>
						<option value="" disabled>- Select one -</option>
						<option value="full-time">Full-time</option>
						<option value="part-time">Part-time</option>
						<option value="freelance">Freelance</option>
						<option value="temporal">Temporal</option>
					</select>
				</div>
				
				<h3>Job description</h3>
				<div className="campo descripcion">
					<label htmlFor="description">Description</label>
					<input 
						type="hidden"
						value={job.description}
						name="description"
						id="description"
						placeholder="Description"
						required
					/>
					<trix-editor input="description"></trix-editor>
				</div>
				
				<h3>Knowledge</h3>
				<ul className="lista-conocimientos">
					{everySkills.map(skill => {
						const active = job.skills.includes(skill) ? "activo" : "";
						
						return (
							<li key={skill} className={active} onClick={skillClick}>
								{skill}
							</li>
						);
					})}
				</ul>
				
				<div className="campo centrar-horizontal">
					<input type="hidden" name="skills" id="skills" ref={skillsElement} />
					<input type="submit" value="Publish" className="btn btn-azul"/>
				</div>
			</form>
		</div>
	);
}
