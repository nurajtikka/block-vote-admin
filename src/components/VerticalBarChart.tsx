import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

type TProps = {
    text: JSX.Element | string;
};

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const VerticalBarChart = (): JSX.Element => {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: 'Chart.js Bar Chart',
            },
        },
    };

    const labels = ['Colombo', 'Gampaha', 'Kandy'];

    const data = {
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: [20, 30, 100],
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'Dataset 2',
                data: [100, 203, 500],
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    };
    return (
        <>
            <Bar options={options} data={data} />
        </>
    );
};

export default VerticalBarChart;
