sed -i "s/RechercheView/SearchView/g" src/components/SearchView.tsx
sed -i "s/import { X, SlidersHorizontal, Recherche, Heart, Star } from 'lucide-react';/import { X, SlidersHorizontal, Search, Heart, Star } from 'lucide-react';/g" src/components/SearchView.tsx
sed -i "s/<Recherche className=/<Search className=/g" src/components/SearchView.tsx
