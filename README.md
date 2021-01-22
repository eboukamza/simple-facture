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

    yarn global add simple-facture 
ou

    npm install --global simple-facture
    
Utilisation
====

Lancer une première fois pour initialiser `simple-facture`

    $ simple-facture

Suite au lancement le repertoire courant contiendra :
 -  le repertoire `out` qui sera l'emplacement des factures générées et contiens la facture d'exemple.
 -  et le fichier de configuration `invoice.json` qui sert à générer la facture.

Modifier le fichier `invoice.json` avec les donnes de votre société, de votre client et le détail de la facture.

Lancer encore une fois `simple-facture` pour générer votre facture.

Example
----

<a href="https://storage.googleapis.com/simple-facture/example-facture.jpeg" alt="Exemple facture" target="_blank">
  <img src="https://storage.googleapis.com/simple-facture/example-facture.jpeg" height=160px/>
</a>
