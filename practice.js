function multiplyBiggerNumByTwo(num1, num2) {
  let bigNum = bigOrSmall(num1, num2, "big");
 
  return bigNum * 2
}

function divideBiggerNumByThree(num1, num2) {
  let bigNum = bigOrSmall(num1, num2, "big");

  return bigNum / 3
}

function eatMostTacos(sum1, sum2) {
  let bigNum = bigOrSmall(sum1, sum2, "big");
  
  return `I ate ${bigNum} tacos.`;
}

function adoptSmallerDog(weight1, weight2) {
  let smallDog = bigOrSmall(weight1, weight2)

  return `I adopted a dog that weighs ${smallDog} pounds.`;
}

function bigOrSmall( value1, value2, indicator ) {
  if(indicator === "big")
    return Math.max(value1, value2)

  return Math.min(value1, value2)
}

/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  multiplyBiggerNumByTwo,
  divideBiggerNumByThree,
  eatMostTacos,
  adoptSmallerDog
};