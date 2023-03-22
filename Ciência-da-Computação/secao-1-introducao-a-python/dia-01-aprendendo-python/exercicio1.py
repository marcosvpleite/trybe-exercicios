# Exercício 1: Crie uma função que receba dois números e retorne o maior deles.


def maior_numero(n1, n2):
    if n2 > n1:
        return n2
    return n1


print(maior_numero(5, 8))