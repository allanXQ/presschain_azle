import { Canister, Opt, Record, query, text, update } from "azle";
import {
  deleteJournalist,
  getArticlesByJournalist,
  getJournalist,
  getJournalists,
  loginJournalist,
  registerJournalist,
  submitArticle,
  updateJournalist,
} from "./contracts/journalist";

export default Canister({
  registerJournalist: update([text, text], text, registerJournalist),
  loginJournalist: query([text, text], text, loginJournalist),
  getJournalist: query([text], text, getJournalist),
  deleteJournalist: update([text], text, deleteJournalist),
  updateJournalist: update([text, text], text, updateJournalist),
  getJournalists: query([], text, getJournalists),
  submitArticle: update([text, text, text], text, submitArticle),
  getArticlesByJournalist: query([text], text, getArticlesByJournalist),
});
