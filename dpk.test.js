const { deterministicPartitionKey } = require("./dpk");
describe("deterministicPartitionKey", () => {
  const mockPartitionKey = {}

  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });
  it("Returns a hash when the event contain a partition key with lenght < 256", () => {
    const trivialKey = deterministicPartitionKey({partitionKey: '243241243'});
    expect(trivialKey).toBe("243241243");
  });
  it("Returns a hash when the event contain a partition key with lenght > 256", () => {
    const trivialKey = deterministicPartitionKey({partitionKey:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."});
    
    expect(trivialKey).toBe("0e861535e9a92bc92266bb94769ef034af43ec35ccdaf2b9e4ed57cdf92cf40f318b62a1df766106fec3263f1371484794793d1571fabad052df43ad2e4d72c3");
  });
});
