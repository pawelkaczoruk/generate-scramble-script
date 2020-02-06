function getScramble() {
  const span = document.getElementById('scramble-alg');

  event.preventDefault();
  span.innerText = generateScramble().join(' ');
}

function generateScramble() {
  let scramble = [],
      randSuffix,
      suffix,
      letter,
      randLetter,
      prev1Letter,
      prev2Letter,
      randGroup,
      prevGroup;
  const length = Math.floor(19 + Math.random() * 6);

  for(let i=0; i<length; i++) {
    randSuffix = Math.floor(Math.random() * 3);

    // generate letter
    do {
      randLetter = Math.floor(Math.random() * 2);
      randGroup = Math.floor(Math.random() * 3);

      switch(randGroup) {
        case 0: letter = randLetter === 0 ? 'U' : 'D'; break;
        case 1: letter = randLetter === 0 ? 'F' : 'B'; break;
        case 2: letter = randLetter === 0 ? 'R' : 'L'; break;
      }

    } while(letter === prev1Letter || (letter === prev2Letter && randGroup === prevGroup));

    // determine suffix
    suffix = randSuffix === 0 ? '' : randSuffix === 1 ? '2' : '\'';

    // save previous and second previous letter
    if(i>1) prev2Letter = prev1Letter;
    prev1Letter = letter;
    prevGroup = randGroup;

    // apply new letter with suffix
    scramble.push(`${letter}${suffix}`)
  }
  
  return scramble;
}