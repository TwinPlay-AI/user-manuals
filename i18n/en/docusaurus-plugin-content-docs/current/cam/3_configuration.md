---
id: configuration
title: Configuration
description: Configure the camera to connect to your Wi-Fi network
---

# Configuration

## When it's required
:::tip[Note]
- The first time you use the device, you need to connect it to one (or more) Wi-Fi networks with internet access  
- All saved networks remain in memory, and the camera will automatically connect to the first available one
:::

You’ll need to repeat the procedure if:

1. The name or password of the network has changed  
2. You want to connect the unit to a new network it hasn’t accessed before

## Requirements

- A Wi-Fi network with internet access (you must know the name and password)  
- A phone, tablet, or PC different from the one used as a hotspot

:::danger[Warning]
- Make sure the Wi-Fi network has internet access and **does not require additional login/authentication** (besides the password)  
- The camera primarily supports **2.4 GHz** networks. Some **5 GHz** channels are not supported. See [**Hotspot Configuration**](#phone-hotspot-configuration) for more info  
- If using a phone as a hotspot, a **second device is required** to complete the pairing procedure
:::

### Phone Hotspot Configuration
- Android: go to hotspot settings and set frequency to `2.4 GHz`  
- iPhone: go to hotspot settings and enable `maximize compatibility`

## WiFi Configuration with Mobile App

:::tip[Recommended Method]
The TwinPlay mobile app allows you to configure WiFi networks at any time, even during recording, without having to interrupt training sessions.
:::

### Requirements
- Smartphone with Bluetooth enabled
- TwinPlay app installed  
- Camera powered on and working

### Procedure
1. **Download the TwinPlay app** from your store (App Store/Google Play)
2. **Enable Bluetooth** on your smartphone  
3. **Open the app** and go to the "WiFi Configuration" section
4. **Connect to the camera** via Bluetooth (the camera will appear in the list of available devices)
5. **Select the desired WiFi network** from the list of available networks
6. **Enter the WiFi password**
7. **Confirm the configuration** - the camera will connect automatically

:::info[Mobile App Advantages]
- ✅ **Configure during recording**: Change WiFi network without stopping recording
- ✅ **Manage multiple networks**: Save and manage multiple WiFi networks
- ✅ **Real-time monitoring**: See connection status and signal strength  
- ✅ **No interruptions**: No need to put camera in pairing mode
- ✅ **Easier**: No QR codes or web browser required
:::

## Pairing Procedure

1. Turn on the Wi-Fi network you want to connect the camera to  
2. Turn on the processing unit. It's important to power it on **AFTER** the Wi-Fi network is active  
3. Wait until the LED flashes in **double blink mode** before proceeding  
   (See [**Indicator States**](before-starting#indicator-light-states) and [**Commands**](before-starting#commands) for more info)
   
<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
  <span style={{ fontSize: '20px'}}>wait</span> {/* Large arrow */}
  <img src="/img/blink2_400ms_50_1000ms.gif" alt="lampeggio_doppio" style={{ width: '80px' }} />
</div>

<details>
  <summary>a) Using QR code</summary>
  
3. Scan the first QR code to connect to the TwinPlay Wi-Fi

   <img src="/img/QR_wifi.png" alt="qr_wifi" width="150" />

4. Scan the second QR code to open the TwinPlay configuration page

   <img src="/img/QR_link.png" alt="qr_link" width="150" />
</details>

<details>
  <summary>b) Without QR code</summary>

3. Connect to the network
```
Rete:       TwinPlay 
Password:   TwinPlayCamera 
```

4. Open your browser (Chrome, Safari, etc.) and go to **http://192.168.4.1:5000**, the TwinPlay configuration page will open.
</details>

### Saving the Network

5. Select the Wi-Fi network you want to connect the camera to, enter the password, and click “Connect”  
6. Wait one minute.

If the pairing is successful, the LED will **start blinking steadily**, and recording will begin immediately.  
If it returns to **double blink mode**, pairing failed: check internet access and make sure the password is correct.
