---
pdf_options:
  format: A4
  landscape: true
  margin: 0mm
  printBackground: false
---

<style>
  @page {
    size: A4 landscape;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    font-size: 10pt;
  }
  .page {
    page-break-after: always;
    page-break-inside: avoid;
    height: 210mm;
    width: 297mm;
    margin: 0;
    padding: 0;
    border: none;
  }
  .page table {
    width: 100%;
    height: 100%;
    border-collapse: collapse;
    table-layout: fixed;
    border-spacing: 0;
    border: none;
    margin: 0;
    padding: 0;
  }
  .page td {
    width: 148.5mm;
    padding: 12mm;
    vertical-align: top;
    border: none;
  }
  .page tr {
    border: none;
  }
  .page tr {
    height: 210mm;
  }
  .cover {
    text-align: center;
    padding-top: 50mm !important;
  }
  .cover h1 {
    font-size: 36pt;
    margin: 0 0 8mm 0;
    font-weight: bold;
  }
  .cover h2 {
    font-size: 22pt;
    margin: 0 0 20mm 0;
    font-weight: normal;
  }
  .cover p {
    font-size: 12pt;
    margin: 5mm 0;
  }
  h2 {
    font-size: 13pt;
    margin: 0 0 6px 0;
    padding-bottom: 3px;
    border-bottom: 2px solid #000;
    font-weight: bold;
  }
  h3 {
    font-size: 10pt;
    margin: 8px 0 4px 0;
    font-weight: bold;
  }
  p {
    font-size: 9pt;
    line-height: 1.3;
    margin: 4px 0;
  }
  ul, ol {
    margin: 4px 0;
    padding-left: 16px;
    font-size: 9pt;
    line-height: 1.3;
  }
  li {
    margin: 2px 0;
  }
  .box {
    border: 1px solid #000;
    padding: 6px;
    margin: 6px 0;
    font-size: 8.5pt;
    line-height: 1.2;
  }
  .box strong {
    display: block;
    margin-bottom: 3px;
  }
  table.info {
    width: 100%;
    font-size: 9pt;
    border-collapse: collapse;
    margin: 8px 0;
  }
  table.info th, table.info td {
    padding: 5px;
    border: 2px solid #000;
    text-align: left;
  }
  table.info th {
    font-weight: bold;
    background-color: #e0e0e0;
  }
  table.info td {
    background-color: #ffffff;
  }
  .qr-section {
    text-align: center;
    margin: 6mm 0;
    font-size: 9pt;
  }
  .qr-section p {
    margin: 2mm 0;
  }
  .qr-codes {
    display: flex;
    justify-content: space-around;
    margin: 4mm 0;
  }
  .qr-codes img {
    width: 30mm;
    height: 30mm;
  }
  .qr-codes div {
    text-align: center;
  }
  .qr-codes p {
    font-size: 8pt;
    margin: 1mm 0;
  }
  .footer {
    text-align: center;
    margin-top: 8mm;
    font-size: 8.5pt;
  }
  strong {
    font-weight: bold;
  }
</style>

<!-- PAGINA 1: FRONTE (Facciata 4 - Retro | Facciata 1 - Copertina) -->
<div class="page">
<table>
<tr>
<!-- FACCIATA 4: RETRO -->
<td>

## App Mobile TwinPlay

**Funzioni:**

- Config WiFi durante registrazione
- Visione live tempo reale
- Monitoraggio sessioni/storage
- Test velocità e controllo remoto
- Registrazione offline max ~15 ore

## Informazioni Utili

### Alimentazione

- Alimentatore USB-C min 15W a 5V
- Power bank: ~1000mAh per ora
- Consumo medio: 5W

### Consumo dati

Circa 1.2 GB per ora di registrazione

### Requisiti campo

- Ben illuminato, evitare contro-sole
- Righe campo ben visibili

### Hotspot da telefono

- Android: frequenza 2.4 GHz
- iPhone: "ottimizza compatibilità"

<div class="footer">
<p><strong>docs.twinplay.ai</strong></p>
<p>support@twinplay.ai</p>
<p>© 2025 TwinPlay AI</p>
</div>

</td>
<!-- FACCIATA 1: COPERTINA -->
<td class="cover">

<h1>TwinPlay AI</h1>
<h2>Quick Setup Guide</h2>
<p style="font-size: 13pt; margin-top: 15mm;">La tua telecamera intelligente<br>per basket</p>
<p style="margin-top: 25mm;">Inizia in 5 minuti</p>

</td>
</tr>
</table>
</div>

<!-- PAGINA 2: RETRO (Facciata 2 - Interno sx | Facciata 3 - Interno dx) -->
<div class="page">
<table>
<tr>
<!-- FACCIATA 2: MONTAGGIO E CONFIGURAZIONE -->
<td>

## 1. Montaggio

**Contenuto:** Cavalletto + unità + cavo USB, telecamera, alimentatore, borsone

**Procedura:**

1. Avvita telecamera su cavalletto
2. Collega cavo USB telecamera ↔ unità
3. Estendi a ~4m (3 gambe a terra, tubo centrale sollevato)
4. Collega alimentazione

<div class="box">
<strong>⚠ ATTENZIONE:</strong>
Le molle sono pre-compresse. Allentare progressivamente le chiavi tenendo l'estremità superiore.
</div>

## 2. Configurazione WiFi

<div class="qr-codes" style="margin: 3mm 0;">
<div>
<img src="/static/img/qrcode_app-store.png" alt="iOS App Store">
<p><strong>iOS</strong></p>
</div>
<div>
<img src="/static/img/qrcode_play-store-android.png" alt="Android Play Store">
<p><strong>Android</strong></p>
</div>
</div>

<ol style="margin: 4px 0; padding-left: 16px; font-size: 9pt; line-height: 1.3;">
<li>Scarica app TwinPlay (scansiona QR)</li>
<li>Accendi telecamera (spia lampeggia)</li>
<li>Attiva Bluetooth su smartphone</li>
<li>Apri app → Connetti via Bluetooth</li>
<li>Vai a WiFi Configuration</li>
<li>Seleziona rete, inserisci password</li>
<li>Salva</li>
</ol>

<div class="box">
<strong>💡</strong> Configurabile durante registrazione! WiFi 2.4 GHz richiesto.
</div>

</td>
<!-- FACCIATA 3: UTILIZZO -->
<td>

## 3. Posizionamento

1. Cavalletto a metà campo, fuori linea laterale
2. Estendi al massimo (~4m)
3. Verifica cavo USB collegato
4. **Direziona telecamera direttamente verso il canestro**
5. Verifica inquadratura con app (live)

## 4. Utilizzo

### Accensione

- Collega alimentazione → accensione automatica
- Dopo ~1 min: spia lampeggia regolarmente

### Prima registrazione

1. Allinea giocatori davanti telecamera (linea 3 punti vicina)
2. Allenati normalmente

### Controlli

- **1 click:** pausa/riprendi
- **Click lungo (>1s):** termina sessione

### Stati Spia

**Lampeggio regolare** → Registrazione ✓
**Lampeggio rapido** → Pausa
**Singolo lampeggio breve** → Telecamera/USB scollegato
**Accesa fissa** → Upload finale
**Luce gialla** (versioni con spia verde) → Upload finale non riuscito (no connessione)
**Spenta** → Dispositivo off

## 5. Termine Sessione

1. Tieni premuto pulsante 1s (luce diventa fissa)
2. Attendi spegnimento spia (upload OK)
3. Scollega alimentazione

<div class="box">
<strong>💡 SESSIONI MULTIPLE:</strong>
Click breve per separare allenamenti con giocatori diversi.
</div>

</td>
</tr>
</table>
</div>
