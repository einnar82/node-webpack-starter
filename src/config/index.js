import * as dotenv from "dotenv";
import Web3 from 'web3';
import Product from '../abis/Product.json'

dotenv.config();

const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
const productNetworkId = async () => await web3.eth.net.getId()
const productNetworkData = async () => Product.networks[await productNetworkId()];
const productContractAddress = async () => await productNetworkData.address;
const productContract = async () => new web3.eth.Contract(Product.abi, await productContractAddress());

export {
    web3,
    productContract,
    productNetworkData
}