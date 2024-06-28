"use server";

import Header from "@/components/header/Header";
import ProfileFrontend from "./ProfileFrontend";
import { authenticate } from "../admin/page";

/**
 * Profile
 */
export default async function Profile() {
	const user = await authenticate();
	
	return (
		<div>
			<Header
				title="Edit user profile"
				tagline="Update your profile"
				user={user}
			/>
			
			<main className="contenido-principal contenedor">
				<ProfileFrontend
					user={user}
				/>
			</main>
		</div>
	);
}

