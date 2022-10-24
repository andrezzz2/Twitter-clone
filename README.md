# Twitter-clone
Recriando Twitter para aprender Redux com React e Sass



Compilaçao do sass

cd web-app

sass --watch src/sass/styles.sass:src/css/styles.css






Back-end

-Clean architecture ( route -> that access controller for use-case -> that access use-case -> that access entities and a repository implementation through a repository interface )
-Repository pattern (criação de repositórios que permitem a troca do banco de dados utilizado sem afetar o sistema como um todo, diminui acoplamento entre as classes, facilita criação de testes unitários e retira código duplicado que fere o princípio DRY).