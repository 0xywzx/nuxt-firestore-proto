var Web3 = require('web3');
var flibra = require('./FLibra.json');

async function setContract() {
  var web3 = await new Web3(new Web3.providers.HttpProvider('http://0.0.0.0:8545'));
  let networkId = await web3.eth.net.getId();
  let flibraContract = await new web3.eth.Contract(
    flibra.abi,
    flibra.networks[networkId].address
  );

  var event = await flibraContract.PostItem();

  //イベント監視
  event.watch(function (error, result) {
    console.log('watching "PostItem" event!');
    if (!error)
      console.log(result);
  });
}

setContract()

