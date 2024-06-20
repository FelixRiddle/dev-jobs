import "../../../public/css/app.css";
import Header from "@/components/header/Header";

/**
 * Layout
 * 
 * @returns 
 */
export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
			<Header
				title="Create a job"
				tagline="Fill the formulary and create a new job"
				bar={true}
				button={true}
			/>
            
            <main className="contenido-principal contenedor">
                {children}
            </main>
        </div>
    );
}