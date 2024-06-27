"use client";

import User from "@/lib/types/User";

/**
 * Profile frontend
 */
export default function ProfileFrontend({
	user
}: {
	user: User
}) {
	// FIXME: Post to the edit route doesn't work
	return (
		<div>
			<form action={"/user/profile/edit"} method="POST" className="default-form">
				<div className="campo">
					<label htmlFor="name">Nombre</label>
					<input type="text" name="name" id="name" placeholder="Name" value={user.name} required />
				</div>
				<div className="campo">
					<label htmlFor="email">Email</label>
					<input type="email" name="email" id="email" placeholder="E-Mail" value={user.email} required />
				</div>
				<div className="campo">
					<label htmlFor="password">Password</label>
					<input type="password" name="password" id="password" placeholder="Password" required />
				</div>
				
				<div className="campo">
					<input type="submit" value="Update" className="btn btn-azul" />
				</div>
			</form>
		</div>
	);
}
