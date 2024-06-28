import Header from "@/components/header/Header";
import CreateAccountFrontend from "./CreateAccountFrontend";
import notAuthenticated from "@/lib/auth/notAuthenticated";

/**
 * Create account
 */
export default async function CreateAccount() {
	await notAuthenticated();
	
	return (
		<div>
			<Header
				title="Create account at devJobs"
				tagline="Fill the formulary to create your new account and start recruiting/posting for free!"
				bar={true}
			/>
			
			<main className="contenido-principal contenedor">
				<CreateAccountFrontend />
			</main>
		</div>
	);
}
