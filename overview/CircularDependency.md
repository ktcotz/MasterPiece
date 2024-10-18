Czym jest Circular Dependency w NestJS?

Circular Dependency odwołuje się do momentu w którym chcemy zawrzeć pomiędzy sobą dwa servicy z dwóch różnych modułów.
Chcemy połączyć moduł user z auth i auth z user, żeby połączyć musimy skorzystać z mechanizmu Circular Dependency.

W momencie importowania musimy używać składni forwardRef, także w momencie inicjalizacji osobnego service, musimy użyć dyrektywy @Inject + forwardRef.
