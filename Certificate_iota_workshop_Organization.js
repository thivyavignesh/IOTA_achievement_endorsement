///////////////////////////////
// Send HELLOWORLD
///////////////////////////////

const iotaLibrary = require('@iota/core')
const Trytes = require('trytes');

const iota = iotaLibrary.composeAPI({
 provider: 'https://nodes.devnet.thetangle.org:443'
})

const address_insti =
 'HEQLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOAAAAAA'

const address_individual_1 =
 'HEQLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWOWDEN'

const address_individual_2 = 'HEQLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELNSTUDDEN'

const seed =
 'PUEOTSEITFEVEWCWBTSIZM9NKRGJEIMXTULBACGFRQK9IMGICLBKW9TTEVSDQMGWKBXPVCBMMCXWMNPDX'

function verifyInstitute(addr, name){
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

function checkInstitude(addr){

   iota
   .findTransactionObjects({ addresses: [addr] })
   .then(response => {
   //console.log(response)
   //console.log(response[0].signatureMessageFragment)
   response.sort((a,b) => (a.attachmentTimestamp > b.attachmentTimestamp) ? -1 : ((b.attachmentTimestamp > a.attachmentTimestamp) ? 1 : 0));
   var i;
   for(i=0;i<response.length;i++){

   res_msg = response[i].signatureMessageFragment
   slice_msg = res_msg.slice(0,res_msg.indexOf('99999'))
   console.log(Trytes.decodeTextFromTryteString(slice_msg))
   // console.log(Trytes.decodeTextFromTryteString(response[0].signatureMessageFragment))
   }
   })
   .catch(err => {
   console.error(err)
   })

}

function giveCertificate(addr1, addr, certificate, timesta){
   var institution = [
       {
         value: 0,
         address: addr,
         message: ''
       }
     ]
     let stringi = Trytes.encodeTextAsTryteString(certificate + ' granted to ' + addr + ' at ' + timesta + ' by ' + addr1)
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

function revokeCertificate(addr1, addr, certificate, timesta){
   var institution = [
       {
         value: 0,
         address: addr,
         message: ''
       }
     ]
     let stringi = Trytes.encodeTextAsTryteString(certificate + ' of ' + addr + ' revoked at ' + timesta + ' by ' + addr1)
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




//verifyInstitute(address_insti, 'Institution')


//checkInstitude(address_insti)



//giveCertificate(address_insti, address_individual_1, 'certificate_new_3', Date.now())

revokeCertificate(address_insti, address_individual_2, 'certificate_new_2', Date.now())
