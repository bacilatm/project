const dictionary = [];

function addWord(event) {
    event.preventDefault();
    const word = add.value;
    if (!dictionary.includes(word)) {
        dictionary.push(word);
        const listElem = list;
        const newWord = document.createElement('li');
        newWord.textContent = word;
        listElem.appendChild(newWord);
        newWord.style.display = 'none';
        alert("You have successfully added '" + word + "' to the dictionary.");
    } else {
        alert("The word '" + word + "' is already in the dictionary.");
    }
    add.value = "";
}

function searchWord(event) {
    event.preventDefault();
    let searchedWord = search.value;
    const elements = list;
    const childElements = elements.children;
    for (let i = 0; i < dictionary.length; ++i) {
        const word = dictionary[i];
        let sameWord = 1;
        for (let j = 0; j < searchedWord.length; ++j) {
            if (word[j] !== searchedWord[j]) {
                sameWord = 0;
            }
        }
        if (sameWord !== 1 || searchedWord === "") {
            childElements[i].style.display = 'none';
        } else {
            childElements[i].style.display = 'block';
        }
    }
    if (searchedWord === 0) {
        for (let i = 0; i <= childElements.length; ++i) {
            childElements[i].style.display = 'none';
        }
    }
}
