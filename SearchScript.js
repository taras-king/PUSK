class Bucket {
    constructor(str, ref) {
        this.str = str;
        this.ref = ref;
    }
}

class InfoTable {
    constructor() {
        this.searchTable = [];
    }

    insert(str, ref) {
        const index = str.toLowerCase().codePointAt(0)-1000;        
        if (!this.searchTable[index]) {
            this.searchTable[index] = [];
        }
        this.searchTable[index].push(new Bucket(str, ref));
    }

    find(str) {
        const index = str.toLowerCase().codePointAt(0)-1000;
        return this.searchTable[index]||[];
    }
}

const infoTable = new InfoTable();
const myInput = document.getElementById('searchInput');
const searchPull = document.getElementById('searchPull');

fetch('./NameMathods.json')
    .then((response) => response.json())
    .then((json) => {
        for (let i = 0; i < json.length; i++) {
            infoTable.insert(json[i]['name'], json[i]['ref']);
        } 
    });

myInput.addEventListener('input', function(event) {
    var Value = event.target.value.trim();


    var inputValue = Value.toLowerCase();


    if (inputValue.length === 0 || /^\s*$/.test(inputValue)) {
        searchPull.style.display = 'none';
        return;
    }
    
    let Arr = infoTable.find(inputValue);
    let Array = [];
    if (inputValue.length > 0 && Arr.length > 0) {
        searchPull.style.display = 'block';
        searchPull.innerHTML = '';
        for (let index = 0; index < Arr.length; index++)
        {
            let string = Arr[index].str.toLowerCase();
            if (string.startsWith(inputValue))
                {
                    Array.push(Arr[index]);
                }
        }
        for (let i = 0; i < Array.length; i++) {
            displayResults(Array[i], inputValue);
        }              
            
    } else {
        searchPull.style.display = 'none'; 
    }
});

function displayResults(result, inputValue) {
    const SelectDiv = document.createElement('div');
    SelectDiv.classList.add('selDiv');
    searchPull.appendChild(SelectDiv);
    const SelectSearch = document.createElement('a');
    SelectSearch.classList.add('selSearch');
    SelectSearch.href = result.ref;
    SelectDiv.appendChild(SelectSearch);
    for (let i = 0; i < result.str.length; i++) {
        const span = document.createElement('span');
            span.textContent = result.str[i];
            if (span.textContent === " ") {
                let space = "&nbsp;";
                span.innerHTML = space;
            }
        if (i < inputValue.length) {
            span.classList.add('blackText');
        } else {
            span.classList.add('greyText');
        }
        SelectSearch.appendChild(span);
    }
}