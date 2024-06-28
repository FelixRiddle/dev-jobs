import Header from "@/components/header/Header";
import AdminFrontend from "./AdminFrontend";
import getAllJobs from "@/api/job/getAll";
import authenticate from "@/lib/auth/authenticate";

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
