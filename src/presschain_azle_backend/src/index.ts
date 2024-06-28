import { Canister, Opt, Record, query, text, update } from "azle";
import { registerJournalist } from "./contracts/journalist";

export default Canister({
  greet: query([text], text, (name) => `Hello, ${name}!`),
  registerJournalist: update([text, text], text, registerJournalist),
});
