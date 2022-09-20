const animals = [
    ['🐭', 'mouse', 'Jerry'],
    ['🐹', 'hamster', 'Biscuit'],
    ['🐰', 'rabbit', 'Bugs'],
    ['🦊', 'fox', 'Mrs. Fox'],
    ['🐻', 'bear', 'Paddington']
  ];

  const food = [
    ['🍎','apple',10],
    ['🍐','pear',12],
    ['🍊','tangerine',15],
    ['🍋','lemon',5],
    ['🍌','banana',7]
  ];

  const getInfo = [animals,food];

function renderAnimalsTable(arr){
    let TRs = [];
    
    for(let i=0; i<arr.lenght; i++){
      TRs.push(`<tr><td>${arr[i]}</td></tr>`);
    }

     return `<table>${TRs.join(``)}</table>`;
}

function renderArrayofTables(arr){
  let tables = [];
  for( let i=0; i<arr.length; i++){
   renderAnimalsTable(getInfo[i]);

  }

  return tables.join(``);
}
 document.write(renderAnimalsTable(getInfo));
