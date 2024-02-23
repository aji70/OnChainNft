import { ethers } from "hardhat";

async function main() {
  const initialOwner = "0x09c5096AD92A3eb3b83165a4d177a53D3D754197";

  const lock = await ethers.deployContract("MyToken", [initialOwner]);

  await lock.waitForDeployment();

  console.log(` deployed to ${lock.target}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
