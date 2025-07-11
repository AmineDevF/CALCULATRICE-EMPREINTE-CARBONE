
        // 🎯 WORKSHOP 1 : CALCULATRICE EMPREINTE CARBONE
        
        // Étape 1 : Sélection des éléments DOM
        // TODO: Sélectionner tous les inputs et le bouton de calcul
        
        // Étape 2 : Fonction de calcul
        // TODO: Créer une fonction qui calcule l'empreinte pour chaque catégorie
        
        // Étape 3 : Affichage des résultats
        // TODO: Mettre à jour le DOM avec les résultats calculés
        
        // Étape 4 : Recommandations dynamiques
        // TODO: Générer des conseils basés sur les résultats
        
        // Étape 5 : Animations et interactions
        // TODO: Ajouter des animations pour l'affichage des résultats

        // EXERCICES PROGRESSIFS :
        
        console.log('🎯 Workshop 1 : Calculatrice Empreinte Carbone');
        console.log('📋 Objectifs d\'apprentissage :');
        console.log('1. Sélection d\'éléments DOM');
        console.log('2. Lecture de valeurs d\'inputs');
        console.log('3. Calculs mathématiques');
        console.log('4. Mise à jour du DOM');
        console.log('5. Génération dynamique de contenu');
        console.log('6. Gestion d\'événements');
        console.log('');
        console.log('🚀 Commencez par implémenter les fonctions une par une !');

        // SOLUTION COMPLÈTE (à décommenter pour voir le résultat) :
        
        // Configuration des facteurs d'émission
        const emissionFactors = {
            transport: {
                car: {
                    "1.8": 1.8,  // Essence
                    "1.6": 1.6,  // Diesel
                    "0.5": 0.5,  // Hybride
                    "0.1": 0.1,  // Électrique
                    "2.3": 2.3   // SUV
                },
                public: 0.05  // Transport en commun
            },
            energy: {
                electricity: 0.4,  // kWh vers kg CO2
                heating: {
                    "0.4": 0.4,   // Électricité
                    "0.2": 0.2,   // Gaz
                    "0.3": 0.3,   // Fioul
                    "0.1": 0.1,   // Pompe à chaleur
                    "0.05": 0.05  // Solaire
                }
            },
            food: {
                meat: 2.5,      // Par repas avec viande
                local: 0.8      // Réduction pour local'
            }
        };

        // Sélection des éléments
        const inputs = {
            carKm: document.getElementById('carKm'),
            carType: document.getElementById('carType'),
            publicTransport: document.getElementById('publicTransport'),
            electricity: document.getElementById('electricity'),
            heating: document.getElementById('heating'),
            meat: document.getElementById('meat'),
            local: document.getElementById('local')
        };

        const calculateBtn = document.getElementById('calculateBtn');
        const results = document.getElementById('results');
        const totalEmission = document.getElementById('totalEmission');
        const breakdown = document.getElementById('breakdown');
        const tips = document.getElementById('tips');
        const levelFill = document.getElementById('levelFill');
        const levelText = document.getElementById('levelText');

        // Fonction principale de calcul
        function calculateEmissions() {
            const data = {};
            
            // Lecture des valeurs
            Object.keys(inputs).forEach(key => {
                data[key] = parseFloat(inputs[key].value) || 0;
            });

            // Calculs par catégorie
            const transport = calculateTransport(data);
            const energy = calculateEnergy(data);
            const food = calculateFood(data);

            const total = transport + energy + food;

            // Affichage des résultats
            displayResults(total, { transport, energy, food });
            generateRecommendations({ transport, energy, food }, data);
            updateLevelIndicator(total);
        }

        // Calcul transport
        function calculateTransport(data) {
            const carEmission = data.carKm * parseFloat(data.carType);
            const publicEmission = data.publicTransport * emissionFactors.transport.public;
            return carEmission + publicEmission;
        }

        // Calcul énergie
        function calculateEnergy(data) {
            const electricityEmission = (data.electricity / 30) * emissionFactors.energy.electricity;
            const heatingMultiplier = parseFloat(data.heating);
            return electricityEmission * heatingMultiplier;
        }

        // Calcul alimentation
        function calculateFood(data) {
            const meatEmission = (data.meat / 7) * emissionFactors.food.meat;
            const localReduction = (data.local / 100) * emissionFactors.food.local;
            return Math.max(0, meatEmission - localReduction);
        }

        // Affichage des résultats
        function displayResults(total, breakdown_data) {
            totalEmission.textContent = total.toFixed(1);
            
            breakdown.innerHTML = `
                <div class="breakdown-item">
                    <div class="breakdown-value">${breakdown_data.transport.toFixed(1)}</div>
                    <div class="breakdown-label">Transport</div>
                </div>
                <div class="breakdown-item">
                    <div class="breakdown-value">${breakdown_data.energy.toFixed(1)}</div>
                    <div class="breakdown-label">Énergie</div>
                </div>
                <div class="breakdown-item">
                    <div class="breakdown-value">${breakdown_data.food.toFixed(1)}</div>
                    <div class="breakdown-label">Alimentation</div>
                </div>
            `;

            results.classList.add('visible');
        }

        // Génération de recommandations
        function generateRecommendations(emissions, data) {
            const recommendations = [];

            if (emissions.transport > 10) {
                recommendations.push('Privilégiez les transports en commun ou le vélo');
                recommendations.push('Considérez un véhicule plus écologique');
            }

            if (emissions.energy > 8) {
                recommendations.push('Réduisez votre consommation électrique');
                recommendations.push('Améliorez l\'isolation de votre logement');
            }

            if (emissions.food > 6) {
                recommendations.push('Réduisez votre consommation de viande');
                recommendations.push('Privilégiez les produits locaux et de saison');
            }

            if (recommendations.length === 0) {
                recommendations.push('Excellent ! Continuez vos efforts écologiques');
            }

            tips.innerHTML = recommendations.map(tip => `<li>${tip}</li>`).join('');
        }

        // Indicateur de niveau
        function updateLevelIndicator(total) {
            let level, color, percentage;

            if (total < 10) {
                level = 'Excellent';
                color = '#2ecc71';
                percentage = 25;
            } else if (total < 20) {
                level = 'Bon';
                color = '#f39c12';
                percentage = 50;
            } else if (total < 30) {
                level = 'Moyen';
                color = '#e67e22';
                percentage = 75;
            } else {
                level = 'À améliorer';
                color = '#e74c3c';
                percentage = 100;
            }

            levelText.textContent = level;
            levelText.style.color = color;
            levelFill.style.width = percentage + '%';
            levelFill.style.backgroundColor = color;
        }

        // Event listener
        calculateBtn.addEventListener('click', calculateEmissions);

        // Calcul automatique lors du changement
        Object.values(inputs).forEach(input => {
            input.addEventListener('input', () => {
                if (results.classList.contains('visible')) {
                    calculateEmissions();
                }
            });
        });
      