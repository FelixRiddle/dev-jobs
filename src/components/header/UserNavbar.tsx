"use client";

import User from "@/lib/types/User";

/**
 * User navbar
 */
export default function UserNavbar({
	user,
	logout
}: {
	user: User;
	logout: () => Promise<any>;
}) {
	return (
		<div>
			{user && (
				<div className="user-navbar">
					<a href="#" className={"user-navbar-element"} style={{ display: "inline" }}>Hello {user.name}!</a>
					<a href="/user/admin" className={"user-navbar-element"} style={{ display: "inline" }}>Admin panel</a>
					<a
						href="#"
						className={"user-navbar-element"}
						style={{ display: "inline" }}
						onClick={() => logout()}
					>Logout</a>
				</div>
			) || (
				<div className="user-navbar">
					<a
						href="/auth/create-account"
						className={"user-navbar-element"}
						style={{ display: "inline" }}
					>Register</a>
					<a
						href="/auth/login"
						className={"user-navbar-element"}
						style={{ display: "inline" }}
					>Login</a>
				</div>
			)}
		</div>
	);
}
