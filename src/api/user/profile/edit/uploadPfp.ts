"use server";

import { multipartAxiosInstance } from "@/lib/axios/multipartAxios";
import { NormalResponse } from "../../logout";
import apiUrl from "@/lib/mappings/apiUrl";
import { cookies } from "next/headers";

/**
 * Get user profile
 */
export default async function uploadPfp(formData: FormData): Promise<NormalResponse | undefined> {
	try {
		
		console.log(`Upload pfp`);
		
		// const token = cookies().get("token")?.value;
		// const response = await fetch(`${apiUrl()}/rest/user/profile/edit/pfp`, {
		// 	method: "POST",
        //     body: formData,
        //     headers: {
        //         // "Content-Type": "multipart/form-data",
		// 		'Cookie': `token=${token}`,
        //     },
		// }).then(async (res) => await res.json());
		
		// console.log(`Response: `, response.body);
		
		const instance = multipartAxiosInstance();
		
		const response = await instance.post(
			"/rest/user/profile/edit/pfp",
			formData,
		);
		
		return response.data;
	} catch(err: any) {
		// If the error has response, then it's still a valid status response
		if(err.response) {
			const data = err.response.data;
            return data;
        }
		
		// Other kind of error
		console.log(`Couldn't upload the image error: `);
		console.error(err);
        
        return undefined;
	}
}
