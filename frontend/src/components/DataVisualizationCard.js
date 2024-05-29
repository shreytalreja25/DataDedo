import React from 'react';
// import { Bar } from 'react-chartjs-2';
// import { Chart } from 'chart.js';

function DataVisualizationCard() {
//   const data = {
//     labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//     datasets: [
//       {
//         label: 'Sample Data',
//         data: [12, 19, 3, 5, 2, 3, 7],
//         backgroundColor: 'rgba(75,192,192,0.2)',
//         borderColor: 'rgba(75,192,192,1)',
//         borderWidth: 1,
//       },
//     ],
//   };

//   const options = {
//     scales: {
//       y: {
//         beginAtZero: true,
//       },
//     },
//   };

  return (
    <div style={{ width: '500px', padding: '1rem', margin: '1rem', backgroundColor: 'lightblue' }}>
      <h2>Data Visualization</h2>
      <div style={{ height: '300px' }}>
        {/* <Bar data={data} options={options} /> */}
      </div>
    </div>
  );
}

export default DataVisualizationCard;
