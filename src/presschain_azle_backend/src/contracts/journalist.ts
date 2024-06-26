import { Canister, query, update } from "azle";

interface Journalist {
  id: string;
  name: string;
  email: string;
  registeredAt: bigint;
}

export default Canister({
  journalists: [] as Journalist[],

  registerJournalist: update((name: string, email: string) => {
    const newJournalist: Journalist = {
      id: `j-${this.journalists.length + 1}`,
      name,
      email,
      registeredAt: BigInt(Date.now()),
    };
    this.journalists.push(newJournalist);
    return newJournalist;
  }),

  getJournalists: query(() => {
    return this.journalists;
  }),
});
