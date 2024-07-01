import { text } from "azle";

type Article = {
  title: text;
  content: text;
  status?: "draft" | "submitted" | "reviewing" | "published";
};

type JournalistProfile = {
  bio?: text;
  contactInfo?: text;
};

type Journalist = {
  email: text;
  password: text;
  profile?: JournalistProfile;
  articles?: Article[];
};

let journalists: Journalist[] = [];

export function registerJournalist(email: text, password: text): text {
  try {
    const existingJournalist = journalists.find((j) => j.email === email);
    if (existingJournalist) {
      return JSON.stringify({
        type: "error",
        message: `Email already in use.`,
      });
    }
    journalists.push({ email, password });
    return JSON.stringify({
      type: "success",
      message: `Registered successfully.`,
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
      message: `Logged in successfully.`,
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
      message: `User not found.`,
    });
  }
  return JSON.stringify({
    type: "success",
    message: `User retrieved.`,
    payload: journalist,
  });
}

export function getJournalists(): text {
  return JSON.stringify(journalists);
}

export function deleteJournalist(email: text): text {
  try {
    journalists = journalists.filter((j) => j.email !== email);
    return JSON.stringify({
      type: "success",
      message: `Journalist deleted successfully.`,
    });
  } catch (error) {
    return JSON.stringify({
      type: "error",
      message: error,
    });
  }
}

export function updateJournalist(email: text, password: text): text {
  try {
    const journalist = journalists.find((j) => j.email === email);
    if (!journalist) {
      return JSON.stringify({
        type: "error",
        message: `Journalist not found.`,
      });
    }
    journalist.password = password;
    return JSON.stringify({
      type: "success",
      message: `Journalist updated successfully.`,
    });
  } catch (error) {
    return JSON.stringify({
      type: "error",
      message: error,
    });
  }
}

export function submitArticle(email: text, title: text, content: text): text {
  const journalist = journalists.find((j) => j.email === email);
  if (!journalist) {
    return JSON.stringify({
      type: "error",
      message: "Journalist not found.",
    });
  }
  const newArticle = { title, content };

  journalist.articles && journalist.articles.push(newArticle);
  return JSON.stringify({
    type: "success",
    message: "Article submitted successfully.",
  });
}

export function getArticlesByJournalist(email: text): text {
  const journalist = journalists.find((j) => j.email === email);
  if (!journalist) {
    return JSON.stringify({
      type: "error",
      message: "Journalist not found.",
    });
  }
  if (journalist.articles && journalist.articles.length === 0) {
    return JSON.stringify({
      type: "error",
      message: "No articles found for this journalist.",
      payload: [],
    });
  }
  return JSON.stringify({
    type: "success",
    message: "Articles retrieved successfully.",
    payload: journalist.articles,
  });
}
