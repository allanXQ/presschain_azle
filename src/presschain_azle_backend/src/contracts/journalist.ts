import { text } from "azle";

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

export function loginJournalist(email: text, password: text): text {
  try {
    const journalist = journalists.find(
      (j) => j.email === email && j.password === password
    );
    if (!journalist) {
      return JSON.stringify({
        type: "error",
        message: `Invalid email or password.`,
      });
    }
    return JSON.stringify({
      type: "success",
      message: `Journalist with email ${email} logged in successfully.`,
    });
  } catch (error) {
    return JSON.stringify({
      type: "error",
      message: error,
    });
  }
}

export function getJournalist(email: text): text {
  const journalist = journalists.find((j) => j.email === email);
  if (!journalist) {
    return JSON.stringify({
      type: "error",
      message: `Journalist with email ${email} not found.`,
    });
  }
  return JSON.stringify({
    type: "success",
    data: journalist,
  });
}
