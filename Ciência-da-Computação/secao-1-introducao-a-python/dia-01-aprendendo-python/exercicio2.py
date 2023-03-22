def media_aritmetica(numeros: list):
    soma = 0
    for numero in numeros:
        soma += numero
    return soma / len(numeros)


print(media_aritmetica([1, 2, 3, 4, 5, 6]))
