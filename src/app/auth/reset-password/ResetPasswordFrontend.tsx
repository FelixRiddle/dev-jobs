"use client";

/**
 * Reset password frontend
 */
export default function ResetPasswordFrontend() {
    
    return (
        <div>
			<form
				className="default-form"
			>
				<div className="campo">
					<label htmlFor="email">E-Mail</label>
					<input type="email" id="email" name="email" placeholder="Email" />
				</div>
				
				<div className="actions">
					<a href="/auth/login">Login instead</a>
				</div>
				
				<div className="campo">
					<input type="submit" value="Reset password" className="btn btn-azul" />
				</div>
			</form>
        </div>
    );
}
