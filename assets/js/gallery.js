// JavaScript gallery file

const selection=document.querySelectorAll(".cell")
 
selection.forEach(element => {
    element.addEventListener("mouseenter", function () {
        this.style.borderLeft = "5px solid #ffffff";
    });

    element.addEventListener("mouseleave", function () {
        this.style.borderLeft = "none";
    });
});

const modal = document.getElementById('modal');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const closeBtn = document.getElementById('closeBtn');

const galleryData = [
    // Wildlife Protection
    { title: "Animals in Natural Habitats", description: "Wildlife in natural habitats plays a critical role in maintaining ecological balance. Protecting these environments ensures biodiversity and supports ecosystem stability (Guo, 2025)." },
    { title: "Conservation Efforts", description: "Conservation initiatives such as protected areas and wildlife programs help preserve endangered species and maintain ecological sustainability (Chango-Cañaveral et al., 2025)." },
    { title: "Protected Species", description: "Protecting endangered species is essential for preventing biodiversity loss and ensuring the survival of ecosystems for future generations (Guo, 2025)." },
    { title: "Wildlife Reserves", description: "Wildlife reserves provide safe habitats for species to thrive while minimizing human impact and supporting long-term conservation goals (Reeya et al., 2024)." },

    // Deforestation
    { title: "Logging Activities", description: "Unsustainable logging leads to habitat destruction and contributes to climate change by reducing carbon absorption capacity (Guo, 2025)." },
    { title: "Clear-Cut Forests", description: "Clear-cutting removes entire forest areas, disrupting ecosystems and causing severe biodiversity loss (Reeya et al., 2024)." },
    { title: "Reforestation Efforts", description: "Reforestation helps restore ecosystems, improve soil quality, and support biodiversity recovery in degraded lands (Chango-Cañaveral et al., 2025)." },
    { title: "Human Impact", description: "Human activities such as agriculture and urban expansion accelerate deforestation and threaten natural ecosystems (Guo, 2025)." },

    // Land Degradation & Protection
    { title: "Soil Erosion", description: "Soil erosion reduces land productivity and leads to loss of fertile soil, affecting agriculture and ecosystems (Reeya et al., 2024)." },
    { title: "Desertification", description: "Desertification transforms productive land into barren areas, reducing biodiversity and threatening food security (Guo, 2025)." },
    { title: "Afforestation Projects", description: "Afforestation improves land quality by restoring vegetation, preventing erosion, and supporting ecosystem recovery (Chango-Cañaveral et al., 2025)." },
    { title: "Sustainable Farming", description: "Sustainable farming practices help protect soil health, conserve water, and reduce environmental degradation (Reeya et al., 2024)." },

    // Take Action
    { title: "Tree Planting", description: "Tree planting initiatives contribute to ecosystem restoration and help combat climate change by increasing carbon absorption (Guo, 2025)." },
    { title: "Awareness Campaigns", description: "Environmental awareness programs educate communities about sustainability and encourage responsible behavior toward nature (Chango-Cañaveral et al., 2025)." },
    { title: "Eco-Friendly Initiatives", description: "Eco-friendly practices such as reducing waste and conserving resources support sustainable development and environmental protection (Reeya et al., 2024)." },
    { title: "Cleanup Drives", description: "Community cleanup activities help reduce pollution and protect natural habitats from environmental damage (Guo, 2025)." }
];

// Attach click to all cells

const cells = document.querySelectorAll('.cell');
cells.forEach((cell, index) => {
    cell.addEventListener('click', () => {
        const img = cell.querySelector('img');
        modalImage.src = img.src;
        modalImage.alt = galleryData[index].title;
        modalTitle.textContent = galleryData[index].title;
        modalDescription.textContent = galleryData[index].description;
        modal.classList.add('active');
    });
});

// Close modal
closeBtn.addEventListener('click', () => modal.classList.remove('active'));
modal.addEventListener('click', e => {
    if (e.target === modal) modal.classList.remove('active');
});

// Get modal body
const modalBody = document.getElementById("modalBody");

// Create container
const controls = document.createElement("div");
controls.className = "customization-controls";

// Create HTML inside (template literal)
controls.innerHTML = `
    <div class="control-group">
        <label for="colorScheme">Color Scheme:</label>
        <select id="colorScheme">
            <option value="default">Default</option>
            <option value="ocean">Ocean Blue</option>
            <option value="coral">Coral Reef</option>
            <option value="deep">Deep Sea</option>
        </select>
    </div>

    <div class="control-group">
        <label for="fontStyle">Font Style:</label>
        <select id="fontStyle">
            <option value="default">Default</option>
            <option value="serif">Serif</option>
            <option value="sans">Sans-Serif</option>
            <option value="mono">Monospace</option>
        </select>
    </div>
`;

// Append to modal
modalBody.appendChild(controls);
// COLOR CHANGE
document.getElementById('colorScheme').addEventListener('change', function () {
    switch (this.value) {
        case 'ocean':
            modalBody.style.backgroundColor = '#e3f2fd';
            modalBody.style.color = '#003d5c';
            
            break;

        case 'coral':
            modalBody.style.backgroundColor = '#fff5f5';
            modalBody.style.color = '#c53030';
            break;

        case 'deep':
            modalBody.style.backgroundColor = '#1a365d';
            modalBody.style.color = '#e3f2fd';
            break;

        default:
            resetModalStyle();
    }
});

// FONT CHANGE
document.getElementById('fontStyle').addEventListener('change', function () {
    switch (this.value) {
        case 'serif':
            modalBody.style.fontFamily = 'Georgia, serif';
            break;

        case 'sans':
            modalBody.style.fontFamily = 'Arial, sans-serif';
            break;

        case 'mono':
            modalBody.style.fontFamily = 'Courier New, monospace';
            break;

        default:
            modalBody.style.fontFamily = '';
    }
});