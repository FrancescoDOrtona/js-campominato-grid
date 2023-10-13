# Campo minato
- Definisco la struttra html con classi e regole css
    - creo la struttura html
    - includo un tag div con una classe grid a cui do il grid con le colonne e righe che deve avere il nostro campo minato
- Creo la griglia per il campo minato
        - Dichiaro le variabili
        - Recupero gli elementi che mi servono dal DOM
    - Dichiaro un ciclo for con il quale inserisco gli elementi nel DOM in base a quanti ne devo inserire
        - for (let i = 0; i < 100; i++)
        - Stampo l'elemento nel DOM
- Aggiungo l'opzione di creazione della griglia al click del bottone
    - Creo una funzione che mi crea e resetta la griglia
    - Aggiungo un event Listener in cui inserisco il ciclo for della griglia
- Aggiungo che al click su ogni casella viene aggiunto un colore di sfondo
    - Recupero tutte le caselle create
    - Creo un ciclo per le caselle del DOM
    - Aggiungo un event listener per ogni casella del DOM
        - Assegno la classe che da il colore di sfondo al click
     
