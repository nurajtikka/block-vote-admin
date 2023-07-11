import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import useDashboardContext from '../app/contexts/DashboardContext';

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = (): JSX.Element => {
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
              text: `Candidate Wise Voting Criteria of ${capitalizeFirstLetter(selectedDistrict)} District`,
          },
      },
  };

  const constructedDataSet = districtWiseVotes?.counts.map((value) => (value.votes
));
const constructedLabels = districtWiseVotes?.counts.map((value) => value.name);

    const data = {
        labels: constructedLabels,
        datasets: [
            {
                label: 'Gathered Votes:',
                data: constructedDataSet,
                backgroundColor: [
                    'rgb(104, 224, 64)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 206, 86)',
                    'rgb(237, 5, 5)',
                ]
            },
        ],
    };
    return <Doughnut options={options} data={data} />;
};

export default DoughnutChart;
