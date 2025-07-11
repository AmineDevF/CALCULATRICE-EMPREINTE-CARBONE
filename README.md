# 🎯 Carbon Footprint Calculator - Interactive Exercise

A practical JavaScript exercise to build a carbon footprint calculator with three main calculation functions for transportation, energy, and food emissions.

## 📋 Project Overview

This interactive exercise guides you through creating a carbon footprint calculator by implementing three core functions:
- **Transportation emissions** calculation
- **Energy consumption** emissions calculation  
- **Food consumption** emissions calculation

## 🚀 Getting Started

### Prerequisites
- Basic JavaScript knowledge
- Understanding of functions and mathematical operations
- A text editor or IDE

### Installation
1. Clone this repository
2. Open the HTML file in your browser
3. Follow the step-by-step instructions

## 📍 Exercise Steps

### Step 1: Transportation Emissions (`calculateTransport`)

**Objective**: Calculate CO₂ emissions from transportation based on:
- **Car**: distance × emission factor by vehicle type
- **Public transport**: distance × fixed factor (0.05 kg CO₂/km)

**Example Data**:
```javascript
data = {
    carKm: 25,        // 25 km by car
    carType: "1.8",   // Gasoline emission factor = 1.8 kg CO₂/km
    publicTransport: 10  // 10 km by public transport
}

// Expected result: 25 × 1.8 + 10 × 0.05 = 45.5 kg CO₂
```

**Function Template**:
```javascript
function calculateTransport(data) {
    // Your code here...
    // Tip: use parseFloat() to convert carType to number
    // Don't forget to return the result
}
```

**Hints**:
1. Calculate car emissions: `data.carKm * parseFloat(data.carType)`
2. Calculate public transport emissions: `data.publicTransport * 0.05`
3. Add both results and return the sum

### Step 2: Energy Emissions (`calculateEnergy`)

**Objective**: Calculate emissions from energy consumption:
- **Electricity**: (monthly consumption ÷ 30) × 0.4 kg CO₂/kWh
- **Heating**: multiply by heating type factor

**Example Data**:
```javascript
data = {
    electricity: 300,  // 300 kWh per month
    heating: "0.2"     // Natural gas factor = 0.2
}

// Calculation: (300 ÷ 30) × 0.4 × 0.2 = 10 × 0.4 × 0.2 = 0.8 kg CO₂
```

**Function Template**:
```javascript
function calculateEnergy(data) {
    // Your code here...
    // Step 1: calculate daily electricity emissions
    // Step 2: apply heating multiplier
}
```

**Hints**:
1. Daily electricity emissions: `(data.electricity / 30) * 0.4`
2. Heating factor: `parseFloat(data.heating)`
3. Multiply both results

### Step 3: Food Emissions (`calculateFood`)

**Objective**: Calculate food impact with local product reduction:
- **Meat**: (meals per week ÷ 7) × 2.5 kg CO₂/meal
- **Local reduction**: (% local ÷ 100) × 0.8 kg CO₂
- **Result**: Maximum between 0 and (meat emissions - local reduction)

**Example Data**:
```javascript
data = {
    meat: 14,    // 14 meat meals per week
    local: 60    // 60% local products
}

// Calculation:
// - Meat emissions: (14 ÷ 7) × 2.5 = 2 × 2.5 = 5 kg CO₂
// - Local reduction: (60 ÷ 100) × 0.8 = 0.48 kg CO₂
// - Result: max(0, 5 - 0.48) = 4.52 kg CO₂
```

**Function Template**:
```javascript
function calculateFood(data) {
    // Your code here...
    // Step 1: calculate daily meat emissions
    // Step 2: calculate local product reduction
    // Step 3: use Math.max(0, ...) to avoid negative values
}
```

**Hints**:
1. Daily meat emissions: `(data.meat / 7) * 2.5`
2. Local reduction: `(data.local / 100) * 0.8`
3. Final result: `Math.max(0, meatEmission - localReduction)`

## 🧪 Testing Your Functions

### Test Data
```javascript
const testData = {
    transport: { carKm: 25, carType: "1.8", publicTransport: 10 },
    energy: { electricity: 300, heating: "0.2" },
    food: { meat: 14, local: 60 }
};
```

### Expected Results
- **Transport**: 45.5 kg CO₂
- **Energy**: 0.8 kg CO₂
- **Food**: 4.52 kg CO₂
- **Total**: 50.82 kg CO₂ per day

## 🎉 Complete Integration Test

Once all three functions are implemented, test the complete integration:

```javascript
function runCompleteTest() {
    const completeData = { ...testData.transport, ...testData.energy, ...testData.food };
    
    const transport = calculateTransport(completeData);
    const energy = calculateEnergy(completeData);
    const food = calculateFood(completeData);
    const total = transport + energy + food;
    
    console.log('Transportation:', transport.toFixed(2), 'kg CO₂');
    console.log('Energy:', energy.toFixed(2), 'kg CO₂');
    console.log('Food:', food.toFixed(2), 'kg CO₂');
    console.log('TOTAL:', total.toFixed(2), 'kg CO₂ per day');
}
```

## 📊 Emission Factors Reference

### Transportation
- **Gasoline car**: 1.8 kg CO₂/km
- **Diesel car**: 2.0 kg CO₂/km
- **Electric car**: 0.5 kg CO₂/km
- **Public transport**: 0.05 kg CO₂/km

### Energy
- **Electricity**: 0.4 kg CO₂/kWh
- **Natural gas heating**: 0.2 multiplier
- **Electric heating**: 0.4 multiplier
- **Wood heating**: 0.1 multiplier

### Food
- **Meat consumption**: 2.5 kg CO₂/meal
- **Local products reduction**: 0.8 kg CO₂ per % of local consumption

## 🌱 Environmental Impact

This calculator helps users understand their daily carbon footprint and identify areas for improvement:
- **Transportation**: Switch to public transport or electric vehicles
- **Energy**: Improve home insulation, use renewable energy
- **Food**: Reduce meat consumption, buy local products



