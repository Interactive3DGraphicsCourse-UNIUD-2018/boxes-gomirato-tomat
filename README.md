# Modeling and rendering with boxes - Gomirato, Tomat

![preview](screenshot/newTexture2.png "project preview")

## Note

E' stato riscontrato che, nei calcolatori dotati di schede video non sufficientemente potenti, le animazioni, in particolare il flusso d'acqua della cascata e le onde del mare, non risultano fluide.

Per poter riprodurre correttamente il progetto è necessario eseguirlo in locale. Per farlo ho usato XAMPP. Vedere documentazione THREE.js per ulteriori chiarimenti.

E' presente un artefatto sotto il terreno, un cubo che compone il mare, causato dalla sua animazione. Il motivo non è ancora noto. Togliendo l'animazione per le onde, l'artefatto sparisce.



## Descrizione progetto

In questo progetto è stata ricreata una spiaggia utilizzando come geometria solamente BoxGeometry. Per la creazione del terreno e del mare sono state sfruttate due diverse Height Map. Quella riguardante il terreno è stata creata cercando nel web una già pronta che raffigurasse una montagna; da quella, una volta decise le dimensioni che la spiaggia avrebbe dovuto avere, è stata creata la height map definitiva. Attraverso quest' ultima è stato definito il graduale passaggio dal fondale marino alla riva, ai pontili, alla foresta e alla montagna. Per ogni pixel della mappa, è stato fatto corrispondere un cubo, che viene scalato e traslato in base alla gradazione di nero del pixel della height map in considerazione. Sempre in base a questo valore, un algoritmo decide quale materiale usare, e quindi, quale texture applicare al cubo appena creato.



## Gli assets

Gli elementi della spiaggia che non sono generati dalle height map sono stati quasi tutti definiti in file .js esterni. Nel file principale .html viene richiamata una classe( file .js) per ogni elemento da aggiungere alla scena. Gli assets vengono poi aggiunti e posizionati staticamente.
Il mare è composto da una matrice di cubi, generati da una height map apposita.
Per le montagne, la foresta, alcune parti della cascata e lo squalo è stato usato un materiale di tipo  MultiMaterial.

### Alcuni assets
![assets](screenshot/assets.png)

## Le animazioni

Le animazioni, come gli assets, vengono gestite quasi interamente da file .js esterni. In particolare, per l'animazione della cascata, è stata sfruttata una spline per definire la traiettoria che il flusso d'acqua avrebbe dovuto avere. Vengono usati tre distinti flussi e ognuno è composto da una serie di cubi, temporizzati e sincronizzati in modo da dare l'illusione della fluidità.

Il mare viene animato chiamando una funzione che trasla verso +Y due file di cubi adiacenti con due valori di traslazione diversi; questo processo viene iterato frame per frame, e crea l'illusione dell'onda che avanza verso la riva. Piu precisamente, la funzione viene chiamata due volte per frame, con intervalli di tempo diversi, in modo da creare due onde contemporaneamente.

Per ciò che riguarda l'animazione dei pesci:
- lo squalo si muove grazie ad un pivot. Infatti ciò che si muove realmente è quest'ultimo; lo squalo si muove di conseguenza dato che è "figlio" nella gerarchia. Quando il pivot raggiunge un punto limite all'interno della scena, non fa altro che ruotare su se stesso di 180° e tornare indietro. Il processo si ripete quando raggiunge il punto limite opposto.
- per i pesci è stata scritta una struttura dati per ognuno di essi. All'interno di questa è presente la mesh che li rappresenta nella scena più degli attributi per la loro mobilità. Una funzione che prende come input l'intera struttura dati è responsabile dell'animazione del singolo pesce, e lo fa andando a verificare gli attributi della struttura modificandoli in base alla necessità. Tutti i pesci si muovono in maniera random all'interno della scena, ma, avendo tutti il medesimo algoritmo che li fa muovere, si sposterebbero contemporaneamente nelle stesse direzioni. Non molto realistico. Per ovviare a questo problema è stato introdotto un attributo 'speed' all'interno della struttura dati del pesce in modo da poter scegliere con quale velocità la mesh avrebbe raggiunto il successivo punto random. Impostando diversamente la velocità di ogni pesce, si crea l'illusione che stiano seguendo percorsi differenti.


## Alcuni screenshot delle fasi del progetto

### primi prototipi
<p align="center">
  <img src="screenshot/prototipo spiaggia.jpg"/>
  <img src="screenshot/prototipo spiaggia2.jpg"/>
  <img src="screenshot/prototipo spiaggia4.png"/>
</p>

### aggiunta del mare
<p align="center">
  <img src="screenshot/prototipo spiaggia3.png"/>
  <img src="screenshot/mare.png"/>
  <img src="screenshot/mare2.png"/>
</p>

### miglioramento texture e aggiunta cascata più nuvole
<p align="center">
  <img src="screenshot/screen.png"/>
  <img src="screenshot/screen2.png"/>
  <img src="screenshot/screen3.png"/>
</p>

### miglioramento texture con implementazione wrapping
<p align="center">
  <img src="screenshot/newTexture1.png"/>
  <img src="screenshot/newTexture2.png"/>
  <img src="screenshot/newTexture3.png"/>
</p>
