// primo progetto: creare una pioggia di caratteri
let containers = document.querySelectorAll('.matrix-container6');

function generateMatrix() { 
  for (let container of containers) { 
    for (let i = 0; i < 7; i++) { 
      let column = document.createElement('div');
      column.classList.add('column'); 
      column.style.left = (i * 15) + 'px'; 
    
      for (let j = 0; j < 10; j++) { 
        let char = document.createElement('span'); 
        char.classList.add('char'); 
        char.textContent = Math.round(Math.random()) ? '1' : '0'; 
        char.style.marginTop = (j * 15) + 'px'; 
        column.appendChild(char); 
      }
    
      container.appendChild(column);
    }
  }
}




let matrixInterval = setInterval(generateMatrix, 3700);

// per fermare la pioggia di caratteri, esegui:
clearInterval(matrixInterval);



// prova colonne

// let containers = document.querySelectorAll('.matrix-container');

// function generateMatrix() {
//   for (let container of containers) {
//     let containerClass = container.classList[1];
//     let columnsCount = 0; 

//     if (containerClass === 'matrix-container-1') {
//       columnsCount = 20;
//     } else if (containerClass === 'matrix-container-2') {
//       columnsCount = 16;
//     } else if (containerClass === 'matrix-container-3') {
//       columnsCount = 13;
//     }

//     for (let i = 0; i < columnsCount; i++) {
//       let column = document.createElement('div');
//       column.classList.add('column');      
//       column.style.left = (i * parseInt(column.style.width)) + 'px'; 
    
//       for (let j = 0; j < 10; j++) {
//         let char = document.createElement('span');
//         char.classList.add('char');
//         char.textContent = Math.round(Math.random()) ? '1' : '0';
//         char.style.marginTop = (j * 15) + 'px';
//         column.appendChild(char);
//       }
    
//       container.appendChild(column);
//     }
//   }
// }

// let matrixInterval = setInterval(generateMatrix, 1700);
