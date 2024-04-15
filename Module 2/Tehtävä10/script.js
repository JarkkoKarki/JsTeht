const numCandidates = parseInt(prompt("What is the number of candidates?"));
let candidates = [];

for (let i = 0; i < numCandidates; i++) {
  const name = prompt(`Name for candidate ${i + 1}`);
  candidates.push({name: name, votes: 0});
}

console.log("List of candidates")
for (let i=0; i < numCandidates; i++) {
  console.log(`${i + 1}. ${candidates[i].name}`)
}


const voterCount = parseInt(prompt("How many voters?"));

for (let i = 0; i < voterCount; i++) {
  const vote = prompt(
    `Voter ${i +
    1}, Enter the candidate's name you are voting for (Empty for empty vote):`);
  const candidateName = vote.trim();

  if (candidateName === "") {
    console.log("Empty vote")
    continue;
  }
  const candidateIndex = candidates.findIndex(
    candidate => candidate.name.toLowerCase() === candidateName.toLowerCase());

  if (candidateIndex !== -1) {
    candidates[candidateIndex].votes++;
    console.log(`Vote for ${candidateName} recorded`);
  } else {
    console.log(`Invalid ${candidateName}`)
  }
}

candidates.sort((a, b) => b.votes - a.votes);

console.log(`The winner is ${candidates[0].name} with ${candidates[0].votes} votes.`)

console.log("Results:");
candidates.forEach(candidate => {
  console.log(`${candidate.name}: ${candidate.votes} votes`);
});