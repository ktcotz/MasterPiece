Czym są Controllers w NestJS?

Controllers są miejscem w którym obsługujemy logikę routów API.
Definiujemy w nim jak ma wyglądać route, jaką ma mieć metodę HTTP a także jakie przetwarzać dane.

Controllers w swoich opisach routów mogą posiadać takie dekoratory jak Params,Query,Body..
Określają one różne zachowania które chcemy w danym roucie.

**Params** - pozwala określić parametry dla danego routa.
**Query** - pozwala określić route query dla danego routa.
**Body** - pozwala określić body dla danego routa.

Przykłady:

**Params** - localhost:3000/users/35
**Query** - localhost:3000/users/35?limit=10&age=50
**Body** - JSON data.
