// This is an example of to protect an API route
import { getServerSession } from "next-auth/next";
import NextAuth, { NextAuthOptions } from "next-auth";
import type { NextApiRequest, NextApiResponse } from "next";

const options: NextAuthOptions = {
  providers: [
    // Define your authentication providers here...
  ],
  // Other options...
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const session = await getServerSession(req, res, options);

  if (session) {
    return res.send({
      content:
        "This is protected content. You can access this content because you are signed in.",
    });
  }

  res.send({
    error: "You must be signed in to view the protected content on this page.",
  });
}
