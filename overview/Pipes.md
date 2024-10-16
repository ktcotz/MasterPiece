Czym są Pipes w NestJS?

Pipes są adnotacją do klas z iniekcją @Injectable. Dużo to nie mówi, ale generalnie używane są szczególnie w dwóch warunkach,
Transformacji danych albo ich walidacji. Możesz korzystać z wbudowanych pipeów ale też tworzyć swoje własne według potrzeby.

NestJS umożliwia nam łatwe konfigurowanie walidacji dla naszych DTO oraz składni Params&Query.
Możemy skorzystać z **class-validator** i **class-transform** żeby nasze DTO były walidowane.
ClassValidator zajmuje się także odpowiednim zwracaniem błędów oraz error messages.
