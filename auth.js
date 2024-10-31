import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import { JWT } from "next-auth/jwt";

export const {
    handlers: { GET, POST },
    auth,
    signIn,
    signOut,
} = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
        }),
    ],
    // Configure session settings
    session: {
        strategy: "jwt", // Use JWT for stateless sessions
        maxAge: 60 * 60 * 24 * 7, // 1 week
        updateAge: 24 * 60 * 60, // Update session age once per day
    },
    callbacks: {
        async session({ session, token }) {
            session.userId = token.sub;
            return session;
        },
        async jwt({ token, user }) {
            if (user) token.id = user.id;
            return token;
        },
    },
    jwt: {
        secret: process.env.AUTH_SECRET,
        encryption: true, // Encrypt JWT for added security
    },
});
