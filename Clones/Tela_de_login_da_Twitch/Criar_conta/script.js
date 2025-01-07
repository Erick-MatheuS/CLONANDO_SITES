
// Código copiado da internet;

// Dia
const selectDia = document.getElementById("dia");

for (let i = 1; i <= 31; i++) {
  const option = document.createElement("option");
  option.value = i; 
  option.textContent = i; 
  selectDia.appendChild(option); 
}

// Mês
const selectMes = document.getElementById("mes");

let meses = ["Janeiro", "Fevereiro", "Março",
     "Abril", "Maio","Junho", "Julho", "Agosto", 
     "Setembro", "Outubro", "Novembro","Dezembro"];

meses.forEach((mes, index) => {
    const option = document.createElement("option");
    option.value = index + 1; 
    option.textContent = mes; 
    selectMes.appendChild(option); 
});

// Ano
const selectAno = document.getElementById("ano");
for (let ano = 2024; ano >= 1975; ano--) {
    const option = document.createElement("option");
    option.value = ano;
    option.textContent = ano;
    selectAno.appendChild(option);
}

// Telefone

const countries = [
  { name: "Brasil", code: "+55" },
  { name: "Afeganistão", code: "+93" },
  { name: "África do Sul", code: "+27" },
  { name: "Albânia", code: "+355" },
  { name: "Alemanha", code: "+49" },
  { name: "Andorra", code: "+376" },
  { name: "Angola", code: "+244" },
  { name: "Arábia Saudita", code: "+966" },
  { name: "Argentina", code: "+54" },
  { name: "Austrália", code: "+61" },

];

const countrySelect = document.getElementById("ci");

countries.forEach(country => {
  const option = document.createElement("option");
  option.value = country.name;
  option.textContent = `${country.name} (${country.code})`;
  countrySelect.appendChild(option);
});
          
                
                