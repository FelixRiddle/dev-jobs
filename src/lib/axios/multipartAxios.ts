import axios from "axios";
import { cookies } from "next/headers";
import apiUrl from "../mappings/apiUrl";

/**
 * Create axios instance
 */
export function multipartAxiosInstance() {
	const url = apiUrl();
	
	const token = cookies().get("token")?.value;
	
	if(!token) {
		throw Error("Token not found");
	}
	
	const headers: any = {
		'Cookie': `token=${token}`,
        'Content-Type': 'multipart/form-data'
	};
	
	const instance = axios.create({
		withCredentials: true,
		baseURL: url,
		headers
	});
	
	return instance;
}
