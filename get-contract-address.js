try {
  const contract = process.argv[2]
  const address = require(`./build/contracts/${contract}.json`).networks[42].address
  
  if (address.length == 42) {
    process.stdout.write(address)
  } else {
    throw Error('Address not found in contract deployment file.')
  }
} catch (error) {
  console.error(error.message)
}