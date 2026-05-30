---
id: before-starting
title: Before Starting
description: What to know before using the camera
---

# Before Starting

The unit has a single button with an integrated indicator light. The light indicates the unit's status, and the button allows interaction.
Below are the commands and indicator light states.
Once configured:

:::info[Important - 2025 Update]
The camera behavior has changed:

- **WiFi network configuration is now done entirely through the mobile app** (via Bluetooth), in any camera mode, even during recording
- **The old pairing mode** (double blink, QR code / web page setup) has been removed: it is no longer needed
- If no networks are detected, the camera can still **record offline**

:::

## Indicator Light States

The indicator light on the unit shows the device's status:

| Light                                                      | Status                                              | Description          | <div style={{width: "120px"}}>Recording</div> | <div style={{width: "120px"}}>Upload</div>   |
|------------------------------------------------------------|-----------------------------------------------------|---------------------|---------------------------------------------------|----------------------------------------------|
| ![off](/img/blink1_1000ms_0_0ms.gif)                      | Off or powering on                                  | Off                 | <div style={{textAlign: "center"}}>❌</div>        | <div style={{textAlign: "center"}}>❌</div>   |
| ![fast_blink](/img/blink1_200ms_50_0ms.gif)               | Recording paused                                    | Fast blinking       | <div style={{textAlign: "center"}}>❌</div>        | <div style={{textAlign: "center"}}>✅</div>   |
| ![regular_blink](/img/blink1_1000ms_50_0ms.gif)           | Recording and uploading                             | Regular blinking    | <div style={{textAlign: "center"}}>✅</div>        | <div style={{textAlign: "center"}}>✅</div>   |
| ![single_blink](/img/blink1_single_short.gif)             | Camera or USB cable disconnected (awaiting reconnect) | Single short blink  | <div style={{textAlign: "center"}}>❌</div>        | <div style={{textAlign: "center"}}>✅</div>   |
| ![light_on](/img/blink1_1000ms_100_0ms.gif)               | Final upload                                        | Solid light         | <div style={{textAlign: "center"}}>❌</div>        | <div style={{textAlign: "center"}}>✅</div>   |

:::info[Green-light versions: yellow light]
On versions with a **green status light**, during shutdown the light may turn **yellow**: this means the **final upload could not be completed** — for example, due to no internet connection. Versions with a **blue status light** do not have this indication.
:::

## Commands

| Command                                               | Description                         | Effect                                                      |
|------------------------------------------------------|-------------------------------------|--------------------------------------------------------------|
| ![short_press](/img/button_spring_green_short.gif)   | Single short press                  | Pause/resume recording (rapid blink) or new session        |
| ![long_press](/img/button_spring_green_long.gif)     | Single long press (more than 1s)    | Stop recording, start upload, and shut down                 |

## Playing Field Requirements

1. Use the camera in well-lit courts, avoiding direct sunlight in the field of view.
2. Ensure that the court lines are clearly visible and conform to standard dimensions.

If these conditions are not met, the product may not function correctly.

## Power Supply

The camera can be powered in two ways:

1. **Electrical outlet**: Use the included power adapter or a USB-C adapter with at least 15W at 5V.
2. **Power bank**: You can use the camera with a power bank via a USB-C cable. Ensure that the power bank provides at least 15W at 5V. The camera's average consumption is about 5W, so for one hour of use, approximately 5Wh (1000mAh at 5V) is required.

A power bank with a charge level indicator is recommended to prevent the camera from turning off during use.

## Data Usage

The camera consumes approximately 1.2 GB per hour of recording.

If using a mobile hotspot, ensure you have an adequate data plan.
