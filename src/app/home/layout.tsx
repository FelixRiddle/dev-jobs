"use server";

import optionalUser from "@/lib/auth/optionalUser";
import "../../../public/css/app.css";
import Header from "@/components/header/Header";

/**
 * Layout
 * 
 * @returns 
 */
export default async function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
	const user = await optionalUser();
	
    return (
        <div>
			<Header
				title="Homepage"
				tagline="Find and post developer jobs"
				user={user}
				bar={true}
				button={true}
			/>
            
            <main className="contenido-principal contenedor">
                {children}
            </main>
        </div>
    );
}
