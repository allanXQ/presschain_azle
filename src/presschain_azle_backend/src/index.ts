import { Canister, bool, query, text, update } from "azle";
import { registerJournalist } from "./contracts/journalist";

export default Canister({
  greet: query([text], text, (name) => {
    return `Hello, ${name}!`;
  }),
  registerJournalist: update([text, text], bool, registerJournalist),
});
