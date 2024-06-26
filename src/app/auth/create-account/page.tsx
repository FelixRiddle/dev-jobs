import Header from "@/components/header/Header";
import CreateAccountFrontend from "./CreateAccountFrontend";

/**
 * Create account
 */
export default function CreateAccount() {
	return (
		<div>
			<Header
				title="Create account at devJobs"
				tagline="Fill the formulary to create your new account and start recruiting/posting for free!"
			/>
			
			<main className="contenido-principal contenedor">
				<CreateAccountFrontend />
			</main>
		</div>
	);
}
