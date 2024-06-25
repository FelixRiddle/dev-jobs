import Header from "@/components/header/Header";
import apiUrl from "@/lib/mappings/apiUrl";
import ImportTrix from "./ImportTrix";

/**
 * Create layout
 */
export default function Layout({
	children
}: {
	children: React.ReactNode,
}) {
	const url = apiUrl();
	
	return (
        <div>
			<ImportTrix />
			
			<Header
				title="Create a job"
				tagline="Fill the formulary and create a new job"
			/>
			
            <main className="contenido-principal contenedor">
				{children}
			</main>
		</div>
    );
}
