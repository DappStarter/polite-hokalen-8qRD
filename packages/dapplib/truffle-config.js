require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea kiwi bottom trip fan reflect sad history hockey clock metal gauge'; 
let testAccounts = [
"0xf3ffa5cdff9a717f85a85a46725a4e8e5f050c66affef96ee7215a8a943f8f43",
"0xac6dd103966f10e8f0b6196053cd6a302d4d504a24ac0f28519831fcb537e890",
"0x911eb6e4964999a079f57f5649eb14f117cc87c71c9a90b3832aca9f3a75e740",
"0x0a140c0c2db5522131319fa58b6c5d231c4bac21b44de1c8563a9bdcffde463c",
"0x4faa9b523089e8d5275509c2804ad3935923f95392091b30650230324d5c10af",
"0x0d830b736c6d347f63f5a1ff0946a691b80a6a1dcffb274ed3f6f7f3d54a591e",
"0xcb2d93c377c07a8e3980c41b409dbaea378217235132a3a6af1b8b2a5488800a",
"0x1e0bdb5e5285c487010a5e17136d28be6edddc1f21bfb73826883879abb116fd",
"0x6ae62a7434be36f9cf1ff78043a5ee350ed382bf879dd9faa66f2a7a1b0966b0",
"0x05d203803c1a4e2e094851cdcf38b97dc9dd8d5a6f5e1ed04c49ed84d9cf6c29"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

