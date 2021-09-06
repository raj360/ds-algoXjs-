/**Challenges-01

There are n lines of people waiting for food, and the number of people
wait- ing in each line is known. Then, each of m new people will arrive,
and they will join the shortest line (the line with the fewest number of people). 
Our task is to determine the number of people in each line that each of the m people joins.
*/

const m = 4;

const lines = [2, 5, 3];

const n = lines.length;

const shortestLineIndex = (line:[], n)=> {
    let shortest = 0;
    
    for(let i=1; i<n; i++) {
       if (line[i] > lines[shortest]) {
           shortest = i;
       }
    }
    
    return shortest;
}


const solution = (lines:[], n,  m){

  for (let i = 0; i < m; i++) {
    let shortest = shortestLineIndex(lines, n);
    console.log("\n",shortest);
    lines[shortest]++;
  }

}


