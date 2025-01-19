# Verwende das Node.js Image
FROM node:14

# Setze das Arbeitsverzeichnis
WORKDIR /app

# Kopiere Package-Dateien und installiere Abhängigkeiten
COPY package*.json ./
RUN npm install

# Kopiere alle Projektdateien
COPY . .

# Baue das Nuxt-Projekt für die Produktion
RUN npm run build

# Starte Nuxt im Produktionsmodus
CMD ["npm", "run", "start"]
