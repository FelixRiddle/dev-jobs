"use client";

import sendResetPasswordEmail from "@/api/auth/sendResetPasswordEmail";
import { useRef } from "react";

/**
 * Reset password frontend
 */
export default function ResetPasswordFrontend() {
    const resetPasswordForm = useRef(null);
	
	/**
	 * Submit form
	 */
	async function submitForm(e: any) {
		e.preventDefault();
		
		if(!resetPasswordForm) {
			return;
		}
		
		const data = new FormData(resetPasswordForm.current);
		
		const response = await sendResetPasswordEmail(data);
		
		console.log(`Response: `, response);
	}
	
    return (
        <div>
			<form
				className="default-form"
				ref={resetPasswordForm}
			>
				<div className="campo">
					<label htmlFor="email">E-Mail</label>
					<input type="email" id="email" name="email" placeholder="Email" />
				</div>
				
				<div className="actions">
					<a href="/auth/login">Login instead</a>
				</div>
				
				<div className="campo">
					<input
						type="submit"
						value="Send email"
						className="btn btn-azul"
						onClick={submitForm}
					/>
				</div>
			</form>
        </div>
    );
}
