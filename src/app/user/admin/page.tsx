import Header from "@/components/header/Header";
import AdminFrontend from "./AdminFrontend";
import getAllJobs from "@/api/job/getAll";
import getUserProfile from "@/api/user/profile/getProfile";
import { redirect } from "next/navigation";

/**
 * Authenticate
 * 
 * Try to get the user and if it can't then redirect
 */
export async function authenticate() {
	const userResponse = await getUserProfile();
	
	if(!userResponse) {
		redirect("/auth/login");
	}
	
	const user = userResponse.user;
	
	if(!user) {
		redirect("/auth/login");
	}
	
	return user;
}

/**
 * Admin
 */
export default async function Admin() {
	const user = await authenticate();
    const jobs = await getAllJobs();
	
	return (
        <div>
			<Header
				title="Administration panel"
				tagline="Create and administrate your job positions from here"
				user={user}
			/>
			
			<div className="contenido-principal contenedor">
				<AdminFrontend jobs={jobs} />
			</div>
		</div>
    );
}
