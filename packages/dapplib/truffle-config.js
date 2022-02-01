require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom kitten bone tooth finger deliver remain social include prize olympic giant'; 
let testAccounts = [
"0xdc5e13646d39c78bcc0780c249352f24ee1457c614e029b3b2fcbc654dca18ff",
"0x3074288bbd219a237ba4f92068f63952d34f4cbb9d7f8556ec2455b743d9021b",
"0xc4cdefc82706f84814f73ba449ec8716617334d14162e1f75f7daa4d8cec410f",
"0x9b988e0d98953f7807d4a6ec00a3aa46ec4e0206d4786456faea8f5fc297e237",
"0xfc81f2b0b2c482d330d2bc21532d361313121c0311e52435c1f99584fb1552e4",
"0xf7a8ed997b27bc471228cb74605d8ddf5c241eb6c36a0cc5c1541b5f230298a3",
"0x1c7c17728ad9f56d45c51a9fa45a43904c7da0162505e9fd4966810cfecf5e51",
"0x785ce4fe5c81496ed86e0aeb462b9dc965122cd8d7fa73ed714b42c244a0f4ab",
"0x4b089e14c8ce8989263c4d74db1c6ba9820c5c846f58d7b7a1cb9f96033a1c4a",
"0x2d0719b177f5dbdac833573089f0cc98fa9eef91f877ab79b59671f35e28a8fe"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


