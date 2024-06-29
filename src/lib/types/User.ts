import { Types as MongooseTypes } from "mongoose";

/**
 * User info
 */
export default interface User {
	_id: MongooseTypes.ObjectId;
	
	image: string;
	email: string;
	name: string;
	
	// Not gonna need password for anything
	// password: string;
	__v: number;
}

