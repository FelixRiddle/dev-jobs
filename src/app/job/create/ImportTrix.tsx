import Script from "next/script";

import apiUrl from "@/lib/mappings/apiUrl";

/**
 * Import trix
 */
export default function ImportTrix() {
	const url = apiUrl();
	
	return (
		<div>
			{/* Trix */}
			<link rel="stylesheet" href={`${url}/package/trix@2.1.1/dist/trix.css`} />
			
			<Script
				src={`${url}/package/trix@2.1.1/dist/trix.umd.js`}
			/>
		</div>
	);
}
