"use server";

import Header from "@/components/header/Header";
import ProfileFrontend from "./ProfileFrontend";
import getUserProfile from "@/api/user/profile/getProfile";
import { redirect } from "next/navigation";

/**
 * Profile
 */
export default async function Profile() {
	const response = await getUserProfile();
	
	if(!response || !response.user) {
		redirect("/auth/login");
	}
	
	const user = response.user;
	
	return (
		<div>
			<Header
				title="Edit user profile"
				tagline="Update your profile"
				bar={true}
			/>
			
			<main className="contenido-principal contenedor">
				<ProfileFrontend
					user={user}
				/>
			</main>
		</div>
	);
}

