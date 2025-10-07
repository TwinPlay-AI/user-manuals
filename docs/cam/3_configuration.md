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

## Configurazione WiFi con QR code e senza app

:::warning[Questo metodo è deprecato]
Dal 2025 è disponibile la **nuova app mobile TwinPlay** che semplifica notevolmente la configurazione.
L'app può configurare le reti WiFi anche durante la registrazione, eliminando la necessità di interrompere gli allenamenti.
Vedi la [**sezione app mobile**](#configurazione-wifi-con-app-mobile) per il metodo moderno.
:::

1. Accendi la rete wifi a cui vuoi associare la telecamera
2. **Tieni premuto il pulsante durante l'accensione** dell'unità di elaborazione per attivare la modalità di associazione
3. Attendi che la spia faccia faccia un doppio lampeggio prima di proseguire.
   (Vedi [**Comandi**](before-starting#comandi) e [**Stati**](before-starting#stati) per maggiori informazioni)

<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
  <span style={{ fontSize: '20px'}}>wait</span> {/* Large arrow */}
  <img src="/img/blink2_400ms_50_1000ms.gif" alt="lampeggio_doppio" style={{ width: '80px' }} />
</div>

<details>
  <summary>a) Con QR code</summary>
  
3. Inquadra il primo QR code per connetterti alla rete TwinPlay

   <img src="/img/QR_wifi.png" alt="qr_wifi" width="150" />

4. Inquadra il secondo QR code per essere reindirizzato alla pagina di configurazione TwinPlay

   <img src="/img/QR_link.png" alt="qr_link" width="150" />

</details>

<details>
  <summary>b) Senza QR code</summary>

```
Rete:       TwinPlay 
Password:   TwinPlayCamera 
```

3. Collegati alla rete

4. Apri il browser (Chrome, Safari, etc.) e vai alla pagina **http://192.168.4.1:5000**, si aprirà la pagina di configurazione TwinPlay.

</details>

### Salvataggio rete

5. Seleziona la rete WIFI a cui vuoi collegare la telecamera, inserisci la sua password e schiaccia sul tasto “Connetti”.
6. Attendi 1 minuto.

Se l'associazione è andata a buon fine, la spia inizierà a **lampeggiare regolarmente**, iniziando direttamente a riprendere l'allenamento. Se la spia ritorna a lampeggiare con 2 impulsi ravvicinati, l'associazione non è andata a buon fine: verifica che la connessione abbia accesso a internet e che la password inserita sia corretta.
