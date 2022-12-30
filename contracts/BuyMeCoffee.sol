// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract BuyMeCoffee {
    address payable owner;

    struct Memo {
        string name;
        string message;
        uint256 timestamp;
        address from;
    }

    Memo[] memos;

    constructor() {
        owner = payable(msg.sender);
    }

    function buy(string memory _name, string memory _message) public payable {
        require(msg.value > 0, "Please pay greater than 0 ether");

        owner.transfer(msg.value);
        memos.push(Memo(_name, _message, block.timestamp, msg.sender));
    }

    function getMemos() public view returns (Memo[] memory) {
        return memos;
    }
}
