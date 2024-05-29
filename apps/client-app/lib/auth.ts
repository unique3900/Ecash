import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcrypt";
import db from "@repo/db/client";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "1231231231" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any) {
        const hashedPwd = await bcrypt.hash(credentials.password, 10);
        const userExist = await db.user.findFirst({
          where: {
            email: credentials.email,
          },
        });
        if (userExist) {
          const pwdValidate = await bcrypt.compare(
            hashedPwd,
            userExist.password
          );
          if (pwdValidate) {
            return {
              id: userExist.id.toString(),
              name: userExist.fullName,
              email: userExist.email,
            };
          }
          return null
        }
        try {
           const user=await db.user.create({
            data:{
                email:credentials.email,
                password:credentials.password,
                phone:''
            }
           }) 
           return {
            id: user.id.toString(),
            name: user.fullName,
            email: user.email
        }
        } catch (error) {
            return null;
            console.log(error)
        }
      }
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID || "",
      clientSecret: process.env.GITHUB_SECRET || "",
    }),
  ],

  secret:process.env.JWT_SECRET || 'SECRET',
  callbacks: {
    async session({ token, session }: any) {
        session.user.id = token.sub

        return session
    }
}

};
