const redirect =
	"https://id.twitch.tv/oauth2/authorize?response_type=code&client_id={CLIENT_ID}&redirect_uri=http://localhost:3000/callback&scope=chat:read+chat:edit+channel:moderate+moderation:read+channel:read:redemptions+moderator:manage:automod+moderator:read:automod_settings+moderator:manage:automod_settings+moderator:manage:banned_users+moderator:read:blocked_terms+moderator:manage:blocked_terms+moderator:read:chat_settings+moderator:manage:chat_settings+moderator:manage:announcements+moderator:manage:chat_messages+moderator:read:chatters+moderator:read:shield_mode+moderator:manage:shield_mode+moderator:read:shoutouts+moderator:manage:shoutouts+moderator:read:followers&force_verify=true";

export const getRedirect = () => {
	const clientId = process.env.NEXT_PUBLIC_TWITCH_CLIENT_ID;

	if (!clientId) {
		throw new Error(
			"Cannot find NEXT_PUBLIC_TWITCH_CLIENT_ID in env! Make sure you populate this at build time"
		);
	}

	return redirect.replace("{CLIENT_ID}", clientId);
};
