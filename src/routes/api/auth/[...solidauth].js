import DiscordProvider from "@auth/core/providers/discord";
import { SolidAuth } from "@auth/solid-start";
export const authOptions = {
  providers: [
    // @ts-expect-error Types are wrong
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET,
    }),
  ],
};
export const { GET, POST } = SolidAuth(authOptions);
