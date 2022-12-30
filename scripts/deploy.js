const hre = require("hardhat");

async function getBalances(address) {
  const balance = await hre.ethers.provider.getBalance(address);
  return hre.ethers.utils.formatEther(balance);
}

async function consoleBalance(addresses) {
  let counter = 0;
  for (const address of addresses) {
    console.log(`Address ${counter} balance: `, await getBalances(address));
    counter++;
  }
}

async function consoleMemos(memos) {
  for (const memo of memos) {
    const timestamp = memo.timestamp;
    const name = memo.name;
    const from = memo.from;
    const message = memo.message;

    console.log(`At ${timestamp}, name ${name}, address ${from}, message ${message}`);
  }
}

async function main() {

  const [owner, from1, from2, from3] = await hre.ethers.getSigners();

  const BuyMeCoffee = await hre.ethers.getContractFactory("BuyMeCoffee");
  const buyMeCoffee = await BuyMeCoffee.deploy();

  await buyMeCoffee.deployed();

  console.log(
    `BuyMeCoffee contract deployed to ${buyMeCoffee.address}`
  );

  const addresses = [owner.address, from1.address, from2.address, from3.address];

  console.log("Before buying coffee");
  await consoleBalance(addresses);

  const amount = { value: hre.ethers.utils.parseEther("1") }

  await buyMeCoffee.connect(from1).buy("from1", "Hello", amount);
  await buyMeCoffee.connect(from2).buy("from2", "Hi", amount);
  await buyMeCoffee.connect(from3).buy("from3", "Thank you!!", amount);

  console.log("After buying coffee");
  await consoleBalance(addresses);

  const memos = await buyMeCoffee.getMemos();
  await consoleMemos(memos);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
