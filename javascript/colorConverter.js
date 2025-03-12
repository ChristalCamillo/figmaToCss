const axios = require('axios');
const fs = require('fs');

// Replace with your Figma file key and personal access token
const FILE_KEY = 'your-figma-file-key';
const TOKEN = 'your-figma-token';

// Figma API endpoint
const FIGMA_API_URL = `https://api.figma.com/v1/files/${FILE_KEY}`;

// Headers for the API request
const headers = {
    'X-FIGMA-TOKEN': TOKEN,
};

// Function to fetch Figma file data
async function fetchFigmaFile() {
    try {
        const response = await axios.get(FIGMA_API_URL, { headers });
        return response.data;
    } catch (error) {
        console.error('Error fetching Figma file:', error.message);
        process.exit(1);
    }
}

// Function to extract colors from Figma nodes
function extractColors(nodes) {
    const colors = {};

    function traverse(node) {
        if (node.type === 'RECTANGLE' && node.fills && node.fills.length > 0) {
            const fill = node.fills[0];
            if (fill.type === 'SOLID') {
                const color = fill.color;
                const rgba = `rgba(${Math.round(color.r * 255)}, ${Math.round(color.g * 255)}, ${Math.round(color.b * 255)}, ${color.a})`;
                colors[node.name] = rgba;
            }
        }

        if (node.children) {
            node.children.forEach(traverse);
        }
    }

    nodes.forEach(traverse);
    return colors;
}

// Function to generate CSS from colors
function generateCSS(colors) {
    let css = '';
    for (const [name, color] of Object.entries(colors)) {
        css += `.${name.toLowerCase().replace(/\s+/g, '-')} { background-color: ${color}; }\n`;
    }
    return css;
}

// Main function
async function main() {
    // Fetch Figma file data
    const figmaData = await fetchFigmaFile();

    // Extract colors from the document
    const colors = extractColors(figmaData.document.children);

    // Generate CSS
    const css = generateCSS(colors);

    // Write CSS to a file
    fs.writeFileSync('styles.css', css);
    console.log('CSS file generated successfully: styles.css');
}

// Run the script
main();