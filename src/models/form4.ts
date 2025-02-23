/** @format */

import { Schema, Document, model, Model } from "mongoose";

// Extend the global scope inline to include our Form4Model type
declare global {
	// Using var instead of let ensures compatibility with globalThis
	var Form4Model: Model<Form4> | undefined;
}

// Define an interface for IA/SA application
export interface Form4 extends Document {
	name: string;
	phone: string;
	email: string;
	institution: string;
	speakingCredentials: string;
	judgingCredentials: string;
	accommodation: boolean;
}

// Define the schema
const Form4Schema: Schema<Form4> = new Schema(
	{
		name: { type: String, required: true },
		phone: { type: String, required: true },
		email: { type: String, required: true },
		institution: { type: String, required: true },
		speakingCredentials: { type: String, required: false },
		judgingCredentials: { type: String, required: false },
		accommodation: { type: Boolean, required: true },
	},
	{ timestamps: true }
);

// Check if the model is already compiled using globalThis
const Form4Model: Model<Form4> =
	globalThis.Form4Model ?? model<Form4>("Form4", Form4Schema);
globalThis.Form4Model = Form4Model;

export default Form4Model;
