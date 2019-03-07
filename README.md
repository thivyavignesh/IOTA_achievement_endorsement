# Achievement Endorsement DApp

This is an Achievement Endorsement System on Iota blockchain. (developed during USC Blockchain Hackathon 2019)

## Goal

Resume is a very important component for employers to evaluate applicants for a position. 
However, there are problems where people cheat on their resume by showing fake educational or professional experience. 
It is hard for recruiters to verify all experience for each candidate. 
Thus, the goal of this Decentralized application on Iota tangle is to create a system that can help with the hiring process using the Blockchain technology.

## System Implementation

The system is implemented in JAVA as well as Javascript. Both versions have the same functionality.
The javascript version is explained here.
The link to the JAVA version is : https://github.com/yangfangbosco/CertificateManagementSystem

### Code Execution

```bash
git clone https://github.com/thivyavignesh/IOTA_achievement_endorsement.git
cd IOTA_achievement_endorsement
npm i
node Certificate_iota_workshop_Individual.js
node Certificate_iota_workshop_Organization.js
```

### Code Explanation

All the outputs are displayed in the console. However, this code can be integrated with an user interface with slight tweaks.

Certificate_iota_workshop_Organization.js:

Function verifyInstitute: To add the blockchain address and the corresponding name of the organisation to the blockchain.
Function checkInstitude: To find the name of the organization for the associated blockchain address.
Function giveCertificate: To endorse certificate/achievement of an individual by the organization responsible.
Function revokeCertificate: To revoke previously endorsed certificate/achievement of an individual by the organization responsible.

Certificate_iota_workshop_Individual.js:

Function verifyStudent: To add the blockchain address and the corresponding name of the individual to the blockchain.
Function checkStudent: To find the name of the individual for the associated blockchain address.
