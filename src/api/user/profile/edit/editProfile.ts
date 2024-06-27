"use server";

import createAxiosInstance from "@/lib/createAxiosInstance";
import Status from "@/lib/types/Status";

interface EditUserProfileResponse {
	messages: Array<Status>;
}

interface EditUserData {
	name: string;
	email: string;
	password?: string;
}

/**
 * Get user profile
 */
export default async function editUserProfile(userData: EditUserData): Promise<EditUserProfileResponse | undefined> {
	try {
		const instance = createAxiosInstance();
		
		const response = await instance.post(
			"/rest/user/profile/edit",
			userData,
		);
		
		return response.data;
	} catch(err: any) {
		
		// If the error has response, then it's still a valid status response
		if(err.response) {
			const data = err.response.data;
            return data;
        }
		
		// Other kind of error
		console.log(`Couldn't create user, error: `);
		console.error(err);
        
        return undefined;
	}
}
