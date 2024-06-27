import Header from "@/components/header/Header";
import LoginFrontend from "./LoginFrontend";

/**
 * Page
 */
export default function Page() {
	return (
		<div>
			<Header
				title="Log in to devJobs"
				tagline="Login"
			/>
			
			<main className="contenedor">
				<LoginFrontend />
			</main>
		</div>
	);
}
