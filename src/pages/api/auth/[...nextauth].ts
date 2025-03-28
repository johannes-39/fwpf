import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"


const providers=[
    GithubProvider({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET,
    }),
]
const nextAuth= NextAuth({
    providers,
    secret: process.env.JWT_SECRET
})
export default nextAuth;