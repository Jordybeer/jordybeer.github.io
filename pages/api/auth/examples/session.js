import { getServerSession } from "next-auth";
import { authOptions } from "../[...nextauth]";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions);
  res.send(JSON.stringify(session, null, 2));
}
