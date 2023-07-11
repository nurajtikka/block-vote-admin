import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import useDashboardContext from '../app/contexts/DashboardContext';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const VerticalBarChart = (): JSX.Element | null => {
    const { selectedDistrict, districtWiseVotes } = useDashboardContext();
    const capitalizeFirstLetter = (value: string): string => value.charAt(0).toUpperCase() + value.slice(1);
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: `Party Wise Voting Criteria of ${capitalizeFirstLetter(selectedDistrict)} District`,
            },
        },
    };
    const labels = [capitalizeFirstLetter(selectedDistrict)];
    const constructedDataSet = districtWiseVotes?.counts.map((value) => ({
        label: value.party,
        data: [value.votes],
        backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
        borderColor: 'rgba(0,0,0,0)',
        borderWidth: 10,
        maxBarThickness: 70,
    }));
    const data = {
        labels,
        datasets: constructedDataSet,
    };
    return <Bar options={options} data={data as any} />;
};

export default VerticalBarChart;
