"use client";

import { useState } from "react";

import createJob from "@/api/job/create";
import useForm from "@/lib/hooks/form/useForm";
import { allSkills } from "@/lib/job/jobSkills";

/**
 * Create
 * 
 * @returns 
 */
export default function Page() {
	const [skills, setSkills] = useState(new Set());
	const {
		formRef,
		statusMessages,
		submitForm,
		setExternalState,
	} = useForm({
		callback: createJob,
	});
	
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
		
		setExternalState({
			skills: [...skills],
		});
	}
	
    return (
        <div className="contenedor">
			<div className="alertas">
				{statusMessages && statusMessages.map((message) => {
					return (
						<div className="error alerta" key={message.message}>{message.message}</div>
					);
				})}
			</div>
			
            <form
				ref={formRef}
				className="default-form"
			>
                <h3>
                    General information
                </h3>
                
                <div className="campo">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" id="title" placeholder="Title" required />
                </div>
                
                <div className="campo">
                    <label htmlFor="company">Company</label>
                    <input type="text" name="company" id="company" placeholder="Company" required />
                </div>
                
                <div className="campo">
                    <label htmlFor="location" className="location">Location</label>
                    <input type="text" name="location" id="location" placeholder="Location" required />
                </div>
                
                <div className="campo">
                    <label htmlFor="salary">Salary</label>
                    <input type="text" name="salary" id="salary" placeholder="Salary" required />
                </div>
                
                <div className="campo">
                    <label htmlFor="contract">Contract</label>
                    <select name="contract" id="contract" defaultValue="">
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
						name="description"
						id="description"
						placeholder="Description"
						required
					/>
					<trix-editor input="description"></trix-editor>
				</div>
				
				<h3>Knowledge</h3>
				<ul className="lista-conocimientos">
					{allSkills().map(skill => {
						return (
                            <li key={skill} onClick={skillClick}>
								{skill}
                            </li>
                        );
					})}
				</ul>
				
				<div className="campo centrar-horizontal">
					<input type="submit" value="Publish" className="btn btn-azul" onClick={submitForm} />
				</div>
            </form>
        </div>
    );
}
