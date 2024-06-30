"use server";

import Header from "@/components/header/Header";
import notAuthenticated from "@/lib/auth/notAuthenticated";
import ResetPasswordFrontend from "./ResetPasswordFrontend";


/**
 * Reset password route
 */
export default async function resetPassword() {
	await notAuthenticated();
	
	return (
		<div>
			<Header
				title="Log in to devJobs"
				tagline="Login"
				bar={true}
			/>
			
			<main className="contenedor">
				<ResetPasswordFrontend />
			</main>
		</div>
	);
}

