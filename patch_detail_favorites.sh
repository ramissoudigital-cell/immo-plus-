# Update DetailView
sed -i "s/import { propertiesData } from '\.\.\/data';//" src/components/DetailView.tsx
sed -i "s/export default function DetailView({ onClose, propertyId, favoriteIds, onToggleFavorite, onMessageClick }: { onClose: () => void, propertyId: string, favoriteIds: string\[\], onToggleFavorite: (id: string) => void, onMessageClick: () => void }) {/export default function DetailView({ onClose, propertyId, favoriteIds, onToggleFavorite, onMessageClick, properties }: { onClose: () => void, propertyId: string, favoriteIds: string[], onToggleFavorite: (id: string) => void, onMessageClick: () => void, properties: any[] }) {/" src/components/DetailView.tsx
sed -i "s/propertiesData/properties/g" src/components/DetailView.tsx

# Update FavoritesView
sed -i "s/import { propertiesData } from '\.\.\/data';//" src/components/FavoritesView.tsx
sed -i "s/export default function FavoritesView({ onClose, favoriteIds, onToggleFavorite, onPlaceClick }: { onClose: () => void, favoriteIds: string\[\], onToggleFavorite: (id: string) => void, onPlaceClick: (id: string) => void }) {/export default function FavoritesView({ onClose, favoriteIds, onToggleFavorite, onPlaceClick, properties }: { onClose: () => void, favoriteIds: string[], onToggleFavorite: (id: string) => void, onPlaceClick: (id: string) => void, properties: any[] }) {/" src/components/FavoritesView.tsx
sed -i "s/propertiesData/properties/g" src/components/FavoritesView.tsx
