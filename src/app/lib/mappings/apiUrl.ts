
/**
 * Get api location
 */
export default function apiUrl() {
    const apiPort = process.env.API_PORT || 3005;
    
    return `http://localhost:${apiPort}`;
}
