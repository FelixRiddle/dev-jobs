import getUserProfile from "@/api/user/profile/getProfile";
import User from "../types/User";

/**
 * Optional get user
 * 
 * Try to get the user and if it can't don't redirect, return undefined
 */
export default async function optionalUser(): Promise<User | undefined> {
	const userResponse = await getUserProfile();
	
	if(!userResponse) {
		return undefined;
	}
	
	const user = userResponse.user;
	
	if(!user) {
		return undefined;
	}
	
	return user;
}
