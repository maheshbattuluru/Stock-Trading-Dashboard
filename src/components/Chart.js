import React, { useState, useRef, useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { FaExpandAlt } from "react-icons/fa";
import { IoIosAddCircleOutline } from "react-icons/io";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Legend,
    BarController, // Import BarController
    LineController // Import LineController
} from 'chart.js';
import { Line } from 'react-chartjs-2';

// Register the components you need
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Legend,
    BarController, // Import BarController
    LineController // Import LineController
);

const ChartComponent = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const chartRef = useRef(null);

    const handleClick = (index) => {
        setActiveIndex(index);
    };

    const buttonStyles = (index) => ({
        backgroundColor: activeIndex === index ? '#4c3df2' : '#f3f4f6',
        color: activeIndex === index ? '#fff' : '#000',
        border: 'none',
        padding: '8px 16px',
        borderRadius: '5px',
        cursor: 'pointer',
        fontWeight: 'bold',
    });

    const sampleData  = {
        '1d': {
            labels: ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00'],
            datasets: [
                {
                    type: 'line',
                    label: 'Price',
                    data: [299.50, 300.00, 299.75, 300.50, 300.25, 301.00, 300.75],
                    fill: false,
                    borderColor: '#3b82f6',
                    tension: 0.2,
                    pointBackgroundColor: '#fff',
                    pointHoverBackgroundColor: '#3b82f6',
                    pointHoverRadius: 8,
                    pointBorderWidth: 2,
                    yAxisID: 'y-axis-price'
                },
                {
                    type: 'bar',
                    label: 'Volume',
                    data: [1, 5, 8, 2, 1, 2.5, 2],
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1,
                    yAxisID: 'y-axis-volume',
                }
            ],
        },
        '3d': {
            labels: ['Mon', 'Tue', 'Wed'],
            datasets: [
                {
                    type: 'line',
                    label: 'Price',
                    data: [298.00, 300.50, 299.75],
                    fill: false,
                    borderColor: '#3b82f6',
                    tension: 0.3,
                    pointBackgroundColor: '#fff',
                    pointHoverBackgroundColor: '#3b82f6',
                    pointHoverRadius: 8,
                    pointBorderWidth: 2,
                },
                {
                    type: 'bar',
                    label: 'Volume',
                    data: [1, 2.5, 2],
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1,
                    yAxisID: 'y-axis-volume',
                }
            ],
        },
        '1w': {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
            datasets: [
                {
                    type: 'line',
                    label: 'Price',
                    data: [295.00, 267.50, 300.00, 278.50, 301.00],
                    fill: false,
                    borderColor: '#3b82f6',
                    tension: 0.4,
                    pointBackgroundColor: '#fff',
                    pointHoverBackgroundColor: '#3b82f6',
                    pointHoverRadius: 8,
                    pointBorderWidth: 2,
                },
                {
                    type: 'bar',
                    label: 'Volume',
                    data: [1, 5, 8, 2, 1],
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1,
                    yAxisID: 'y-axis-volume',
                }
            ],
        },
        '1m': {
            labels: ['1st', '5th', '10th', '15th', '20th', '25th', '30th'],
            datasets: [
                {
                    type: 'line',
                    label: 'Price',
                    data: [280.00, 270.00, 290.00, 300.00, 298.00, 305.00, 299.00],
                    fill: false,
                    borderColor: '#3b82f6',
                    tension: 0.5,
                    pointBackgroundColor: '#fff',
                    pointHoverBackgroundColor: '#3b82f6',
                    pointHoverRadius: 8,
                    pointBorderWidth: 2,
                },
                {
                    type: 'bar',
                    label: 'Volume',
                    data: [1, 5, 8, 2, 1,3,2],
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1,
                    yAxisID: 'y-axis-volume',
                }
            ],
        },
        '6m': {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [
                {
                    type: 'line',
                    label: 'Price',
                    data: [250.00, 270.00, 270.00, 280.00, 275.00, 300.00],
                    fill: false,
                    borderColor: '#3b82f6',
                    tension: 0.5,
                    pointBackgroundColor: '#fff',
                    pointHoverBackgroundColor: '#3b82f6',
                    pointHoverRadius: 8,
                    pointBorderWidth: 2,
                },
                {
                    type: 'bar',
                    label: 'Volume',
                    data: [1, 5, 8, 2, 1,3],
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1,
                    yAxisID: 'y-axis-volume',
                }
            ],
        },
        '1y': {
            labels: ['Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            datasets: [
                {
                    type: 'line',
                    label: 'Price',
                    data: [230.00, 225.00, 250.00, 245.00, 270.00, 280.00, 275.00, 300.00, 250.00, 320.00, 295.00, 340.00],
                    fill: false,
                    borderColor: '#3b82f6',
                    tension: 0.4,
                    pointBackgroundColor: '#fff',
                    pointHoverBackgroundColor: '#3b82f6',
                    pointHoverRadius: 8,
                    pointBorderWidth: 2,
                },
                {
                    type: 'bar',
                    label: 'Volume',
                    data: [1, 5, 8, 2, 1,3,1, 5, 8, 2, 1,3],
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1,
                    yAxisID: 'y-axis-volume',
                }
            ],
        },
        'max': {
            labels: ['2018', '2019', '2020', '2021', '2022', '2023'],
            datasets: [
                {
                    type: 'line',
                    label: 'Price',
                    data: [150.00, 180.00, 220.00, 250.00, 300.00, 350.00],
                    fill: false,
                    borderColor: '#3b82f6',
                    tension: 0.6,
                    pointBackgroundColor: '#fff',
                    pointHoverBackgroundColor: '#3b82f6',
                    pointHoverRadius: 8,
                    pointBorderWidth: 2,
                },
                {
                    type: 'bar',
                    label: 'Volume',
                    data: [1, 5, 8, 2, 1,3],
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1,
                    yAxisID: 'y-axis-volume',
                }
            ],
        }
    };
    
    const dataPeriod = ['1d', '3d', '1w', '1m', '6m', '1y', 'max'][activeIndex];    

    const data =sampleData[dataPeriod];

    const options = {
        scales: {
            x: {
                display: false,
                // barPercentage: 0.1, // Adjust this value to control the width of the bars (lower is thinner)
                // categoryPercentage: 0.1,
            },
            'y-axis-price': {
                type: 'linear',
                position: 'left',
                display: true, // Ensure the price line chart is visible
                beginAtZero: false,
                grid:{
                    display:true
                },
                ticks: {
                    display:false
                },
            },
            'y-axis-volume': {
                type: 'linear',
                position: 'right',
                display: false,
                beginAtZero: true,
                weight: 10, // This makes the volume chart take 1/3 of the height
                max: 19 * Math.max(...sampleData[dataPeriod].datasets[1].data), // Ensures it uses 1/3 of the total height
                ticks: {
                    maxTicksLimit: 3, // Limit the number of ticks for the volume axis
                    padding: 1, // Add padding between the ticks and the chart area
                },
            },
        },
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                enabled: true,
                mode: 'index',
                intersect: false,
                callbacks: {
                    label: function (tooltipItem) {
                        const label = tooltipItem.datasetIndex === 0
                            ? `$${tooltipItem.formattedValue}`
                            : `Volume: ${tooltipItem.formattedValue} milion`;
                        return label;
                    },
                },
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                titleColor: '#fff',
                bodyColor: '#fff',
                borderColor: '#3b82f6',
                borderWidth: 1,
                cornerRadius: 5,
                padding: 10,
            },
        },
        hover: {
            mode: 'index',
            intersect: false,
        },
    };
    

    const toggleFullscreen = async () => {
        if (!document.fullscreenElement) {
            try {
                await chartRef.current.requestFullscreen();
                if (window.screen.orientation && window.screen.orientation.lock) {
                    // Check if the screen orientation lock is supported
                    await window.screen.orientation.lock('landscape').catch((err) => {
                        console.warn(`Orientation lock failed: ${err.message}`);
                    });
                }
                setIsFullscreen(true);
            } catch (err) {
                alert(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
            }
        } else {
            document.exitFullscreen();
            document.body.style.backgroundColor = 'white';
            if (window.screen.orientation && window.screen.orientation.unlock) {
                window.screen.orientation.unlock();
            }
            setIsFullscreen(false);
        }
    };

    useEffect(() => {
        const handleFullscreenChange = () => {
            if (!document.fullscreenElement) {
                setIsFullscreen(false);
            }
        };

        document.addEventListener('fullscreenchange', handleFullscreenChange);

        return () => {
            document.removeEventListener('fullscreenchange', handleFullscreenChange);
        };
    }, []);

    return (
        <div ref={chartRef} className="p-4 w-full md:w-[70vw] relative" style={{ backgroundColor: isFullscreen ? '#f3f4f6' : '' }}>
            <div className="flex justify-between mb-2 text-sm font-semibold flex-wrap gap-2">
                <div className="flex items-center gap-3 flex-wrap justify-between sm:justify-normal">
                    <div
                        className="flex items-center gap-1 text-sm content-center cursor-pointer group"
                        onClick={toggleFullscreen}
                        style={{ color:'#000' }} // Change text color based on fullscreen state
                    >
                        {isFullscreen ? <AiOutlineClose className='text-lg text-gray-500 group-hover:text-black' /> : <FaExpandAlt className='text-lg text-gray-500 group-hover:text-black' />}
                        <span className='text-lg text-gray-500 group-hover:text-black'>{isFullscreen ? 'Close Fullscreen' : 'Fullscreen'}</span>
                    </div>
                    <div
                        className="flex items-center gap-1 text-sm content-center cursor-pointer group"
                        style={{ color:'#000' }} // Change text color based on fullscreen state
                    >
                        <IoIosAddCircleOutline className='text-lg text-gray-500 group-hover:text-black'/>
                        <span className='text-lg text-gray-500 group-hover:text-black'>Compare</span>
                    </div>
                </div>
                <div className="flex gap-2 flex-wrap">
                    {['1d', '3d', '1w', '1m', '6m', '1y', 'max'].map((label, index) => (
                        <button
                            key={index}
                            style={buttonStyles(index)}
                            onClick={() => handleClick(index)}
                        >
                            {label}
                        </button>
                    ))}
                </div>
            </div>
            <div className="w-full h-full">
                <Line data={data} options={options} />
            </div>
        </div>
    );
};

export default ChartComponent;
