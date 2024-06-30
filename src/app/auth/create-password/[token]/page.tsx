"use server";

import Header from "@/components/header/Header";
import CreatePasswordFrontend from "./CreatePasswordFrontend";
import validateToken from "@/api/auth/createPassword/validateToken";

/**
 * Create password
 */
export default async function CreatePassword({
	params: {
		token
	}
}: {
	params: {
		token: string,
	}
}) {
	const validateTokenResponse = await validateToken(token);
	
	if(!validateTokenResponse) {
		return (
			<div>
				<Header
					title="Error 500"
					tagline="Internal error"
					bar={true}
				/>
			</div>
		);
	}
	
	if(!validateTokenResponse.tokenOk) {
		return (
			<div>
				<Header
					title="Invalid token"
					tagline="The given token is invalid"
					bar={true}
				/>
			</div>
		);
	}
	
	return (
		<div>
			<Header
				title="Reset password"
				tagline="Create and confirm your new password"
				bar={true}
			/>
			
			<main className="contenido-principal contenedor">
				<CreatePasswordFrontend />
			</main>
		</div>
	);
}
