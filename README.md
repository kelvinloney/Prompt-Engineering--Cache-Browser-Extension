# Prompt Engineering: Cache Browser Extension

This template displays how I built a Chrome browser extension with GitHub Copilot - via Prompt Engineering.

To be clear, as a developer, Prompt Engineering involves **providing instructions or comments in the IDE to generate specific coding suggestions**.

These instructions or comments, otherwise known as Prompts, can be code blocks, individual lines of code, or natural language comments that I write to generate a specific suggestion from GitHub Copilot.

Using **React and Vite** via Prompt Engineering, I built the Chrome browser extension _Cache Chrome Extension_ that clears browser cache.

Below, you'll be able to see the Context and step-by-step Prompts that I used as well as the code generated to create the browser extension.

## Demo


https://github.com/user-attachments/assets/edd67f51-0278-4894-b176-648ab57f0cfd

<br>
<br>

## CONTEXT

### How to use Vite to create a React app for a Chrome extension?
<br>
<br>

## STEP 1: File structure for a Chrome extension using React and Vite

<br>

<img width="664" height="976" alt="step-1--file-structure" src="https://github.com/user-attachments/assets/16ee0da9-9311-4820-b10d-06220ec51671" />

<br>
<br>

## STEP 2: Configure the `manifest.json` file for a Chrome extension using React and Vite

<br>

<img width="1418" height="1242" alt="step-2--manifest-json" src="https://github.com/user-attachments/assets/d37058d5-178c-42f0-86a7-8e170e10b96c" />

<br>
<br>

## STEP 3: Set up a service worker in the `background.js` file to run in the background, perform tasks, and respond to user events outside of the popup

<br>

<img width="1834" height="1166" alt="step-3--background-js" src="https://github.com/user-attachments/assets/df6f1324-2498-4564-b310-9518a572197a" />

<br>
<br>

## STEP 4: Create a `popup.html` file that serves as the user interface for the extension

<br>

<img width="1494" height="1698" alt="step-4--popup-html" src="https://github.com/user-attachments/assets/5facf064-a610-4770-83de-87f96450d4f3" />

<br>
<br>

## STEP 5: Create a `popup.js` file that handles user interactions in the popup and communicates with the background service worker

<br>

<img width="2140" height="5802" alt="step-5--popup-js" src="https://github.com/user-attachments/assets/b1245ae2-d137-4f39-92b9-d9150ab871c0" />

<br>
<br>

## STEP 6: Style the popup using `styles.css`

<br>

<img width="1554" height="4396" alt="step-6--styles-css" src="https://github.com/user-attachments/assets/677944ea-ebcf-4035-a1b2-9d2b7fcc9503" />
