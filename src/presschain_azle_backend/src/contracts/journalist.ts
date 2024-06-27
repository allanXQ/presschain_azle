// /backend/contracts/journalist.ts
import { update, text, bool } from "azle";

type Journalist = {
  email: string;
};

let journalists: Journalist[] = [];

export function registerJournalist(email: string): bool {
  if (journalists.find((journalist) => journalist.email === email)) {
    console.error(`Journalist with email ${email} is already registered.`);
    return false;
  }
  journalists.push({ email });
  console.log(`Registered journalist with email: ${email}`);
  return true;
}
