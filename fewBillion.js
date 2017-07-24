var reward = 0.01;

for ( var d = 2; d <= Infinity; d++ ){
  reward = reward*2;
  if (reward >= 1000000000)
  {break;}
}

console.log(d);
console.log(reward);
