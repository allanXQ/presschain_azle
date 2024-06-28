// /backend/contracts/journalist.ts
import { update, text, bool } from "azle";

type Journalist = {
  email: string;
  password: string;
};

let journalists: Journalist[] = [];

export async function registerJournalist(
  email: string,
  password: string
): Promise<boolean> {
  if (journalists.find((journalist) => journalist.email === email)) {
    console.error(`Journalist with email ${email} is already registered.`);
    return false;
  }
  journalists.push({ email, password });
  console.log(`Registered journalist with email: ${email}`);
  return true;
}
