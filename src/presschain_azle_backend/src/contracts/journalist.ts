import { Canister, Record, Opt, query, text, update } from "azle";

type Journalist = {
  email: text;
  password: text;
};

let journalists: Journalist[] = [];

export function registerJournalist(email: text, password: text): text {
  try {
    const existingJournalist = journalists.find((j) => j.email === email);
    if (existingJournalist) {
      return JSON.stringify({
        type: "error",
        message: `Journalist with email ${email} already exists.`,
      });
    }
    journalists.push({ email, password });
    return JSON.stringify({
      type: "success",
      message: `Journalist with email ${email} registered successfully.`,
    });
  } catch (error) {
    return JSON.stringify({
      type: "error",
      message: error,
    });
  }
}
