"use client";

import editUserProfile from "@/api/user/profile/edit/editProfile";
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
	
	return (
		<div>
			<div className="alertas">
				{statusMessages && statusMessages.map((message) => {
					return (
						<div className="error alerta" key={message.message}>{message.message}</div>
					);
				})}
			</div>
			
			<form action={"/user/profile/edit"} method="POST" className="default-form" ref={formRef}>
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
					<input type="submit" value="Update" className="btn btn-azul" onClick={submitForm} />
				</div>
			</form>
		</div>
	);
}
