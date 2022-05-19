// 1 - Dada uma matriz, transforme em um array.
const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  
  function flatten() {
    const newArray = [];
      arrays.reduce((acc, item)=> newArray.push(acc, item));
    return newArray;
  };

  console.log(flatten(arrays));
