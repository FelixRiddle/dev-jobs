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
				title="Homepage"
				tagline="Find and post developer jobs"
				bar={true}
				button={true}
			/>
            
            <main className="contenido-principal contenedor">
                {children}
            </main>
        </div>
    );
}
