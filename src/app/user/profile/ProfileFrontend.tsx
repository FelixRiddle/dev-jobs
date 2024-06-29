"use client";

import editUserProfile from "@/api/user/profile/edit/editProfile";
import uploadPfp from "@/api/user/profile/edit/uploadPfp";
import useForm from "@/lib/hooks/form/useForm";
import User from "@/lib/types/User";

/**
 * Profile frontend
 */
export default function ProfileFrontend({
	user
}: {
	user: User
}) {
	const {
		formRef,
		statusMessages,
        submitForm
	} = useForm({
		callback: editUserProfile,
	});
	
	/**
	 * Upload profile picture
	 */
	async function submitUploadPfp(e: any) {
		const formData = new FormData(formRef.current);
		const response = await uploadPfp(formData);
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
			
			<form className="default-form" ref={formRef} encType="multipart/form-data">
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
					<label htmlFor="pfp">Profile photo</label>
					<input type="file" name="pfp" id="pfp" placeholder="Profile photo" />
				</div>
				
				<div className="campo">
					<input type="submit" value="Update" className="btn btn-azul" onClick={(e) => {
						submitForm(e);
						submitUploadPfp(e);
					}} />
				</div>
			</form>
			
			<form></form>
		</div>
	);
}
