import { Types as MongooseTypes } from "mongoose";

/**
 * The complete interface of job
 */
export default interface Job {
	_id: MongooseTypes.ObjectId;
	
	title: string;
	company?: string;
	location: string;
	salary: number;
	contract?: string;
	description?: string;
	skills: Array<string>;
	url: string;
	
	// This is an array of objects
	candidates: Array<any>;
	__v: number;
}

