import { redirect } from "next/navigation";
import { getJobDataByUrl } from "../../show/[slug]/page";
import Header from "@/components/header/Header";
import EditJobFrontend from "./EditJobFrontend";
import ImportTrix from "../../create/ImportTrix";

/**
 * Job 
 */
export default async function Page({
	params
}: {
	params: {
		slug: string;
	}
}) {
	const job = await getJobDataByUrl(params.slug);
	
	if(!job) {
		return redirect("/404");
	}
	
	return (
        <div>
			<ImportTrix />
			
			<Header
				title={job.title}
				tagline={job.company}
				bar={true}
			/>
			
			<main className="contenido-principal contenedor">
				<EditJobFrontend
					job={job}
				/>
			</main>
		</div>
    );
}
