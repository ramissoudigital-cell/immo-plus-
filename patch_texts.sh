sed -i "s/Dates • Nombre de voyageurs/Type de bien • Budget/g" src/components/HomeView.tsx
sed -i "s/18 - 21 Oct • 4 voyageurs/Villa, Appartement • A louer/g" src/components/SearchView.tsx
sed -i "s/4 voyageurs • 2 chambres • 2 lits • 1 salle de bain/120 m² • 4 pièces • 2 chambres • 1 salle de bain/g" src/components/HomeView.tsx
sed -i "s/2 voyageurs • 1 chambre • 1 lit • 1 salle de bain/80 m² • 2 pièces • 1 chambre • 1 salle de bain/g" src/components/HomeView.tsx

sed -i "s/4 voyageurs • 2 chambres • 2 lits • 1 salle de bain/120 m² • 4 pièces • 2 chambres • 1 salle de bain/g" src/data.ts
sed -i "s/2 voyageurs • 1 chambre • 1 lit • 1 salle de bain/80 m² • 2 pièces • 1 chambre • 1 salle de bain/g" src/data.ts
sed -i "s/'4 voyageurs', '2 chambres', '2 lits', '1 salle de bain'/'120 m²', '4 pièces', '2 chambres', '1 SDB'/g" src/data.ts
sed -i "s/'2 voyageurs', '1 chambre', '1 lit', '1 salle de bain'/'80 m²', '2 pièces', '1 chambre', '1 SDB'/g" src/data.ts

sed -i "s/100 % des voyageurs récents ont attribué 5 étoiles à la procédure d'arrivée/Propriété très prisée, visites récentes très positives/g" src/components/DetailView.tsx
sed -i "s/Hôte : Isabelle/Propriétaire : Isabelle/g" src/components/DetailView.tsx
sed -i "s/Appeler l'hôte/Contacter l'agence/g" src/components/DetailView.tsx

sed -i "s/€87 nuit/150.000 FCFA \/ mois/g" src/components/SearchView.tsx
sed -i "s/€128 nuit/200.000 FCFA \/ mois/g" src/components/SearchView.tsx
sed -i "s/€91 nuit/150.000 FCFA \/ mois/g" src/components/HomeView.tsx
sed -i "s/€80 nuit/120.000 FCFA \/ mois/g" src/components/HomeView.tsx
sed -i "s/€120 nuit/180.000 FCFA \/ mois/g" src/components/HomeView.tsx

sed -i "s/€91 nuit/150.000 FCFA \/ mois/g" src/data.ts
sed -i "s/€80 nuit/120.000 FCFA \/ mois/g" src/data.ts

sed -i "s/Où allez-vous ?/Où cherchez-vous ?/g" src/components/HomeView.tsx
