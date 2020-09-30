

export function getRandomThrow() {
   const compThrow = Math.ceil(Math.random()*3);

   let convertToRPS;

   if (compThrow === 1) {
       convertToRPS = 'rock';
   }
   if (compThrow === 2) {
       convertToRPS = 'paper';
   } else {
       convertToRPS = 'scissors';
   }

   return convertToRPS;
}