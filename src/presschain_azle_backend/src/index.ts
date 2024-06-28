import { Canister, Opt, Record, query, text, update } from "azle";
import {
  getJournalist,
  loginJournalist,
  registerJournalist,
} from "./contracts/journalist";

export default Canister({
  registerJournalist: update([text, text], text, registerJournalist),
  loginJournalist: query([text, text], text, loginJournalist),
  getJournalist: query([text], text, getJournalist),
});
