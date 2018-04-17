## Description
This project creates models that would go into creating a filled out March Madness Bracket.

Picks, scores and teams are saved as data input.
/src/data/picks.js - The bracket picks
/src/data/scores.js - The scores
/src/data/teams.js - The teams and their seeding

Run the test suite to fill out the bracket and test the required methods.

## Getting Started
NVM was used to manage node and yarn versions.  You will need to install the versions of yarn and node set in the package.json file, engines section.

    nvm use

To install dependencies:

    yarn

If you would like to add additional dependencies, simply run:

    yarn add --save <package-name>
    yarn add --save --dev <package-name>

To run the test suite:

    yarn test

