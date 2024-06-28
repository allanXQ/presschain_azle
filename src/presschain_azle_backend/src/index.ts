import { Canister, Opt, Record, query, text, update } from "azle";
import {
  deleteJournalist,
  getJournalist,
  getJournalists,
  loginJournalist,
  registerJournalist,
  updateJournalist,
} from "./contracts/journalist";

export default Canister({
  registerJournalist: update([text, text], text, registerJournalist),
  loginJournalist: query([text, text], text, loginJournalist),
  getJournalist: query([text], text, getJournalist),
  deleteJournalist: update([text], text, deleteJournalist),
  updateJournalist: update([text, text], text, updateJournalist),
  getJournalists: query([], text, getJournalists),
});
