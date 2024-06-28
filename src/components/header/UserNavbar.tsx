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
		<div className="cerrar-session">
			<p className={"close-session-element"} style={{ display: "inline" }}>Hello {user.name}!</p>
			<a href="/user/admin" className={"close-session-element"} style={{ display: "inline" }}>Admin panel</a>
			<a
				href="#"
				className={"close-session-element"}
				style={{ display: "inline" }}
				onClick={() => logout()}
			>Logout</a>
		</div>
	);
}
