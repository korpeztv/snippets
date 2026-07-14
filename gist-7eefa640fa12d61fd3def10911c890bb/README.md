# How to Use This Script in DevTools

This script extracts all urls from a web page and displays them in a new tab as a blob. You can either run it as a one-off or save it permanently in your browser as a reusable snippet.

### Option 1: Run It Instantly (One-Off)

1. **Copy** the full JavaScript code.
2. Go to the web page you want to extract links from.
3. Open **DevTools** by pressing `F12` (or `Cmd` + `Option` + `I` on Mac) and click the **Console** tab.
4. Paste the code next to the blue arrow and press `Enter`.

---

### Option 2: Save It permanently as a Snippet (Recommended)

If you plan to use this tool often, saving it in DevTools means you won't have to keep copying and pasting the code.

1. Open **DevTools** (`F12`) and click on the **Sources** tab (in some browsers, you may need to click the `>>` icon to find it).
2. Look at the left-hand navigation pane and select the **Snippets** sub-tab.
* *Note: If it's hidden, press `Ctrl` + `Shift` + `P` (Windows) or `Cmd` + `Shift` + `P` (Mac), type "Snippets", and select "Show Snippets".*


3. Click **New snippet** and name it something memorable, like `blobExtractURL`.
4. Paste your code into the large editor panel on the right.
5. Save it by pressing `Ctrl` + `S` (Windows) or `Cmd` + `S` (Mac).

**How to run your saved snippet later:**
Whenever you are on a page where you want to gather URLs, just open your Snippets pane, right-click `blobExtractURL`, and click **Run** (or select it and hit `Ctrl` + `Enter`).


### What to Expect

A new browser tab will immediately open containing a plaintext list of every unique absolute URL found on that page.

> ### If the new tab fails to appear, check your browser's address bar for a **pop-up blocker icon** and choose "Allow pop-ups from this site."
>  # ```src:__korpez__```
> <img width="360" height="360" alt="clom-gang" src="https://gist.github.com/user-attachments/assets/a1bf41b0-9dc9-442f-aeec-dd9c6e4c3233" />
