

export function getRandomThrow() {
   let compThrow = Math.ceil(Math.random()*3);
console.log(compThrow);
   let convertToRPS;

   if (compThrow === 1) {
       convertToRPS = 'rock';
   }
   else if (compThrow === 2) {
       convertToRPS = 'paper';
   } else {
       convertToRPS = 'scissors';
   }

   return convertToRPS;
}