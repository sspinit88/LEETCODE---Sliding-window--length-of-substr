/*
  вычислить длину подстроки, которая будет содержать только один нуль
*/


const findLength = function(s) {
  const length = s.length;
  let left = 0;
  let curr = 0;
  let res = 0;

  for(let right = 0; right < length; right++) {

    if(s[right] == '0') {
      curr++;
    }

    while(curr > 1) {
      
      if(s[left] == '0') {
        curr -= 1;
      }

      left++;
    }

    res = Math.max(res, right - left + 1);
  }

  return res;
};

console.log(findLength('11001011')); /// 4
console.log(findLength('1101100111')); /// 5
