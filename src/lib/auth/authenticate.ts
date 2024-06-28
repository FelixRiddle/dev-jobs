import getUserProfile from "@/api/user/profile/getProfile";
import { redirect } from "next/navigation";

/**
 * Authenticate
 * 
 * Try to get the user and if it can't then redirect
 */
export default async function authenticate() {
	const userResponse = await getUserProfile();
	
	if(!userResponse) {
		redirect("/auth/login");
	}
	
	const user = userResponse.user;
	
	if(!user) {
		redirect("/auth/login");
	}
	
	return user;
}
