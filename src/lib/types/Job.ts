import { Types as MongooseTypes } from "mongoose";
import User from "./User";

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
	
	author: MongooseTypes.ObjectId;
	url: string;
	
	// This is an array of objects
	candidates: Array<any>;
	__v: number;
}

export interface PopulatedJob {
	_id: MongooseTypes.ObjectId;
	
	title: string;
	company?: string;
	location: string;
	salary: number;
	contract?: string;
	description?: string;
	skills: Array<string>;
	
	author: User;
	url: string;
	
	// This is an array of objects
	candidates: Array<any>;
	__v: number;
}
