const { expect } = require("chai");
const { ethers } = require("hardhat");

const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), "ether");
};

describe("Escrow", () => {
  it("save addresses", async () => {
    const RealEstate = await ethers.getContractFactory("RealEstate");
    realEstate = RealEstate.deploy();

    console.log(realEstate.address);
  });
});
