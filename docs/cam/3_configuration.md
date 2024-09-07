---
id: configuration
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
- La telecamera supporta principalmente reti wifi a 2.4 GHz. Alcuni canali a 5 GHz non sono supportati. Vedi [**Configurazione**](#configurazione-hotspot-da-telefono) per maggiori informazioni
- In caso di hotspot da telefono è necessario avere un secondo dispositivo per effettuare la procedura di associazione
:::

### Configurazione hotspot da telefono
- Hotspot da telefono `Android`: accedere alle impostazioni dell’hotspot e impostare la frequenza a `2.4 GHz`
- Hotspot da `iPhone`: accedere alle impostazioni dell’hotspot e spuntare l'opzione `ottimizza compatibilità`

## Procedura di associazione

1. Accendi la rete wifi a cui vuoi associare la telecamera e l'unità di elaborazione (attendi che la spia inizi a lampeggiare)
2. Doppio click sul pulsante per avviare la procedura di associazione. Attendi che la spia faccia faccia un doppio lampeggio prima di proseguire.
   (Vedi [**Comandi**](2_before%20starting%20.md#comandi) e [**Stati**](2_before%20starting%20.md#stati) per maggiori informazioni)
<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
  <img src="/img/button_spring_green_double.gif" alt="double_press" style={{ width: '50px' }} />
  <span style={{ fontSize: '40px', margin: '0 20px' }}>&#8594;</span> {/* Large arrow */}
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

Se l’associazione è andata a buon fine, la spia inizierà a **lampeggiare regolarmente**, iniziando direttamente a riprendere l’allenamento. Se la spia ritorna a lampeggiare con 2 impulsi ravvicinati, l’associazione non è andata a buon fine: verifica che la connessione abbia accesso a internet e che la password inserita sia corretta.
