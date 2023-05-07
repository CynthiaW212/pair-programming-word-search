const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  let find = false;
  //Check horizontal first
  if (checkWord(horizontalJoin,word)) {
    return true;
  }
  const verticalArray = getVerticalArray(letters);
  const verticalJoin = verticalArray.map(ls=> ls.join(''));
  find = checkWord(verticalJoin,word);
  return find;
};

const checkWord = (array, word) =>{
  for (let l of array) {
    if (l.includes(word)) return true;
  }
  return false;
};

const getVerticalArray = (horizontalJoin)=> {
 
  let result = [];
  for (let i = 0; i < horizontalJoin[0].length; i++) {
    let vertical = [];
    for (let j = 0; j < horizontalJoin.length; j++) {
      vertical.push(horizontalJoin[j][i]);
    }
    result.push(vertical);
  }

  return result;
};


module.exports = wordSearch;