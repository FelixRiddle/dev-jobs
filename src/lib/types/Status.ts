/**
 * Status is the response from my endpoints
 * 
 * It reports the state of the request
 */
export default interface Status {
    error: boolean,
    message: string
}
