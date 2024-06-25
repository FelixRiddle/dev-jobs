const PORT = process.env.API_PORT || 3005;

/**
 * Get api location
 */
export default function apiUrl() {
    return `http://localhost:${PORT}`;
}

/**
 * Javascript public scripts route path
 */
export function publicScriptsPath() {
    return `http://localhost:${PORT}/js`;
}
