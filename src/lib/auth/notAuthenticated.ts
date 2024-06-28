import getUserProfile from "@/api/user/profile/getProfile";
import { redirect } from "next/navigation";

/**
 * Not authenticated
 * 
 * Different than the others, this one redirects when the user is authenticated.
 */
export default async function notAuthenticated(): Promise<undefined> {
	const userResponse = await getUserProfile();
	
	if(!userResponse) {
		return;
	}
	
	const user = userResponse.user;
	
	if(!user) {
		return;
	}
	
	// Redirect
	redirect("/home");
}
