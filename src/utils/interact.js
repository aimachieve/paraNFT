require("dotenv").config();
var Web3 = require("web3");
const contractABI = require("./_222BlackFaceContract.json");
const contractAddress = "0x9787e5ca192ae9BE424F2C25527f5A8e898B3Ca0";

export const getWeb3 = async () => {
  return new Web3(window.web3.currentProvider);
}

export const getContract = async () => {
  const web3 = await getWeb3()
  const contract = new web3.eth.Contract(contractABI, contractAddress);
  // console.log("contract=>", contract)
  return contract
}

export const getTotalSupply = async () => {
  const _222BlackFaceContract = await getContract()
  var totalSupply = await _222BlackFaceContract.methods.totalSupply().call();
  return totalSupply;
};

// export const loadTotalMintCount = async () => {
//   var message = await _222BlackFaceContract.methods.totalMint().call();
//   return message;
// };

// export const getCurrentMessage = async () => {
//   var message = await _222BlackFaceContract.methods.message().call();
//   return message;
// };

/** Connect to Metamask */
export const connectWallet = async () => {
  if (window.ethereum) {
    window.ethereum.on('chainChanged', handleChainChanged);
    function handleChainChanged(_chainId) {
      // We recommend reloading the page, unless you must do otherwise
      window.location.reload();
    }

    window.ethereum.on('accountsChanged', handleAccountsChanged);
    // For now, 'eth_accounts' will continue to always return an array
    function handleAccountsChanged(accounts) {
      if (accounts.length === 0) {
        // MetaMask is locked or the user has not connected any accounts
        console.log('Please connect to MetaMask.');
      } else if (accounts[0]) {
        // currentAccount = accounts[0];
        window.location.reload()
        // Do any other work!
      }
    }
    
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_requestAccounts"
      });
      const obj = {
        status: "👆🏽 Ready to mint NFT !",
        address: addressArray[0],
        success: true
      };
      return obj;
    } catch (err) {
      return {
        address: "",
        status: "😥 " + err.message,
        success: false
      };
    }
  } else {
    return {
      address: "",
      success: false,
      status: (
        <span>
          <p>
            {" "}
            🦊{" "}
            <a
              rel="noreferrer"
              target="_blank"
              href={`https://metamask.io/download.html`}
            >
              You must install Metamask, a virtual Ethereum wallet, in your
              browser.
            </a>
          </p>
        </span>
      )
    };
  }
};

export const getCurrentWalletConnected = async () => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_accounts"
      });
      if (addressArray.length > 0) {
        return {
          address: addressArray[0],
          status: "👆🏽 Ready to mint NFT !"
        };
      } else {
        return {
          address: "",
          status: "🦊 Connect to Metamask using the top right button."
        };
      }
    } catch (err) {
      return { address: "", status: "😥 " + err.message };
    }
  } else {
    return {
      address: "",
      status: (
        <span>
          <p>
            {" "}
            🦊{" "}
            <a
              rel="noreferrer"
              target="_blank"
              href={`https://metamask.io/download.html`}
            >
              You must install Metamask, a virtual Ethereum wallet, in your
              browser.
            </a>
          </p>
        </span>
      )
    };
  }
};

export const getCurrentWalletBalance = async (address) => {
  const web3 = await getWeb3()
  const balance = await web3.eth.getBalance(address)
  console.log("interact: balance of walelt => ", balance)
  return web3.utils.fromWei(balance);
};
