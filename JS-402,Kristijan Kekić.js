let popis = [
 {
 ime: "Marko",
 prezime: "Marković",
 upisan: true,
 status: "Upisan"
 },
 {
 ime: "Iva",
 prezime: "Ivić",
 upisan: true,
 status: "Upisan"
 },
 {
 ime: "Lucija",
 prezime: "Lucić",
 upisan: true,
 status: "Upisan"
 },
 {
 ime: "Nikola",
 prezime: "Nikolić",
 upisan: true,
 status: "Upisan"
 },
 {
 ime: "Borna",
 prezime: "Bornić",
 upisan: true,
 status: "Upisan"
 },
 {
 ime: "Kiks",
 prezime: "Kikić",
 upisan: false,
 status: "Nije upisan"
 },
 {
 ime: "Dora",
 prezime: "Dorić",
 upisan: true,
 status: "Upisan"
 },
 {
 ime: "Stipo",
 prezime: "Stipić",
 upisan: false,
 status: "Nije upisan"
 },
 {
 ime: "Niko",
 prezime: "Nikić",
 upisan: true,
 status: "Upisan"
 },
 {
 ime: "Ana",
 prezime: "Anić",
 upisan: true,
 status: "Upisan"
 }
];

function provjeri(lista, pojam,status){
for (let i=0; i<10; i++){
if (pojam == lista[i].ime || pojam == lista[i].prezime)
return true
return lista[i].status
}
}

console.log(provjeri(popis, "Nikić", "Upisan"))