import Header from "@/components/header/Header";
import AdminFrontend from "./AdminFrontend";

/**
 * Admin
 */
export default function Admin() {
	return (
        <div>
			<Header
				title="Administration panel"
				tagline="Create and administrate your job positions from here"
			/>
			
			<div className="contenido-principal contenedor">
				<AdminFrontend>
				</AdminFrontend>
			</div>
		</div>
    );
}
