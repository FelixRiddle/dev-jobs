import apiUrl from "@/app/lib/mappings/apiUrl";

/**
 * Create
 * 
 * @returns 
 */
export default function Page() {
    return (
        <div className="contenedor">
            <form action={`${apiUrl()}/job/create`} method="POST" className="default-form">
                <h3>
                    General information
                </h3>
                
                <div className="campo">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" id="title" placeholder="Title" required />
                </div>
                
                <div className="campo">
                    <label htmlFor="company">Company</label>
                    <input type="text" name="company" id="company" placeholder="Company" required />
                </div>
                
                <div className="campo">
                    <label htmlFor="location" className="location">Location</label>
                    <input type="text" name="location" id="location" placeholder="Location" required />
                </div>
                
                <div className="campo">
                    <label htmlFor="salary">Salary</label>
                    <input type="text" name="salary" id="salary" placeholder="Salary" required />
                </div>
                
                <div className="campo">
                    <label htmlFor="contract">Contract</label>
                    <select name="contract" id="contract" defaultValue="">
                        <option value="" disabled>- Select one -</option>
                        <option value="full-time">Full-time</option>
                        <option value="part-time">Part-time</option>
                        <option value="freelance">Freelance</option>
                        <option value="temporal">Temporal</option>
                    </select>
                </div>
                
                <div className="campo">
                    <label htmlFor="description">Description</label>
                    <textarea name="description" id="description" cols={30} rows={10} placeholder="Description" required></textarea>
                </div>
            </form>
        </div>
    );
}
