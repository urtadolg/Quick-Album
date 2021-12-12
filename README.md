# Quick Album
<div>
  <img height="10%"  src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img height="10%"  src="https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white" />
  <img height="10%"  src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
  <img height="10%"  src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
  <img height="10%"  src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white" />
</div>
<br />
<p>Quick Album é um site que permite descobrir fotos incríveis tiradas por fotógrafos de todas as partes do mundo. O local certo para descobrir sua inspiração!</p>


## Screenshots

### Desktop - Homepage
<img width="100%" src="https://user-images.githubusercontent.com/89041463/145714716-7e7a13f7-0561-4e1b-9732-845d17855ac8.png" />

### Desktop - Pesquisa
<img width="100%" src="https://user-images.githubusercontent.com/89041463/145715634-684679c6-e3ce-428b-9c9c-15c58249132d.png" />

### Desktop - Detalhes
<img width="100%" src="https://user-images.githubusercontent.com/89041463/145715892-a5b16d76-029e-4fdd-86bb-027fd8cedae8.png" />

### Desktop - Categorias
<img width="100%" src="https://user-images.githubusercontent.com/89041463/145715320-d845ef4f-840d-4126-acec-9042a2a72d77.png" />

### Desktop - Perfil
<img width="100%" src="https://user-images.githubusercontent.com/89041463/145716112-d0d55c0f-9601-4036-9545-5078ef5c37c3.png" />

### Desktop - Login
<img width="100%" src="https://user-images.githubusercontent.com/89041463/145716358-13ab1fe5-28f9-4ba2-b30a-64f38679591c.png" />


### iPad - Homepage / Categorias
<div>
  <img width="49%" src="https://user-images.githubusercontent.com/89041463/145714859-aca3af2b-00a2-46b5-8ad9-49f538038316.png" />
  <img width="49%" src="https://user-images.githubusercontent.com/89041463/145716827-ac7e6cb9-9b75-4086-98b5-904b2aa336ab.png" />
</div>

### Smartphone - Homepage / Menu / Detalhes
<div>
  <img height="500px" src="https://user-images.githubusercontent.com/89041463/145715108-61730be8-f62b-44be-a864-774fadc749e8.png" />
  <img height="500px" src="https://user-images.githubusercontent.com/89041463/145716494-13cbf583-796f-49d1-a7fa-6d44e2593ddd.png" />
  <img height="500px" src="https://user-images.githubusercontent.com/89041463/145717113-4fe641cc-90e7-46f4-9eac-1ac636876146.png" />
</div>

# Recursos

<p>O site permite ao usuário pesquisar fotos por palavras-chave e também através de categorias pré-definidas. Ao encontrar uma foto que lhe agrade é possível adicioná-la a lista de favoritos clicando no ícone de coração na página de detalhes da foto.</p>
<p>Logo após criar uma conta com email e senha já é possível adicionar fotos na lista de favoritos. Essa lista de favoritos é encontrada na página de perfil do usuário.</p>

# Tecnologias e APIs Utilizadas

<p>As tecnologias utilizadas são: ReactJS, Redux, React Router, HTML5, TypeScript e SASS (SCSS)</p>
<p>Todas as fotos são obtidas através do RESTful JSON API do <a href="https://www.pexels.com/api/documentation/">Pexels</a></p>
<p>Como solução de backend para login e criação de conta de usuário com email e senha foi utilizado o <a href="https://firebase.google.com/">Firebase</a></p>

# Responsividade
![2021-12-12 14-19-20](https://user-images.githubusercontent.com/89041463/145722747-f295bfad-0ae1-45ab-8038-ba6e3b26e036.gif)


# Instruções

<ol>
  <li>

Para iniciar basta fazer Fork/Clone do repositório e instalar todas as dependências com o comando: 

### `npm install`

  </li>
  <li>
Por questões de segurança a pasta "credentials" contendo as API keys do Firebase e do Pexels foi incluida no .gitignore, mas pode ser facilmente substituída contendo suas próprias Keys. É possível obter as keys nos respectivos sites: <a href="https://www.pexels.com/api/documentation/">Pexels</a> e <a href="https://firebase.google.com/">Firebase</a>.

Obs.: É necessário habilitar o recurso de Autenticação por email e senha do Firebase.
  </li>
  <li>
Após obter as Keys incluí-las no seu diretório local como mostrado na imagem a seguir:

(Path: src/credentials/apiKeys.ts)

![api-keys](https://user-images.githubusercontent.com/89041463/145721379-2bc70f09-56b2-448b-8b47-1194f0abfdb2.png)
  </li>
  <li>
Por fim, no diretório do projeto, rodar o comando para iniciar no modo de desenvolvimento:

### `npm start`

E acesse [http://localhost:3000](http://localhost:3000) para vê-lo no navegador.
  </li>
