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

## Procédure d'association

1. Allumer le réseau WiFi auquel vous voulez associer la caméra.
2. Allumer l'unité de traitement. Il est important qu'elle s'allume **APRÈS** avoir allumé le réseau WiFi.
3. Attendre que le voyant fasse un double clignotement avant de continuer.
   (Consulter les sections [**Commandes**](before-starting#commandes) et [**États**](before-starting#états) pour plus d'informations)

<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
  <span style={{ fontSize: '20px'}}>attendre</span> {/* Flèche grande */}
  <img src="/img/blink2_400ms_50_1000ms.gif" alt="double_clignotement" style={{ width: '80px' }} />
</div>

<details>
  <summary>a) Avec code QR</summary>
  
1. Scanner le premier code QR pour se connecter au réseau TwinPlay.

   <img src="/img/QR_wifi.png" alt="qr_wifi" width="150" />

2. Scanner le second code QR pour être redirigé vers la page de configuration de TwinPlay.

   <img src="/img/QR_link.png" alt="qr_link" width="150" />

</details>

<details>
  <summary>b) Sans code QR</summary>

```
Réseau : TwinPlay
Mot de passe : TwinPlayCamera
```

1. Se connecter au réseau.

2. Ouvrir le navigateur (Chrome, Safari, etc.) et aller à la page **http://192.168.4.1:5000**, où s'ouvrira la page de configuration de TwinPlay.

</details>

### Sauvegarder réseau

5. Sélectionner le réseau WiFi auquel vous voulez connecter la caméra, entrer son mot de passe et cliquer sur le bouton "Connecter".
6. Attendre 1 minute.

Si l'association s'est réalisée correctement, le voyant commencera à **clignoter régulièrement**, démarrant directement l'enregistrement de l'entraînement. Si le voyant recommence à clignoter avec 2 impulsions rapides, l'association ne s'est pas terminée correctement : vérifier que la connexion ait accès à internet et que le mot de passe saisi soit correct.
