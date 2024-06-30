"use server";

import jobById from "@/api/job/candidates/jobById";
import Header from "@/components/header/Header";
import authenticate from "@/lib/auth/authenticate";
import CandidatesFrontend from "./CandidatesFrontend";
import { redirect } from "next/navigation";

/**
 * Candidates
 */
export default async function Candidates({
	params: {
		id
	}
}: {
	params: {
		id: string;
	}
}) {
	const user = await authenticate();
	const jobModel = await jobById(id);
	
	const job = jobModel.job;
	
	if(!job) {
		return redirect("/404");
	}
	
	return (
        <div>
			<Header
				title={job.title}
				tagline={job.company}
				user={user}
			/>
			
			<main className="contenido-principal contenedor">
				<CandidatesFrontend
					job={job}
				/>
			</main>
		</div>
    );
}
