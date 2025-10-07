---
id: before-starting
title: Avant de commencer
description: Tout ce que vous devez savoir avant d'allumer la caméra.
---

# Avant de commencer

L'unité a un seul bouton avec voyant intégré. Le voyant indique l'état de l'unité et le bouton permet d'interagir avec elle.
Voici les commandes et les états du voyant.
Une fois configurée :

:::info[Important - Mise à jour Septembre 2025]
Le comportement de la caméra a changé :

- **Le mode d'association ne s'active plus automatiquement** quand aucun réseau n'est détecté, mais il y a maintenant la possibilité d'enregistrer hors ligne
- **Il est recommandé d'utiliser l'app mobile** pour la configuration des réseaux WiFi, dans n'importe quel mode de la caméra, même pendant l'enregistrement
- **Pour activer l'ancien mode d'association** (double clignotement) il faut maintenir le bouton appuyé pendant l'allumage

:::

## États

Le voyant présent sur l'unité indique l'état du dispositif :

| Voyant                                                    | État                                                      | Description        | <div style={{width: "120px"}}>Enregistrement</div> | <div style={{width: "120px"}}>Upload</div>   | <div style={{width: "120px"}}>Association</div> |
|-----------------------------------------------------------|-----------------------------------------------------------|--------------------|---------------------------------------------------|----------------------------------------------|--------------------------------------------------|
| ![éteint](/img/blink1_1000ms_0_0ms.gif)                   | Éteint, en erreur ou en allumage                          | Éteint             | <div style={{textAlign: "center"}}>❌</div>        | <div style={{textAlign: "center"}}>❌</div>   | <div style={{textAlign: "center"}}>❌</div>       |
| ![clignotement_rapide](/img/blink1_200ms_50_0ms.gif)      | Pause ou Câble USB débranché                              | Clignotement rapide| <div style={{textAlign: "center"}}>❌</div>        | <div style={{textAlign: "center"}}>✅</div>   | <div style={{textAlign: "center"}}>❌</div>       |
| ![clignotement_moyen](/img/blink1_1000ms_50_0ms.gif)      | Enregistrement et upload                                  | Clignotement régulier | <div style={{textAlign: "center"}}>✅</div>        | <div style={{textAlign: "center"}}>✅</div>   | <div style={{textAlign: "center"}}>❌</div>       |
| ![voyant_allumé](/img/blink1_1000ms_100_0ms.gif)          | Upload final                                             | Allumé             | <div style={{textAlign: "center"}}>❌</div>        | <div style={{textAlign: "center"}}>✅</div>   | <div style={{textAlign: "center"}}>❌</div>       |
| ![double_clignotement](/img/blink2_400ms_50_1000ms.gif)   | Mode association réseau (seulement si activé manuellement) | Double clignotement   | <div style={{textAlign: "center"}}>❌</div>        | <div style={{textAlign: "center"}}>❌</div>   | <div style={{textAlign: "center"}}>✅</div>       |

## Commandes

| Commande                                             | Description                         | Effet                                                      |
|------------------------------------------------------|-------------------------------------|------------------------------------------------------------|
| ![pression_courte](/img/button_spring_green_short.gif)   | Pression courte unique             | Pause/reprendre l'enregistrement (clignotement rapide) ou nouvelle session |
| ![pression_longue](/img/button_spring_green_long.gif)     | Pression longue unique (plus de 1s) | Termine l'enregistrement, démarre l'upload et extinction           |
| Maintenir appuyé pendant l'allumage                    | Pression prolongée à l'allumage | Active le mode association réseau (double clignotement)        |

## Exigences terrains de jeu

1. Utiliser la caméra sur des terrains bien éclairés, en évitant son utilisation dans des conditions de forte lumière directe dans le champ cadré (contre-jour).
2. S'assurer que les lignes du terrain sont bien visibles et correspondent aux dimensions standard.

En l'absence de ces deux conditions, il est possible que le produit ne fonctionne pas correctement.

## Alimentation

La caméra peut être alimentée de deux façons :

1. Via Prise électrique : utiliser l'alimentation fournie ou un adaptateur USB-C d'au moins 15 W à 5 V.
2. Via Power Bank : il est possible d'utiliser la caméra avec une power bank avec câble USB-C. S'assurer que la power bank ait une puissance d'au moins 15 W à 5 V. La consommation moyenne de la caméra pendant l'utilisation normale est d'environ 5 W, donc pour une heure d'utilisation il faut environ 5 Wh (1000 mAh à 5 V).
Il est conseillé d'utiliser une power bank avec indicateur de charge résiduelle pour éviter que la caméra s'éteigne pendant l'utilisation.

## Consommation de données

La consommation de données de la caméra est d'environ 1.2 GB pour chaque heure d'enregistrement.

En cas d'utilisation d'hotspot de téléphone, s'assurer d'avoir un forfait de données adéquat.
