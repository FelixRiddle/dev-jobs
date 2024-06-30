"use client";

/**
 * Create password frontend
 */
export default function CreatePasswordFrontend() {
	return (
		<div>
			<form
				method="POST"
				className="default-form"
			>
				<div className="campo">
					<label htmlFor="password">Password</label>
					<input type="password" id="password" name="password" placeholder="Password" />
				</div>
				
				<div className="campo">
					<label htmlFor="confirmPassword">Confirm password</label>
					<input type="confirmPassword" id="confirmPassword" name="confirmPassword" placeholder="Confirm password" />
				</div>
				
				<div className="actions">
					<a href="/auth/login">Login instead</a>
				</div>
				
				<div className="campo">
					<input type="submit" value="Change password" className="btn btn-azul" />
				</div>
			</form>
		</div>
	);
}
