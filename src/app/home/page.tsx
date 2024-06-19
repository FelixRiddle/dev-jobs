import "../../../public/css/app.css";

/**
 * 
 * @returns 
 */
export default function Page() {
    
    return (
        <div className="lista-vacantes">
            {/* Section of job postings */}
            <h2>List of job postings</h2>
            
            <div className="vacante">
                <div className="caja">
                    <h3>Facebook</h3>
                    <p className="puesto">React developer</p>
                </div>
                
                <div className="caja">
                    <p className="etiqueta">
                        Location
                    </p>
                    <p className="nombre">
                        Remote
                    </p>
                </div>
                
                <div className="caja">
                    <p className="etiqueta">
                        Contract
                    </p>
                    <p className="nombre contrato">
                        Full-time
                    </p>
                </div>
                
                <div className="caja centrar-vertical">
                    <a href="#" className="btn btn-verde">
                        More information
                    </a>
                </div>
            </div>
            
            {/* Other posting */}
            <div className="vacante">
                <div className="caja">
                    <h3>AirBNB</h3>
                    <p className="puesto">React developer</p>
                </div>
                
                <div className="caja">
                    <p className="etiqueta">
                        Location
                    </p>
                    <p className="nombre">
                        Remote
                    </p>
                </div>
                
                <div className="caja">
                    <p className="etiqueta">
                        Contract
                    </p>
                    <p className="nombre contrato">
                        Full-time
                    </p>
                </div>
                
                <div className="caja centrar-vertical">
                    <a href="#" className="btn btn-verde">
                        More information
                    </a>
                </div>
            </div>
        </div>
    );
}
