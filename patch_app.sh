sed -i '1i import { propertiesData } from "./data";' src/App.tsx
sed -i 's/const \[favoriteIds, setFavoriteIds\] = useState<string\[\]>(\['\''1'\''\]);/const [favoriteIds, setFavoriteIds] = useState<string[]>(['\''1'\'']);\n  const [properties, setProperties] = useState(propertiesData);/g' src/App.tsx
