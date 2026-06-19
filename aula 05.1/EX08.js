Algoritmo "MeuAlgoritmo"

// Disciplina: Algoritmos
// Professor: Conrado Salomé Ribeiro
// Descrição: Descreva o que o algoritmo faz
// Autor(a): Nome do(a) aluno(a)
// Data: 19/06/2026

Var
  // Seção de Declarações das variáveis
  n, maior, menor, cont, soma, media : real


Inicio
  // Seção de Comandos
  escreval("Digite um número:")
  leia(n)
  cont <- 0
  soma <- 0

  se (n <> -1) entao
    maior <- n
    menor <- n

    enquanto (n <> -1) faca
      cont <- cont + 1
      soma <- soma + n

      se (maior < n) entao
        maior <- n
      fimse

      se (menor > n) entao
        menor <- n
      fimse

      escreval("Digite um número (-1 para sair)")
      leia(n)
    fimenquanto
  senao
    escreval("-1 é a condição de saída")
  fimse

  media <- soma/cont
  escreval("Maior número ", maior)
  escreval("Menor número ", menor)
  escreval("Quantidade de números digitados ", cont)
  escreval("Média ", media)

fimalgoritmo