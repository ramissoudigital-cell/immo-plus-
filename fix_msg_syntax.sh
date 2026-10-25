sed -i "s/message: 'En train d'écrire...',/message: \"En train d'écrire...\",/g" src/components/MessagesView.tsx
sed -i "s/isEn train d'écrire...rue,/isTyping: true,/g" src/components/MessagesView.tsx
