import React, { useState } from 'react';
import { prepareVisualization } from '../controllers/visualizationController';

function VisualizationPrompt() {
  const [prompt, setPrompt] = useState('');
  const [chartData, setChartData] = useState([]);

  const handlePromptChange = (e) => {
    setPrompt(e.target.value);
  };

  const handleVisualization = () => {
    // Call the controller function to prepare the visualization
    prepareVisualization(prompt)
      .then((data) => {
        // Update the state with the chart data
        setChartData(data.chartData);
      })
      .catch((error) => {
        console.error('Error preparing visualization:', error);
        // Handle error if needed
      });
  };

  return (
    <div style={{ width: '300px', padding: '1rem', margin: '1rem', backgroundColor: '#f0f0f0' }}>
      <h2>Data Visualization Prompt</h2>
      <p>Enter a prompt to visualize the data:</p>
      <input type="text" value={prompt} onChange={handlePromptChange} />
      <button onClick={handleVisualization}>Visualize Data</button>
      {/* Implement the chart rendering using the chartData */}
    </div>
  );
}

export default VisualizationPrompt;
