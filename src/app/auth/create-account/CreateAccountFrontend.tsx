"use client";

import createUser from "@/api/auth/createUser";
import useForm from "@/lib/hooks/form/useForm";

/**
 * Create account frontend
 */
export default function CreateAccountFrontend() {
	const {
		formRef,
		statusMessages,
        submitForm
	} = useForm({
		callback: createUser,
	});
	
	return (
		<div>
			{/* Show status messages */}
			<div className="alertas">
				{statusMessages.map((message) => {
					return (
						<div className="error alerta" key={message.message}>{message.message}</div>
					);
				})}
			</div>
			
			<form className="default-form" ref={formRef}>
				<div className="campo">
					<label htmlFor="name">Name</label>
					<input type="text" name="name" id="name" placeholder="Nombre" />
				</div>
				<div className="campo">
					<label htmlFor="email">E-Mail</label>
					<input type="email" name="email" id="email" placeholder="Email" />
				</div>
				<div className="campo">
					<label htmlFor="password">Password</label>
					<input type="password" name="password" id="password" placeholder="Password" />
				</div>
				<div className="campo">
					<label htmlFor="confirmPassword">Confirm password</label>
					<input type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm password" />
				</div>
				
				{/* Actions */}
				<div className="campo acciones">
					<a href={`/auth/login`}>Go back to log in</a>
				</div>
				
				<div className="campo">
					<input type="submit" value="Create account" className="btn btn-azul" onClick={submitForm} />
				</div>
			</form>
		</div>
	);
}
