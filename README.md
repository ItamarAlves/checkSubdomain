## Instruções para utilizar a ferramenta

### Primeiro clone o projeto em sua máquina.
```shell
$ git clone https://github.com/ItamarAlves/checkSubdomain.git
```

### Instalar as seguintes bibliotecas
```shell
$ npm install request
```

### Agora só utilizar
```shell
$ node src/checkSubdomain.js arquivo/url.txt
```

#### Caso dê algum erro ao atualizar bibliotecas do npm, tenta efetuar o seguinte passo.
> Verifique se existe o arquivo node_modules.
> Se existe remove e roda novamente a atualização.

```shell
$ rm -rf node_modules

$ npm install

```