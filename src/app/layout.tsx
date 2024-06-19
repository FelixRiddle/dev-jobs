'use client';

import Link from "next/link";
import "./globals.css";

/**
 * Root layout
 * 
 * @param param0 
 * @returns 
 */
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                
                {/* TODO: Later on try to install a font and use it locally */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    // crossOrigin={true}
                />
                <link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap" rel="stylesheet" />
                
                {/* Styles */}
                <link rel="stylesheet" href="/css/app.css" />
                
                <title>devJobs</title>
            </head>
            <body>
                {/* Top bar */}
                <div className="nombre-sitio contenedor">
                    <h1
                        className="nombre-sitio contenedor"
                    >devJobs</h1>
                    
                    <div className="buscador">
                        <form action="#">
                            <input type="text" className="buscar" />
                            <input type="submit" value="Buscar" />
                        </form>
                    </div>
                </div>
                
                {/* Page information */}
                <div>
                    <header className="site-header contenedor separador">
                        <h2>Homepage</h2>
                        
                        <p className="tagline">
                            Find and post developer jobs
                        </p>
                        
                        <a href="/job/create" className="btn btn-azul">
                            Create new position
                        </a>
                    </header>
                </div>
                
                <main className="contenido-principal contenedor">
                    {children}
                </main>
            </body>
        </html>
    );
}
