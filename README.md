# token-smart-contract

Token smart contract deployer, it can use both Etherium(ERC-20) and Klaytn(KRC-20)

## Build Environment
- Solidity 0.4.24
- Truffle 4.1.15
- Node 8.17.0


## Deployment - Ethereum
1. First uncomment the deployer function corresponds to the contract you want to deploy and comment out all the others in `migrations/2_token.js` file.
2. If the project folder includes `build` folder, first delete it
3. Compile the corresponding contract as follows;
`truffle compile`
4. Make a '.env' file
```
  // Set Account's mnemonic words in Etherium network for deployer
  MNEMONICS=
  // Set your infura project secret key
  INFURA_API_KEY=
```
5. Finally deploy the contract on the network you desire (mainnet, ropsten)
`NETWORK=<network_name> npm run deploy`


## Deployment - Klaytn
1. First uncomment the deployer function corresponds to the contract you want to deploy and comment out all the others in `migrations/2_token.js` file.
2. If the project folder includes `build` folder, first delete it
3. Compile the corresponding contract as follows;
`truffle compile`
4. Make a '.env' file
```
  // Set Account's private key in Klaytn network for deployer
  PRIVATE_KEY=
```
5. Finally deploy the contract on the network you desire(cypress, baobab)
`NETWORK=<network_name> npm run deploy`

## Test
* In order to run the whole tests
`truffle test`
* In order to run only specific test file