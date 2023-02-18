function findHeavyBall(balls) {
// fukncja przyjmująca dwie grupy piłek w celu porównania ich wag
    function compare(group1, group2) {
      let sum1 = group1.reduce((acc, ball) => acc + ball, 0); 
      let sum2 = group2.reduce((acc, ball) => acc + ball, 0);
      return sum1 > sum2 ? group1 : group2;
    }
  // fukncja rekurencyjna
    function search(balls) {
      if (balls.length === 1) return balls[0];
  
      let mid = Math.floor(balls.length / 2);
      let group1 = balls.slice(0, mid);
      let group2 = balls.slice(mid);
      let heavyGroup = compare(group1, group2);
      return search(heavyGroup);
    }
  
    return search(balls);
  }
  
  let balls = [1, 2, 1, 1, 1, 1, 1, 1];
  let heavyBall = findHeavyBall(balls);
  console.log(`Piłka o największej wadze znajduje się na indeksie ${balls.indexOf(heavyBall)}.`); // funkcjaindexOf szukająca indeksu najcięższej piłki