---
id: configuration
title: Configurazione
description: Guida per connettere la telecamera TwinPlay a una rete Wi-Fi.
---

# Configurazione

## Quando è necessario

:::tip[Nota]

- Al primo utilizzo, è necessario associare alla telecamera una (o più) reti wifi con accesso a internet
- Tutte le reti memorizzate rimangono in memoria, la telecamera si collegherà automaticamente alla prima rete disponibile.

:::

La procedura dovrà essere ripetuta nel caso in cui:

1. Il nome o la password della rete vengano modificati
2. Si vuole associare l’unità a una nuova rete a cui l'unità non ha mai avuto accesso

## Requisiti

- una rete wifi con accesso a internet di cui si conosce il nome e la password
- un telefono, tablet o PC diverso da quello che fa da hotspot

:::danger[Attenzione]

- Assicurarsi che la rete wifi abbia accesso a internet e non richieda successiva autenticazione (oltre alla password)
- La telecamera supporta principalmente reti wifi a **2.4 GHz**. Alcuni canali a 5 GHz non sono supportati. Vedi [**Configurazione**](#configurazione-hotspot-da-telefono) per maggiori informazioni
- In caso di hotspot da telefono è necessario avere un secondo dispositivo per effettuare la procedura di associazione

:::

### Configurazione hotspot da telefono

- Hotspot da telefono `Android`: accedere alle impostazioni dell’hotspot e impostare la frequenza a `2.4 GHz`
- Hotspot da `iPhone`: accedere alle impostazioni dell’hotspot e spuntare l'opzione `ottimizza compatibilità`

## Configurazione WiFi con App Mobile

:::tip[Metodo raccomandato]
L'app mobile TwinPlay permette di configurare le reti WiFi in qualsiasi momento, anche durante la registrazione, senza dover interrompere gli allenamenti.
:::

### Requisiti

- Smartphone con Bluetooth abilitato  
- App TwinPlay installata
- Telecamera accesa e funzionante

### Procedura

1. **Scarica l'app TwinPlay** dal tuo store (App Store/Google Play)
2. **Abilita Bluetooth** sul tuo smartphone
3. **Apri l'app** e vai nella sezione "WiFi Configuration"
4. **Connettiti alla telecamera** via Bluetooth (la telecamera apparirà nella lista dei dispositivi disponibili)
5. **Scansiona le reti WiFi** disponibili attraverso l'app
6. **Seleziona la rete** desiderata e inserisci la password
7. **Salva la configurazione** - la telecamera si connetterà automaticamente

### Funzionalità dell'app

- ✅ **Configurazione durante registrazione**: Non è necessario interrompere gli allenamenti
- ✅ **Gestione multiple reti**: Salva e gestisci facilmente più reti WiFi
- ✅ **Monitoraggio stato rete**: Visualizza rete attuale, potenza segnale e connettività internet
- ✅ **Test velocità integrato**: Verifica che la connessione sia adeguata per il caricamento video
- ✅ **Visione live**: Accesso in tempo reale alla telecamera
- ✅ **Controllo remoto**: Monitora sessioni e stato telecamera

:::note[Configurazione tramite QR code / pagina web non più disponibile]
La vecchia procedura di associazione tramite QR code o pagina web (`http://192.168.4.1:5000`) e il relativo doppio lampeggio sono stati **rimossi**. La configurazione delle reti WiFi avviene ora esclusivamente tramite l'app mobile.
:::
