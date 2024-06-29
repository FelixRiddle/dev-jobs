"use client";

import editUserProfile from "@/api/user/profile/edit/editProfile";
import uploadPfp from "@/api/user/profile/edit/uploadPfp";
import useForm from "@/lib/hooks/form/useForm";
import User from "@/lib/types/User";
import { useRef } from "react";

/**
 * Profile frontend
 */
export default function ProfileFrontend({
	user
}: {
	user: User
}) {
	const imageForm = useRef(null);
	const {
		formRef,
		statusMessages,
        submitForm
	} = useForm({
		callback: editUserProfile,
	});
	
	// FIXME: Upload an image
	// I tried everything I could but nothing makes this work.
	// Wasted like 3 hours.
	/**
	 * Upload profile picture
	 */
	async function submitUploadPfp(e: any) {
		e.preventDefault();
		
		console.log(`Submit upload pfp`);
		
		const form = imageForm.current;
		if(!form) {
			return;
		}
		
		const formData = new FormData(form);
		const response = await uploadPfp(formData);
		
		console.log(`Response: `, response);
	}
	
	/**
	 * Submit both
	 */
	async function submitBoth(e: any) {
		await submitForm(e);
		await submitUploadPfp(e);
	}
	
	return (
		<div>
			<div className="alertas">
				{statusMessages && statusMessages.map((message) => {
					return (
						<div className="error alerta" key={message.message}>{message.message}</div>
					);
				})}
			</div>
			
			<form className="default-form" ref={formRef} method="POST" encType="multipart/form-data">
				<div className="campo">
					<label htmlFor="name">Nombre</label>
					<input type="text" name="name" id="name" placeholder="Name" defaultValue={user.name} required />
				</div>
				<div className="campo">
					<label htmlFor="email">Email</label>
					<input type="email" name="email" id="email" placeholder="E-Mail" defaultValue={user.email} required />
				</div>
				<div className="campo">
					<label htmlFor="password">Password</label>
					<input type="password" name="password" id="password" placeholder="Password" />
				</div>
				
				<div className="campo">
					<input
						type="submit"
						value="Update"
						className="btn btn-azul"
						onClick={submitForm}
					/>
				</div>
			</form>
			
			{/* <form className="default-form" method="POST" encType="multipart/form-data" ref={imageForm}>
				<div className="campo">
					<label htmlFor="pfp">Profile photo</label>
					<input type="file" name="pfp" id="pfp" placeholder="Profile photo" />
				</div>
				
				<div className="campo">
					<input
						type="submit"
						value="Update"
						className="btn btn-azul"
						// onClick={submitBoth}
						onClick={submitUploadPfp}
						// onClick={submitForm}
					/>
				</div>
			</form> */}
		</div>
	);
}
