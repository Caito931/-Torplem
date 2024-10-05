# Torplem - Biblioteca Matemática

![Logo Torplem](images/TorplemTheProgramingLanguageThatYouWant.png)

## O que é a Torplem?

A **Torplem** é uma biblioteca matemática criada por **Caio Victor**. Seu objetivo é facilitar operações matemáticas essenciais, como soma, subtração, multiplicação, entre outras. O nome Torplem é uma combinação de "Tor Segurança", "PL Programming Language" e "EM Essential for Math".

## Link Para O Site + Downloads
- https://caito931.github.io/-Torplem/

## Documentação

### Funções Disponíveis

- **Soma(a, b)**: Retorna a soma de dois números.
- **Subtracao(a, b)**: Retorna a subtração de dois números.
- **Multiplicacao(a, b)**: Retorna a multiplicação de dois números.
- **Divisao(a, b)**: Retorna a divisão de dois números (não divide por zero).
- **ehParouImpar(a)**: Verifica se um número é par ou ímpar.
- **VerificarPositivoNegativoZero(a)**: Verifica se um número é positivo, negativo ou zero.
- **Fatorial(n)**: Calcula o fatorial de um número.
- **VerificarPrimo(n)**: Verifica se um número é primo.
- **Potencia(base, expoente)**: Calcula a potência de um número.
- **RaizQuadrada(n)**: Calcula a raiz quadrada de um número.
- **Maximo(arr)**: Retorna o valor máximo em um array.
- **Minimo(arr)**: Retorna o valor mínimo em um array.
- **Media(arr)**: Calcula a média de um array de números.
- **MDC(a, b)**: Calcula o máximo divisor comum de dois números.
- **MMC(a, b)**: Calcula o mínimo múltiplo comum de dois números.
- **GrausParaRadianos(angulo)**: Converte graus em radianos.
- **RadianosParaGraus(radianos)**: Converte radianos em graus.
- **VerificarNumeroPerfeito(n)**: Verifica se um número é perfeito.
- **ConverterBase(num, base)**: Converte um número de base decimal para uma base específica.
- **GerarNumeroAleatorio(min, max)**: Gera um número aleatório entre um intervalo.
- **CalcularMediana(arr)**: Calcula a mediana de um array de números.
- **CalcularVariancia(arr)**: Calcula a variância de um array de números.
- **CalcularDesvioPadrao(arr)**: Calcula o desvio padrão de um array de números.
- **SomaArrays(arr)**: Soma todos os números em um array.
- **Fibonacci(n)**: Gera os primeiros n números de Fibonacci.

## Dependências

Para que um usuário consiga executar o seu código da biblioteca **Torplem**, é importante que ele tenha algumas dependências e configurações corretas. Aqui estão as principais dependências e requisitos:

1. **Node.js**:
   - O ambiente de execução para JavaScript no servidor.
   - Você pode baixar a versão mais recente do [site oficial do Node.js](https://nodejs.org/).

2. **npm (Node Package Manager)**:
   - Usado para gerenciar pacotes JavaScript.
   - Verifique se o npm está instalado digitando `npm -v` no terminal.

3. **TypeScript**:
   - Necessário para compilar o código TypeScript.
   - Para instalar o TypeScript:
     ```bash
     npm install -g typescript
     ```
   - Verifique a instalação com `tsc -v`.

### Configuração do Projeto

1. **Como Executar**:
   ```bash
   npm run build
   npm start
