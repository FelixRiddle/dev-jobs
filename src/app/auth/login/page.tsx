import Header from "@/components/header/Header";
import LoginFrontend from "./LoginFrontend";
import notAuthenticated from "@/lib/auth/notAuthenticated";

/**
 * Page
 */
export default async function Page() {
	await notAuthenticated();
	
	return (
		<div>
			<Header
				title="Log in to devJobs"
				tagline="Login"
				bar={true}
			/>
			
			<main className="contenedor">
				<LoginFrontend />
			</main>
		</div>
	);
}
