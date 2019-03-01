Simple Facture
=======

[![Travis](https://travis-ci.org/eboukamza/simple-facture.svg?branch=master)](https://travis-ci.org/eboukamza/simple-facture)
[![Coverage Status](https://coveralls.io/repos/github/eboukamza/simple-facture/badge.svg?branch=master)](https://coveralls.io/github/eboukamza/simple-facture?branch=master)

Outil pour générer des factures en pdf avec toutes les mentions obligatoires en France.

Prérequis
===

node +10.x

Installation
====

    yarn install 
ou

    npm install
    
Utilisation
====

La première fois, générer une facture démo avec la commande `npm start`
 
Après avoir lancé la commande `start` deux répertoires seront crées :
 -  `out` qui contient la facture d'exemple.
 -  Et `.data` qui contient le fichier de configuration `invoice.json` qui sert à générer la facture.

Modifier le fichier `invoice.json` avec les donnes de votre société, de votre client et le détail de la facture.

Lancer encore une fois `npm start` pour générer votre facture.
