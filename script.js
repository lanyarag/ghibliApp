const app = document.getElementById('root');

const logo = document.createElement('img');

logo.src ='logo.png';

const container = document.createElement('div');
container.setAttribute('class', 'container');

//Adicionando elementos criados à página
app.appendChild(logo);
app.appendChild(container);

//Consumindo API
fetch('https://ghibliapi.herokuapp.com/films')
 //Conversão para JSON
 .then(response=> {
    return response.json()
 })
//Trabalhando com os dados convertidos 
 .then(responseJSON=> {
    responseJSON.forEach(element => {
        //Para cada elemento, crie uma div 
        const card = document.createElement('div');
        //Mude os atributos da div para a class="card"
        card.setAttribute('class', 'card');

        //Para cada elemento, crie um h1
        const h1 = document.createElement('h1');
        //O conteúdo do h1 será o elemento title do objeto element
        h1.textContent = element.title;

        //Para cada elemento, crie um p
        const p = document.createElement('p');
        //Adicione no p o elemento description do objeto element
        element.description = element.description.substring(0, 300);
        p.textContent = `${element.description}`;

        //Adicione ao container um card, um h1 e um p 
        container.appendChild(card);
        card.appendChild(h1);
        card.appendChild(p);

        
    });
 })