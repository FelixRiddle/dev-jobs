"use client";

import loginUser from "@/api/auth/login";
import useForm from "@/lib/hooks/form/useForm";

/**
 * Login frontend
 */
export default function LoginFrontend() {
	// It can still be abstracted more, if we put the status messages into a separate component
	const {
		formRef,
		statusMessages,
        submitForm
	} = useForm({
		callback: loginUser,
	});
	
	return (
		<div>
			{/* Show status messages */}
			<div className="alertas">
				{statusMessages && statusMessages.map((message) => {
					return (
						<div className="error alerta" key={message.message}>{message.message}</div>
					);
				})}
			</div>
			
			<form className="default-form" ref={formRef}>
				<div className="campo">
					<label htmlFor="email">E-Mail</label>
					<input type="email" name="email" id="email" placeholder="E-Mail" required />
				</div>
				<div className="campo">
					<label htmlFor="password">Password</label>
					<input type="password" name="password" id="password" placeholder="Password" required />
				</div>
				
				<div className="campo acciones">
					<a href={`/auth/create-account`}>Create an account</a>
					<a href={`/auth/reset-password`}>Forgot password</a>
				</div>
				<div className="campo">
					<input type="submit" value="Login" className="btn btn-azul" onClick={submitForm} />
				</div>
			</form>
		</div>
	);
}
