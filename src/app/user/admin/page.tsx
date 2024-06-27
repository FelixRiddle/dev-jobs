import Header from "@/components/header/Header";
import AdminFrontend from "./AdminFrontend";
import getAllJobs from "@/api/job/getAll";

/**
 * Admin
 */
export default async function Admin() {
    const jobs = await getAllJobs();
	
	return (
        <div>
			<Header
				title="Administration panel"
				tagline="Create and administrate your job positions from here"
				bar={true}
			/>
			
			<div className="contenido-principal contenedor">
				<AdminFrontend jobs={jobs} />
			</div>
		</div>
    );
}
