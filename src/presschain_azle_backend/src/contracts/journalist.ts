// /backend/contracts/journalist.ts
import { update, text, bool } from "azle";
import * as bcrypt from "bcrypt";
type Journalist = {
  email: string;
  newpassword: string;
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
  const newpassword = await bcrypt.hash(password, 10);
  journalists.push({ email, newpassword });
  console.log(`Registered journalist with email: ${email}`);
  return true;
}
