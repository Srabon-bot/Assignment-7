import dns from "node:dns";
import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { nextCookies } from "better-auth/next-js";
import { MongoClient } from "mongodb";

if (process.env.NODE_ENV !== "production") {
  dns.setServers(["8.8.8.8", "1.1.1.1"]);
}

const globalForMongo = globalThis as unknown as { mongoClient?: MongoClient };
const client =
  globalForMongo.mongoClient ?? new MongoClient(process.env.MONGODB_URI!);
if (process.env.NODE_ENV !== "production") globalForMongo.mongoClient = client;

const db = client.db("bazardor");

export const auth = betterAuth({
  baseURL: process.env.BETTER_AUTH_URL || "https://assignment-7-kw2m.vercel.app",
  trustedOrigins: [
    "https://assignment-7-kw2m.vercel.app",
    "https://*.vercel.app",
    "http://localhost:3000",
  ],
  advanced: {
    trustedProxyHeaders: true,
    disableCSRFCheck: true,
    disableOriginCheck: true,
    useSecureCookies: process.env.NODE_ENV === "production",
  },
  account: {
    accountLinking: {
      enabled: true,
      trustedProviders: ["google", "github"],
    },
  },
  database: mongodbAdapter(db),
  emailAndPassword: {
    enabled: true,
    autoSignIn: false,
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
    github: {
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    },
  },
  plugins: [nextCookies()],
});