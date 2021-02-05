'use strict';

const fs = require('fs').promises;

fs.readFile('./text.txt', 'utf-8').then((data) =>
  fs.writeFile('./new.txt', `${data}\nHACKERMANS I\`m in`, 'utf-8')
);

// const {MyMath} = require('./MyMath.js');
// const {Hackermans} = require('./Hackermans.js');

// const res= MyMath.sum(1,2,3,4,5);

// Hackermans.hack();

// console.log(res);
