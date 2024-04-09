const pulsBox = document.querySelector('.barrapuls');
const contBox = document.querySelector('.boxscreen');


function creaImm() {
    // Rimuove eventuali immagini già presenti nel box verde
    pulsBox.innerHTML = '';

    // Crea pulsante new per l'immagine edit.png
    const boxImage2 = document.createElement('img');
    boxImage2.src = 'edit.png';
    boxImage2.alt = 'Puls edit';
    boxImage2.classList.add('puls-edit');

    // Imposta le dimensioni dell'immagine new.png
    boxImage2.style.marginLeft = '350px';

    // Aggiunge l'immagine spese.png al box verde
    pulsBox.appendChild(boxImage2);

    // Aggiungi l'event listener all'immagine appena creata
    boxImage2.addEventListener('click', impSpe1);


    // Crea un elemento immagine per l'immagine add.png
        const boxImage3 = document.createElement('img');
        boxImage3.src = 'new.png';
        boxImage3.alt = 'Puls add';
        boxImage3.classList.add('puls-add');
    
        // Imposta le dimensioni dell'immagine add.png
        boxImage3.style.marginLeft = '50px';
    
        // Aggiunge l'immagine add.png al box verde
        pulsBox.appendChild(boxImage3);
    
        // Aggiungi l'event listener all'immagine appena creata
        boxImage3.addEventListener('click', impSpe2);
}

function impSpe() {
        contBox.innerHTML = '';
    
        // Crea la tabella
        const table = document.createElement('table');
        table.classList.add('table2'); // Aggiungi la classe per lo stile CSS
      
        // Crea il corpo della tabella con due righe e tre colonne vuote
        const tbody = document.createElement('tbody');
      
        // Prima riga
        const row1 = document.createElement('tr');
        const cell11 = document.createElement('td');
        const cell12 = document.createElement('td');
        const cell13 = document.createElement('td');
        row1.appendChild(cell11);
        row1.appendChild(cell12);
        row1.appendChild(cell13);
      
        // Seconda riga
        const row2 = document.createElement('tr');
        const cell21 = document.createElement('td');
        const cell22 = document.createElement('td');
        const cell23 = document.createElement('td');
        row2.appendChild(cell21);
        row2.appendChild(cell22);
        row2.appendChild(cell23);
      
        // Aggiungi righe al corpo della tabella
        tbody.appendChild(row1);
        tbody.appendChild(row2);
      
        // Aggiunge la tabella al div boxscreen
        table.appendChild(tbody);
        contBox.appendChild(table);
    }
  
function impSpe1() {
        contBox.innerHTML = '';
    }

    function impSpe2() {
        contBox.innerHTML = '';
    
        // Crea il testo "Data" e l'input per la data
        const labelDate = document.createElement('label');
        labelDate.textContent = 'Data';
        labelDate.style.marginRight = '10px';
        const dateInput = document.createElement('input');
        dateInput.setAttribute('type', 'date');
    
        // Crea il testo "Categoria" e il menu a tendina
        const labelCategory = document.createElement('label');
        labelCategory.textContent = 'Categoria';
        labelCategory.style.marginRight = '10px'; // Aggiunge uno spazio tra il testo e il menu a tendina
        const categorySelect = document.createElement('select');
        const categories = ['Cibo', 'Intrattenimento', 'Casa', 'Auto'];
        categories.forEach(category => {
            const option = document.createElement('option');
            option.value = category.toLowerCase();
            option.textContent = category;
            categorySelect.appendChild(option);
        });
    
        // Crea il testo "Importo" e l'input per l'importo
        const labelAmount = document.createElement('label');
        labelAmount.textContent = 'Importo';
        labelAmount.style.marginRight = '10px'; // Aggiunge uno spazio tra il testo e l'input
        const amountInput = document.createElement('input');
        amountInput.setAttribute('type', 'number');
        amountInput.setAttribute('step', '0.01'); // Consente solo valori numerici con due decimali
    
        // Aggiunge il testo e gli input al boxscreen
        contBox.appendChild(document.createElement('br'));
        contBox.appendChild(document.createElement('br'));
        contBox.appendChild(labelDate);
        contBox.appendChild(dateInput);
        contBox.appendChild(document.createElement('br'));
        contBox.appendChild(document.createElement('br'));
        contBox.appendChild(labelCategory);
        contBox.appendChild(categorySelect);
        contBox.appendChild(document.createElement('br'));
        contBox.appendChild(document.createElement('br'));
        contBox.appendChild(labelAmount);
        contBox.appendChild(amountInput);
    }
    

    

// Gestione del clic sull'immagine spese.png nel box rosso
const boxImage1 = document.querySelector('.text');
boxImage1.addEventListener('click', creaImm);


// Gestione del clic su dettaglio funzionalità spese
const boxText1 = document.querySelector('.text');
boxText1.addEventListener('click', impSpe);

// Gestione del clic su pulsante new
const PulsNew = document.querySelector('.puls-edit');
PulsNew.addEventListener('click', impSpe1);

// Gestione del clic su pulsante new
const PulsAdd = document.querySelector('.puls-add');
PulsAdd.addEventListener('click', impSpe2);

