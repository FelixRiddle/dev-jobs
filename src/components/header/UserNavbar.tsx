"use client";

import apiUrl from "@/lib/mappings/apiUrl";
import User from "@/lib/types/User";
import Image from "next/image";

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
	const url = apiUrl();
	return (
		<div>
			{user && (
				<div className="user-navbar">
					<a href="/user/admin" className={"user-navbar-element"} style={{ display: "inline" }}>Admin panel</a>
					<a
						href="#"
						className={"user-navbar-element"}
						style={{ display: "inline" }}
						onClick={() => logout()}
					>Logout</a>
					
					<a href="/user/profile" className={"user-navbar-element"} style={{ display: "inline" }}>Hello {user.name}!</a>
					<img
						src={`${url}/uploads/profile/${user.image}`}
						alt="Profile picture"
						className="profile-image"
					/>
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
