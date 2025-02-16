// Business Name Generator - Enhanced Version
const adjectives = [
    'awesome', 'cool', 'amazing', 'creative', 'fantastic', 
    'fabulous', 'wonderful', 'great', 'superb', 'marvelous',
    'innovative', 'dynamic', 'stellar', 'premium', 'elite'
];

const shopTypes = [
    'shop', 'store', 'emporium', 'boutique', 'hub',
    'works', 'studio', 'collective', 'enterprise', 'co'
];

const connectors = [
    'of', 'for', 'with', 'by', 'and', 
    'in', 'on', 'at', 'from', '&'
];


function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function generateBusinessName() {
    try {
        const adjective = getRandomElement(adjectives);
        const shopType = getRandomElement(shopTypes);
        const connector = getRandomElement(connectors);
        const name = document.getElementById('nameInput').value.trim() || 'Your Business';
        
        // Generate multiple variations and pick the best one
        const variations = [
            `${adjective} ${shopType} ${connector} ${name}`,
            `${name}'s ${adjective} ${shopType}`,
            `${adjective} ${name} ${shopType}`,
            `${name} ${connector} ${adjective} ${shopType}`
        ];
        
        return getRandomElement(variations);
    } catch (error) {
        console.error('Error generating business name:', error);
        return 'Creative Business Name';
    }
}


function generateAndDisplayName() {
    const resultElement = document.getElementById('result');
    resultElement.textContent = generateBusinessName();
    resultElement.style.animation = 'fadeIn 0.5s ease-in-out';
}

// Add animation to CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;
document.head.appendChild(style);



// Example usage
console.log(generateBusinessName());
