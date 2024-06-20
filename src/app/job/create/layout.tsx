import apiUrl from "@/app/lib/mappings/apiUrl";
import Header from "@/components/header/Header";
import Script from "next/script";

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
			{/* Trix */}
			<link rel="stylesheet" href={`${url}/package/trix@2.1.1/dist/trix.css`} />
			
			<Script
				src={`${url}/package/trix@2.1.1/dist/trix.umd.js`}
			/>
			
			<Header
				title="Create a job"
				tagline="Fill the formulary and create a new job"
				// bar={true}
			/>
			
            <main className="contenido-principal contenedor">
				{children}
			</main>
		</div>
    );
}
