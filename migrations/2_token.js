const Token = artifacts.require("./Token.sol");

const name = '';
const symbol = '';
const decimal = 18;
const initialSupply = 1000000000;

// Deployer
const TokenContractDeployer = (deployer, network) => {
  if (
    network === 'ropsten' || network === 'mainnet' ||  // Etherium 
    network === 'baobab' || network === 'cypress'      // klaytn
  ) {                                              
    deployer
      .deploy(Token, name, symbol, decimal, initialSupply)
      .then( _ => console.log('Token contract has been deployed successfully.'));
  } else {
    throw new Error('Unknown network!');
  }
};

/*************************************************************/


module.exports = (deployer, network) => {
  /**
   * Token contract deploy.
   */
  TokenContractDeployer(deployer, network);
}
