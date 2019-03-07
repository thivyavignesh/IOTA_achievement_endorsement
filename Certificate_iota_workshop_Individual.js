const iotaLibrary = require('@iota/core')
const Trytes = require('trytes');

const iota = iotaLibrary.composeAPI({
 provider: 'https://nodes.devnet.thetangle.org:443'
})

const address_individual_1 =
 'HEQLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWOWDEN'

const address_individual_2 = 'HEQLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELNSTUDDEN'

const seed =
 'PUEOTSEITFEVEWCWBTSIZM9NKRGJEIMXTULBACGFRQK9IMGICLBKW9TTEVSDQMGWKBXPVCBMMCXWMNPDX'



function verifyStudent(addr, name){
   var institution = [
       {
         value: 0,
         address: addr,
         message: ''
       }
     ]
     let stringi = Trytes.encodeTextAsTryteString(name + ': ' + addr )
     console.log(stringi)
     console.log(Trytes.decodeTextFromTryteString(stringi))
     institution[0].message = stringi
   iota
 .prepareTransfers(seed, institution)
 .then(trytes => iota.sendTrytes(trytes, (depth = 3), (mwm = 9)))
 .then(bundle => {
   console.log(bundle)
 })
 .catch(err => {
   console.error(err)
 })
}

function checkStudent(addr){

   iota
   .findTransactionObjects({ addresses: [addr] })
   .then(response => {
   //console.log(response)
   response.sort((a,b) => (a.attachmentTimestamp > b.attachmentTimestamp) ? -1 : ((b.attachmentTimestamp > a.attachmentTimestamp) ? 1 : 0));
   var i;
   for (i = 0; i < response.length; i++) {
       //console.log(response[i].signatureMessageFragment)
       res_msg = response[i].signatureMessageFragment
       slice_msg = res_msg.slice(0,res_msg.indexOf('99999'))
       //console.log(slice_msg)
       console.log(Trytes.decodeTextFromTryteString(slice_msg))
   }
   // console.log(Trytes.decodeTextFromTryteString(response[0].signatureMessageFragment))
   })
   .catch(err => {
   console.error(err)
   })

}


//verifyStudent(address_individual_1, 'Tong')
//verifyStudent(address_individual_2, 'Vignesh')
//checkStudent(address_individual_2)
