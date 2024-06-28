import Header from "@/components/header/Header";
import AdminFrontend from "./AdminFrontend";
import getAllJobs from "@/api/job/getAll";
import getUserProfile from "@/api/user/profile/getProfile";
import { redirect } from "next/navigation";

/**
 * Admin
 */
export default async function Admin() {
	const userResponse = await getUserProfile();
    const jobs = await getAllJobs();
	
	if(!userResponse) {
		redirect("/auth/login");
	}
	
	const user = userResponse.user;
	
	if(!user) {
		redirect("/auth/login");
	}
	
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
