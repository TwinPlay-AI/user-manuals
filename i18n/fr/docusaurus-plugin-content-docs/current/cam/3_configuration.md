---
id: configuration
title: Configuration
description: Guide pour connecter la caméra TwinPlay à un réseau Wi-Fi.
---

# Configuration

## Quand c'est nécessaire

:::tip[Note]

- À la première utilisation, il faut associer à la caméra un (ou plusieurs) réseaux wifi avec accès à internet
- Tous les réseaux mémorisés restent en mémoire, la caméra se connectera automatiquement au premier réseau disponible.

:::

La procédure devra être répétée dans le cas où :

1. Le nom ou le mot de passe du réseau sont modifiés
2. On veut associer l'unité à un nouveau réseau auquel l'unité n'a jamais eu accès

## Exigences

- un réseau wifi avec accès à internet dont on connaît le nom et le mot de passe
- un téléphone, tablette ou PC différent de celui qui fait hotspot

:::danger[Attention]

- S'assurer que le réseau wifi ait accès à internet et ne nécessite pas d'authentification successive (en plus du mot de passe)
- La caméra supporte principalement les réseaux wifi à **2.4 GHz**. Certains canaux à 5 GHz ne sont pas supportés. Voir [**Configuration**](#configuration-hotspot-telephone) pour plus d'informations
- En cas d'hotspot de téléphone il faut avoir un second dispositif pour effectuer la procédure d'association

:::

### Configuration hotspot de téléphone {#configuration-hotspot-telephone}

- Hotspot de téléphone `Android` : accéder aux paramètres de l'hotspot et régler la fréquence à `2.4 GHz`
- Hotspot d'`iPhone` : accéder aux paramètres de l'hotspot et cocher l'option `optimiser compatibilité`

## Configuration WiFi avec App Mobile

:::tip[Méthode recommandée]
L'app mobile TwinPlay permet de configurer les réseaux WiFi à tout moment, même pendant l'enregistrement, sans devoir interrompre les entraînements.
:::

### Exigences

- Smartphone avec Bluetooth activé  
- App TwinPlay installée
- Caméra allumée et fonctionnelle

### Procédure

1. **Téléchargez l'app TwinPlay** de votre store (App Store/Google Play)
2. **Activez Bluetooth** sur votre smartphone
3. **Ouvrez l'app** et allez dans la section "WiFi Configuration"
4. **Connectez-vous à la caméra** via Bluetooth (la caméra apparaîtra dans la liste des dispositifs disponibles)
5. **Sélectionnez le réseau WiFi** désiré de la liste des réseaux disponibles
6. **Entrez le mot de passe** du réseau WiFi
7. **Confirmez la configuration** - la caméra se connectera automatiquement

:::info[Avantages de l'app mobile]

- ✅ **Configuration pendant l'enregistrement** : Changez de réseau WiFi sans arrêter l'enregistrement
- ✅ **Gestion de plusieurs réseaux** : Sauvegardez et gérez plusieurs réseaux WiFi
- ✅ **Monitoring en temps réel** : Voyez l'état de connexion et la puissance du signal
- ✅ **Sans interruptions** : Ne nécessite pas de mettre la caméra en mode association
- ✅ **Plus facile** : Sans codes QR ni navigateur web

:::

:::note[Configuration via code QR / page web non disponible]
L'ancienne procédure d'association via code QR ou page web (`http://192.168.4.1:5000`) et le double clignotement associé ont été **supprimés**. Les réseaux WiFi se configurent désormais exclusivement via l'app mobile.
:::
