---
id: mobile-app
title: App Mobile TwinPlay
description: Guide complet pour utiliser l'app mobile pour le contrôle à distance de la caméra.
---

# App Mobile TwinPlay

:::tip[🆕 Recommandé depuis Septembre 2025]
L'app mobile TwinPlay est maintenant la **méthode principale** pour gérer la caméra. Avec les mises à jour de septembre 2025, elle offre un contrôle complet de la caméra, une configuration avancée, un monitoring mémoire pour l'enregistrement hors ligne et une vision live en temps réel.
:::

## Installation

1. **Téléchargez l'app** depuis votre store :
   - **iOS** : [Téléchargez depuis l'App Store](https://apps.apple.com/it/app/twinplay-ai-camera-setup/id6752512394)
   - **Android** : [Téléchargez depuis Google Play Store](https://play.google.com/store/apps/details?id=com.twinplayai)

   <div style={{display: 'flex', justifyContent: 'center', gap: '40px', margin: '20px 0', flexWrap: 'wrap'}}>
     <div style={{textAlign: 'center'}}>
       <img src="/img/qrcode_app-store.png" alt="QR Code App Store" style={{width: '200px'}} />
       <p><em>iOS - App Store</em></p>
     </div>
     <div style={{textAlign: 'center'}}>
       <img src="/img/qrcode_play-store.png" alt="QR Code Play Store" style={{width: '200px'}} />
       <p><em>Android - Play Store</em></p>
     </div>
   </div>

2. **Activez Bluetooth** sur votre smartphone
3. **Assurez-vous** que la caméra soit allumée

## Configuration initiale

### Première connexion

1. Ouvrez l'app TwinPlay
2. L'app cherchera automatiquement les dispositifs TwinPlay à proximité
3. Sélectionnez votre caméra dans la liste
4. L'appariement se fera automatiquement via Bluetooth

:::info[Connexion automatique]
Une fois appariée, l'app se reconnectera automatiquement à la caméra quand les deux sont allumées et à proximité.
:::

## Fonctionnalités principales

### 📡 Configuration WiFi

- **Scan réseaux** : Visualisez tous les réseaux WiFi disponibles dans la zone de la caméra
- **Connecter nouveaux réseaux** : Ajoutez facilement de nouveaux réseaux WiFi avec mot de passe
- **Gérer réseaux sauvegardés** : Visualisez, modifiez ou éliminez les réseaux précédemment configurés
- **État connexion** : Surveillez réseau actuel, puissance signal et connectivité internet
- **Configuration pendant enregistrement** : Changez de réseau même pendant que la caméra enregistre

### 📹 Vision Live (🆕 Septembre 2025)

- **Streaming en temps réel** : Visualisez ce que filme la caméra en direct
- **Contrôle cadrage** : Vérifiez le positionnement et l'angle avant de commencer à enregistrer
- **Fonctionne toujours** : Disponible aussi bien avec connexion internet qu'en mode hors ligne (via Bluetooth)

### 🚀 Test Vitesse

- **Test complet** : Mesure ping, téléchargement et upload de la connexion internet
- **Évaluation qualité** : Vérifiez si la connexion est adéquate pour le chargement vidéo

### 📊 Monitoring Sessions (🆕 Fonctionnalités renforcées)

- **Sessions actives** : Visualisez la session d'enregistrement actuelle
- **Statistiques stockage** : Surveillez l'espace utilisé et les fichiers enregistrés
- **⚠️ Contrôle mémoire hors ligne** : **Fondamental pour enregistrement hors ligne** - visualisez l'espace restant (environ 15 heures maximales)
- **État upload** : Vérifiez quels fichiers ont été chargés dans le cloud
- **Calcul données** : Estimation des GB enregistrés et chargés
- **Mode enregistrement** : Indique si vous enregistrez en ligne ou hors ligne

### ⚙️ Paramètres et État

- **Info dispositif** : Nom caméra, adresse IP, version firmware
- **État Bluetooth** : Monitoring connexion BLE
- **Configurations avancées** : Tous les paramètres de la caméra maintenant gérables depuis l'app
- **Liens externes** : Accès direct à la documentation et portail statistiques
- **Diagnostics** : Outils pour résoudre les problèmes de connexion

## 🆕 Enregistrement Hors ligne - Guide Complet

:::warning[Nouveauté Septembre 2025]
Depuis septembre 2025, la caméra peut enregistrer même **sans connexion internet**. L'app mobile est essentielle pour surveiller cette fonctionnalité.
:::

### Comment fonctionne l'enregistrement hors ligne

1. **Démarrez normalement** l'enregistrement même sans WiFi
2. **Surveillez l'espace** via l'app mobile - environ **15 heures** d'enregistrement maximales
3. **Contrôlez régulièrement** le stockage pour éviter de saturer la mémoire
4. **Connectez au WiFi** quand possible pour charger automatiquement les vidéos dans le cloud

### ⚠️ Contrôles essentiels pour mode hors ligne

- **Avant de commencer** : Vérifiez l'espace disponible dans l'app
- **Pendant l'enregistrement** : Surveillez périodiquement le remplissage de la mémoire
- **Sessions longues** : Pour entraînements > 10 heures, considérez des pauses pour uploads intermédiaires
- **Avertissement mémoire pleine** : L'app vous notifiera quand elle approche la limite

:::tip[Meilleures Pratiques Hors ligne]
**Pour sessions très longues en mode hors ligne :**

1. Contrôlez l'espace avant de commencer
2. Faites des pauses toutes les 8-10 heures pour connecter au WiFi et charger
3. Utilisez l'app pour vérifier que les vidéos aient été chargées correctement
4. Seulement après le chargement reprenez l'enregistrement hors ligne

:::
