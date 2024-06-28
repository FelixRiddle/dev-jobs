"use server";

import logout from "@/api/user/logout";
import Link from "next/link";
import UserNavbar from "./UserNavbar";

/**
 * Header
 * 
 * @returns 
 */
export default async function Header({
	title,
	tagline,
	bar,
	button,
	user
}: {
	title?: string;
	tagline?: string;
	bar?: boolean;
	button?: boolean;
	user?: any;
}) {
	console.log(`Logout: `, logout);
	
	return (
		<div>
			{/* Styles */}
			<link rel="stylesheet" href="/css/search.css" />
			<link rel="stylesheet" href="/css/user-navbar.css" />
			
			{/* Top bar */}
            <div className="contenedor header">
				{/* Site title */}
				<h1 className="website-name">
					<Link href="/home">devJobs</Link>
				</h1>
				
				{/* User navbar */}
				<UserNavbar
					user={user}
					logout={logout}
				/>
				
				{/* Search */}
				{bar && (
					<div className="search">
						<form action="#" className="search-form">
							<input type="text" className="buscar" />
							<input type="submit" value="Buscar" />
						</form>
					</div>
				)}
            </div>
			
			{/* User navigation */}
			{/* <div className="contenedor">
			</div> */}
            
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
