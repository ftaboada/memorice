## Bienvenido a Memorice:

aquí encontrará la estructura general del proyecto.<br><br>

El juego consta de 2 bloques.<br>
<br><br>

## Primer Bloque:

<br><br>

Este bloque contiene todo nuestro js de creación del Deck. El Deck será un objeto que va a contener la siguiente información:<br>

## key : un id variable.<br>

## pair: valor.<br>

## value: un valor o un src.<br>

## isFlipped: false valor default.<br>

## back: un src.<br>

## done: false.<br>

el Deck deberá estar compuesto con un arreglo que será del tamaño del juego, en este caso serán<br>

## 50

<br> elementos. además este objeto deberá tener funciones.<br>
Primera Funcion

## createDeck(array){}

<br>
esta función debe tomar un array y crear a partir de este array de imagenes un <br>Deck de objetos. donde hayan una cantidad par de cada uno de los objetos <br>repetidos y cada objeto repetido debe tener el mismo valor pair. todos los <br>objetos comparten el valor back que sería el source de la imagen del reverso <br>de la carta, mientras  que isflipped es un boolean que representa si la carta <br>está invertida. todas parten invertidas, por eso isflipped parte en false <br>como default. finalmente esta función invocará a la función swapDeck(deck)<br>

<br>
segunda función<br>

## swapDeck(deck){}

<br>
esta función toma el deck creado en la función anterior y lo desordena dejando <br> siempre en posiciones diferentes todos los objetos del array.
<br> finalmente entrega un nuevo array con el deck completamente revuelto.

## Cierre Deck

<br> esto es lo que se exporta una función que te devuelva el objeto deck.<br>

## Segundo Bloque:

<br> en este bloque hablaremos de react y sus componentes.

## APP

<br>en este componente recibirá el objeto deck
<br>renderizará el componente gameUx que este componente llamará a la función createDeck y este componente desaparecerá.
<br> el array devuelto por esta función será entregado a el componente Cards
<br> y cards renderizará cada uno de los objetos en un componente card. <br>
y card tendrá una lista con el key del objeto y renderizará el back mientras <br>
isflipped sea false. cada componente carta tendrá un eventlistener que escuchará <br> click y este seteará el estado de isFlipped a verdadero. lo que mostrará <br>
el value del objeto. una vez se hayan 2 componentes card con el estado isflipped
