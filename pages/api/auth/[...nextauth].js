import NextAuth from "next-auth/next";
import  CredentialsProvider  from "next-auth/providers/credentials";

export default NextAuth({
    providers: [
        CredentialsProvider({
            name: "creadentials",
            credentials: {
                username: { label: 'Username', type: 'text', placeholder:'user123'},
                password: { label: 'Password', type: 'password', },
            },
            authorize: (credentials) => {
                if (credentials.username === 'zain8511@gmail.com' && credentials.password ==='test') {
                    return {
                        id: 1234567890,
                        name: 'admin',
                        email: 'admin@storewind.org',
                    }
                }
                return null
            }
        }),
    ],
    callbacks: {
        jwt: async ({token,user}) => {
            if (user) {
                token.id=user.id
            }
            return token
        },
        session: ({ token, session }) => {
            if (token.id) {
                session.id = token.id
            }
            return session
        },
    },
    secret: "myStorwindWebApp",
    jwt: {
        secret: "myStorwindWebApp",
        encryption:true,
    },
    // pages: {
    //     signIn: '/auth/signin'
    // },
})