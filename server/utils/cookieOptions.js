/**
 * Centralised cookie config so signup, login, and logout
 * all use exactly the same settings.
 *
 * httpOnly  → JS in the browser cannot read the cookie (XSS protection)
 * secure    → Cookie only sent over HTTPS in production
 * sameSite  → CSRF protection
 */
const cookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "strict",
  maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days in milliseconds
};

export default cookieOptions;