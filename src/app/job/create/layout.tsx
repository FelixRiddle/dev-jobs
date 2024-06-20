import Header from "@/components/header/Header";

/**
 * Create layout
 */
export default function Layout({
	children
}: {
	children: React.ReactNode,
}) {
	return (
        <div>
			<Header
				title="Create a job"
				tagline="Fill the formulary and create a new job"
				bar={true}
			/>
			
            <main className="contenido-principal contenedor">
				{children}
			</main>
		</div>
    );
}
