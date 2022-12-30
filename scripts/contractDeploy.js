const hre = require("hardhat");

async function main() {

  const BuyMeCoffee = await hre.ethers.getContractFactory("BuyMeCoffee");
  const buyMeCoffee = await BuyMeCoffee.deploy();

  await buyMeCoffee.deployed();

  console.log(
    `BuyMeCoffee contract deployed to ${buyMeCoffee.address}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
