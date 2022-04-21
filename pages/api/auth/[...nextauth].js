// import NextAuth from "next-auth/next";
// import CredentialsProvider from "next-auth/providers/credentials";

// export default NextAuth({
//         providers: [
//         CredentialsProvider({
//             name: "creadentials",
//             credentials: {
//                 email: { label: 'Email', type: 'text', placeholder:'example@mail.com'},
//                 password: { label: 'Password', type: 'password', },
//             },
//             authorize: async (credentials) => {

//                 if (credentials.email === 'zain8511@gmail.com' && credentials.password ==='test') {
//                     let user = {
//                         id:11412,
//                         admin: true,
//                         name: 'admin',
//                         email: 'admin@storewind.org',
//                     }
//                     return user;
//                 }
                
//                 return null
//             },
//         }),
//     ],
//     callbacks: {
//         jwt: async ({token,user}) => {
//             if (user) {
//                 token.id=user.id
//             }
//             return token
//         },
//         session: ({ token, session }) => {
//             if (token.id) {
//                 session.id = token.id
//             }
//             return session
//         },
//     },
//     secret: "myStorwindWebApp",
//     jwt: {
//         secret: "myStorwindWebApp",
//         encryption:true,
//     },


//     // pages: {
//     //     signIn: '/signin',
//     // }
// })
