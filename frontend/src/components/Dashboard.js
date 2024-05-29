import React from 'react';
import TopBar from './TopBar';
import WelcomeCard from './WelcomeCard';
import DataUploadCard from './DataUploadCard';
import DataTableCard from './DataTableCard';
// import DataVisualizationCard from './DataVisualizationCard';

function Dashboard() {
    return (
        <div>
            <TopBar />
            <div style={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap' }}>
                <WelcomeCard />
                <DataUploadCard />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap' }}>
                <DataTableCard />
                <DataTableCard />
                {/* <DataVisualizationCard /> */}
            </div>
        </div>

    );
}

export default Dashboard;
