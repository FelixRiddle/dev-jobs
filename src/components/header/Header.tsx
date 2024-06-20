import Link from "next/link";

interface HeaderArgs {
	title?: string;
	tagline?: string;
	bar?: boolean;
	button?: boolean;
}

/**
 * Header
 * 
 * @returns 
 */
export default function Header({
	title,
	tagline,
	bar,
	button,
}: HeaderArgs) {
	return (
		<div>
			{/* Top bar */}
            <div className="nombre-sitio contenedor">
				<h1>
					<Link href="/home">devJobs</Link>
				</h1>
                
				{/* Search */}
				{bar && (
					<div className="buscador">
						<form action="#">
							<input type="text" className="buscar" />
							<input type="submit" value="Buscar" />
						</form>
					</div>
				)}
            </div>
            
            {/* Page information */}
            <div>
                <header className="site-header contenedor separador">
                    <h2>{title}</h2>
                    
					{tagline && (
                        <p className="tagline">
                            {tagline}
                        </p>
                    )}
                    
					{button && (
						<a href="/job/create" className="btn btn-azul">
                            Create new position
                        </a>
					)}
                </header>
            </div>
		</div>
	);
}
