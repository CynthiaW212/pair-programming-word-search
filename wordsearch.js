const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  let find = false;
  let bkWord = word.split("").reverse().join('');
  console.log("--backword key words is ---", bkWord);
  //Check horizontal first
  if (checkWord(horizontalJoin,word) || checkWord(horizontalJoin,bkWord)) {
    return true;
  }
  const verticalArray = getVerticalArray(letters);
  const verticalJoin = verticalArray.map(ls=> ls.join(''));
  if (checkWord(verticalJoin, word) || checkWord(verticalJoin,bkWord)) {
    return true;
  }
    
  return find;
};

const checkWord = (array, word) =>{
  for (let l of array) {
    if (l.includes(word)) return true;
  }
  return false;
};

const getVerticalArray = (horizontalJoin)=> {
 
  const result = [];
  for (let i = 0; i < horizontalJoin[0].length; i++) {
    const vertical = [];
    for (let j in horizontalJoin) {
      vertical.push(horizontalJoin[j][i]);
    }
    result.push(vertical);
  }

  return result;
};


module.exports = wordSearch;