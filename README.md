# How to run

**Step 1: Install Node.js**

**If you don't already have Node.js installed, download and install it from the official website:\
**[**https://nodejs.org**](https://nodejs.org)

**To verify the installation, open a terminal or command prompt and run:**

bash

Copy

node -v

npm -v

**This should display the installed versions of Node.js and npm (Node Package Manager).**

**Step 2: Set Up Your Project**

1.  Create a new folder for your project:\
    bash\
    Copy

    mkdir figma-to-css
2.  cd figma-to-css

3.  Initialize a new Node.js project:\
    bash\
    Copy

    npm init -y

    This creates a package.json file in your project folder.
4.  Install the axios library (used for making HTTP requests):\
    bash\
    Copy

    npm install axios

**Step 3: Add the Script**

1.  Create a new file in your project folder, e.g., generate-css.js.
2.  Copy and paste the JavaScript code from the previous example into this file.

**Step 4: Update the Script with Your Figma Credentials**

**Replace the placeholders in the script with your actual Figma file key and personal access token:**

javascript

Copy

const FILE_KEY = 'your-figma-file-key'; // Replace with your Figma file key

const TOKEN = 'your-figma-token'; // Replace with your Figma personal access token

**Step 5: Run the Script**

**In your terminal or command prompt, navigate to your project folder and run the script:**

bash

Copy

node generate-css.js

**Step 6: Check the Output**

**If the script runs successfully, it will generate a styles.css file in the same folder as your script. Open the file to see the generated CSS.**

**Troubleshooting**

1.  **Figma API Errors**:

-   Ensure your FILE_KEY and TOKEN are correct.
-   Check if your Figma file is accessible via the API (e.g., it's not private or restricted).

3.  **Node.js Errors**:

-   Ensure you have Node.js and npm installed correctly.
-   Make sure you installed axios by running npm install axios.

5.  **File Permissions**:

-   If you encounter issues writing the styles.css file, ensure you have write permissions in the project folder.
