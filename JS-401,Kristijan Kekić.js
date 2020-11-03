let popis = [
 {
 ime: "Marko",
 prezime: "Marković",
 upisan: true
 },
 {
 ime: "Iva",
 prezime: "Ivić",
 upisan: true
 },
 {
 ime: "Lucija",
 prezime: "Lucić",
 upisan: true
 },
 {
 ime: "Nikola",
 prezime: "Nikolić",
 upisan: true
 },
 {
 ime: "Borna",
 prezime: "Bornić",
 upisan: true
 },
 {
 ime: "Kiks",
 prezime: "Kikić",
 upisan: false
 },
 {
 ime: "Dora",
 prezime: "Dorić",
 upisan: true
 },
 {
 ime: "Stipo",
 prezime: "Stipić",
 upisan: false
 },
 {
 ime: "Niko",
 prezime: "Nikić",
 upisan: true
 },
 {
 ime: "Ana",
 prezime: "Anić",
 upisan: true
 }
];

function provjeri(lista, pojam){
for (let i=0; i<10; i++){
if (pojam == lista[i].ime || pojam == lista[i].prezime)
return true
}
}

console.log(provjeri(popis, "Nikić"))