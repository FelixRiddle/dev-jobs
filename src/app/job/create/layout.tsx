import Header from "@/components/header/Header";
import ImportTrix from "./ImportTrix";
import { authenticate } from "@/app/user/admin/page";

/**
 * Create layout
 */
export default async function Layout({
	children
}: {
	children: React.ReactNode,
}) {
	const user = await authenticate();
	
	return (
        <div>
			<ImportTrix />
			
			<Header
				title="Create a job"
				tagline="Fill the formulary and create a new job"
				user={user}
			/>
			
            <main className="contenido-principal contenedor">
				{children}
			</main>
		</div>
    );
}
