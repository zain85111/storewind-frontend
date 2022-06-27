import {
    CurrencyDollarIcon, ChartBarIcon, TicketIcon, ClipboardListIcon,
} from "@heroicons/react/outline";

import { useEffect, useState } from "react";
import { Tab } from "@headlessui/react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import LoadingSpinner from "../components/LoadingSpinner";


function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
);


const incomeExpanseDataOptions = {
    responsive: true,
    plugins: {
        legend: {
            position: 'bottom',
            align: 'end',
            labels: {
                usePointStyle: true,
            },
        },


    },
    maintainAspectRatio: true,
    scales: {
        x: {
            grid: {
                display: false,
            },
        },


    }
};


export const DashboardContent = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const [topAnalytics, setTopAnalytics] = useState(null);
    const [chartData, setChartData] = useState(null);
    const [topProduct, setTopProduct] = useState(null);
    const [topBrands, setTopBrands] = useState(null);

    const [topAnalyticsTime, setTopAnalyticsTime] = useState("daily");
    const [topProductTime, setTopProductTime] = useState("daily");
    const [topBrandsTime, setTopBrandsTime] = useState("daily");


    const [incomeExpanseDataLabels, setIncomeExpanseDataLabels] = useState(['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun']);
    const [dataSales, setDataSales] = useState([0, 0, 0, 0, 0, 0, 0])
    const [dataRevenue, setDataRevenue] = useState([0, 0, 0, 0, 0, 0, 0])
    const incomeExpanseData = {
        labels: incomeExpanseDataLabels,
        datasets: [


            {
                label: 'Sales',
                data: dataSales,
                fill: 'start',
                borderColor: 'rgb(9, 189, 60)',
                backgroundColor: 'rgb(9, 189, 60,0.8)',
            },
            {
                label: 'Revenue',
                data: dataRevenue,
                fill: 'start',
                borderColor: 'rgb(253, 83, 83)',
                backgroundColor: 'rgba(253, 83, 83,0.8)',
            },
        ],
    };
    useEffect(()=>{
        incomeExpanseData = {
            labels: incomeExpanseDataLabels,
            datasets: [
    
    
                {
                    label: 'Sales',
                    data: dataSales,
                    fill: 'start',
                    borderColor: 'rgb(9, 189, 60)',
                    backgroundColor: 'rgb(9, 189, 60,0.8)',
                },
                {
                    label: 'Revenue',
                    data: dataRevenue,
                    fill: 'start',
                    borderColor: 'rgb(253, 83, 83)',
                    backgroundColor: 'rgba(253, 83, 83,0.8)',
                },
            ],
        };
    },[incomeExpanseDataLabels, dataSales, dataRevenue]) 

    useEffect(() => {
        setIsLoading(true)
        let d = new Date();
        let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
        let mo = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(d);
        let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
        d = `${ye}-${mo}-${da}` + "T00:00:00.000Z";
        const getAnalytics = async () => {
            console.log(d);
            let response = await fetch("https://storewind.australiasoutheast.cloudapp.azure.com/api/analytics/weekly_bar_analytics", {
                method: "POST",
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                credentials: "include",
                body: JSON.stringify({ date: d }),
            })
            const res1 = await response.json()
            const salesData = [];
            const revenueData = [];
            for(let i=res1.length-1;i>=0;i--){
                salesData.push(res1[i].totalSales);
                revenueData.push(res1[i].revenue);
            }

            const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 
              'Friday', 'Saturday'];
            var goBackDays = 7;

            var today = new Date();
            var daysSorted = [];

            for(var i = 0; i < goBackDays; i++) {
            var newDate = new Date(today.setDate(today.getDate() - 1));
            daysSorted.push(days[newDate.getDay()]);
            }
            setDataSales(salesData);
            setDataRevenue(revenueData);
            setIncomeExpanseDataLabels(daysSorted);
            setChartData(res1);
            console.log(`https://storewind.australiasoutheast.cloudapp.azure.com/api/analytics/${topBrandsTime}_top_brands`);
            let response2 = await fetch(`https://storewind.australiasoutheast.cloudapp.azure.com/api/analytics/${topBrandsTime}_top_brands`, {
                method: "POST",
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                credentials: "include",
                body: JSON.stringify({ date: d }),
            })

            const res = await response2.json()
            console.log(res)
            setTopBrands(res);

            let response3 = await fetch(`https://storewind.australiasoutheast.cloudapp.azure.com/api/analytics/${topProductTime}_top_products`, {
                method: "POST",
                headers: {

                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                credentials: "include",
                body: JSON.stringify({ date: d }),
            })
            setTopProduct(await response3.json());


            let response4 = await fetch(`https://storewind.australiasoutheast.cloudapp.azure.com/api/analytics/${topAnalyticsTime}_analytics`, {
                method: "POST",
                headers: {

                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                credentials: "include",
                body: JSON.stringify({ date: d }),
            })

            setTopAnalytics(await response4.json());
            setIsLoading(false)
        }
        getAnalytics();

    }, [topBrandsTime, topProductTime, topAnalyticsTime]);


    function intToString(value) {
        var suffixes = ["", "k", "m", "b", "t"];
        var suffixNum = Math.floor(("" + value).length / 3);
        var shortValue = parseFloat((suffixNum != 0 ? (value / Math.pow(1000, suffixNum)) : value).toPrecision(2));
        if (shortValue % 1 != 0) {
            shortValue = shortValue.toFixed(1);
        }
        return shortValue + suffixes[suffixNum];
    }
    const durations = ['daily', 'weekly', 'monthly']
    const topProducts = null;

    const renderContent = (

        <div className="p-5 space-y-6">
            <div className="gap-4 flex flex-wrap xl:flex-nowrap xl:space-x-4 justify-between items-center ">
                <div className="bg-white w-36 h-24 md:w-72 md:h-44 rounded-xl flex items-center  ">
                    <div className="flex items-center space-x-4 px-4 md:space-x-10 md:px-8 ">
                        <ChartBarIcon className="w-6 h-6 md:w-12 md:h-12 text-gray-500" />
                        <div className="space-y-1">
                            <p className="text-xl md:text-4xl font-bold text-gray-900">{topAnalytics == null ? " " : intToString(topAnalytics.totalSales)}</p>
                            <p className="text-gray-500 text-[10px] md:text-base">Total Sales</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white w-36 h-24 md:w-72 md:h-44 rounded-xl flex items-center  ">
                    <div className="flex items-center space-x-4 px-4 md:space-x-10 md:px-8 ">
                        <CurrencyDollarIcon className="w-6 h-6 md:w-12 md:h-12 text-gray-500" />
                        <div className="space-y-1">
                            <p className="text-xl md:text-4xl font-bold text-gray-900">{topAnalytics == null ? " " : intToString(topAnalytics.revenue)}</p>
                            <p className="text-gray-500 text-[10px] md:text-base">Total Revenue</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white w-36 h-24 md:w-72 md:h-44 rounded-xl flex items-center  ">
                    <div className="flex items-center space-x-4 px-4 md:space-x-10 md:px-8 ">
                        <TicketIcon className="w-6 h-6 md:w-12 md:h-12 text-gray-500" />
                        <div className="space-y-1">
                            <p className="text-xl md:text-4xl font-bold text-gray-900">{topAnalytics == null ? " " : intToString(topAnalytics.totalOrders)}</p>
                            <p className="text-gray-500 text-[10px] md:text-base">Total Orders</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white w-36 h-24 md:w-72 md:h-44 rounded-xl flex items-center  ">
                    <div className="flex items-center space-x-4 px-4 md:space-x-10 md:px-8 ">
                        <ClipboardListIcon className="w-6 h-6 md:w-12 md:h-12 text-gray-500" />
                        <div className="space-y-1">
                            <p className="text-xl md:text-4xl font-bold text-gray-900">{topAnalytics == null ? " " : intToString(topAnalytics.totalProductsSold)}</p>
                            <p className="text-gray-500 text-[10px] md:text-base">Total Products Sold</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Top Products  */}
            {topProduct ? (
                <div className="space-y-10 p-4 bg-white rounded-lg h-fit">
                    <div className="flex justify-between items-center h-14 ">
                        <div className="flex flex-col  items-start">
                            <p className="font-semibold ">Overview</p>
                            <p className="text-xs">Data of past week</p>
                        </div>

                    </div>
                    <div className="">
                        <Bar height={100} width={300} options={incomeExpanseDataOptions} data={incomeExpanseData} />
                    </div>

                </div>
            ) : (
                <></>
            )}

            {/* Summary of Stats Section  */}

            <div className="flex flex-col justify-between space-y-4 lg:items-center lg:flex-row lg:space-x-4">
                {/* Sales Stats */}
                {topBrands ? (
                    <div className="space-y-4 lg:w-1/2 hover:border-collapse  text-center items-center align-middle bg-white rounded-xl">
                        <div className="p-4 ">
                            <Tab.Group as={"div"} className="flex flex-col gap-12 md:gap-4">
                                <div className="flex flex-col space-y-3 md:flex-row justify-between md:items-center h-14 ">
                                    <div className="flex flex-col  items-start">
                                        <p className="font-semibold ">Top Brands</p>
                                        <p className="text-xs">Summary of top brand sales.</p>
                                    </div>
                                    <Tab.List className="flex p-1 space-x-1 md:w-1/2 bg-gray-100 rounded-xl">
                                        {durations.map((duration, idx) => (
                                            <Tab
                                                key={idx}
                                                onClick={() => { setTopBrandsTime(duration) }}

                                                className={({ selected }) =>
                                                    classNames(
                                                        'w-full py-2 text-xs leading-5 font-medium text-white rounded-lg',
                                                        'focus:outline-none focus:ring-2 ring-offset-2  ring-white ring-opacity-60',
                                                        selected
                                                            ? 'bg-green-700 shadow'
                                                            : 'text-green-700 hover:bg-white/[0.12] '
                                                    )
                                                }

                                            >
                                                {duration}
                                            </Tab>
                                        ))}
                                    </Tab.List>
                                </div>
                                <Tab.Panels className="">
                                    {Object.values(durations).map((posts, idx) => (
                                        <Tab.Panel
                                            key={idx}
                                            className={classNames(
                                                'overflow-x-auto',

                                            )}
                                        >
                                            <table className="hover:border-collapse w-full text-center">
                                                <thead className="text-sm">
                                                    <tr className="rounded-md">
                                                        <th scope="col" className="px-3 py-1">Sr.</th>
                                                        <th scope="col" className="px-6 py-3">Name</th>
                                                        <th scope="col" className="px-6 py-3">Items Sold</th>
                                                        <th scope="col" className="px-6 py-3">Sales</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {topBrands.slice(0, 5).map((item, i) => (
                                                        <tr
                                                            className="hover:bg-gray-100 text-xs "
                                                            key={item.brand}
                                                        >

                                                            <th scope="row" className="px-3 py-2">{i + 1}</th>
                                                            <td className="px-6 py-2">{item.brand}</td>
                                                            <td className="px-6 py-2">{item.count}</td>
                                                            <td className="px-6 py-2">{item.sales}</td>

                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </Tab.Panel>
                                    ))}
                                </Tab.Panels>
                            </Tab.Group>
                        </div>
                    </div>
                ) : (
                    <></>
                )}

                {/* Top Products  */}
                {topProduct ? (
                    <div className="space-y-4 lg:w-1/2 hover:border-collapse  text-center items-center align-middle bg-white rounded-xl">
                        <div className="p-4 ">
                            <Tab.Group as={"div"} className="flex flex-col gap-12 md:gap-4">
                                <div className="flex flex-col space-y-3 md:flex-row justify-between md:items-center h-14 ">
                                    <div className="flex flex-col  items-start">
                                        <p className="font-semibold ">Top Prodcuts</p>
                                        <p className="text-xs">Summary of top products sales.</p>
                                    </div>
                                    <Tab.List className="flex p-1 space-x-1 md:w-1/2 bg-gray-100 rounded-xl">
                                        {durations.map((duration, idx) => (
                                            <Tab
                                                key={idx}
                                                onClick={() => { setTopProductTime(duration) }}
                                                className={({ selected }) =>
                                                    classNames(
                                                        'w-full py-2 text-xs leading-5 font-medium text-white rounded-lg',
                                                        'focus:outline-none focus:ring-2 ring-offset-2  ring-white ring-opacity-60',
                                                        selected
                                                            ? 'bg-green-700 shadow'
                                                            : 'text-green-700 hover:bg-white/[0.12] '
                                                    )
                                                }

                                            >
                                                {duration}
                                            </Tab>
                                        ))}
                                    </Tab.List>
                                </div>
                                <Tab.Panels className="">
                                    {Object.values(durations).map((posts, idx) => (
                                        <Tab.Panel
                                            key={idx}
                                            className={classNames(
                                                'overflow-x-auto',

                                            )}
                                        >
                                            <table className="hover:border-collapse w-full text-center">
                                                <thead className="text-sm">
                                                    <tr className="rounded-md">
                                                        <th scope="col" className="px-3 py-1">Sr.</th>
                                                        <th scope="col" className="px-6 py-3">Name</th>
                                                        <th scope="col" className="px-6 py-3">Brand</th>
                                                        <th scope="col" className="px-6 py-3">Items Sold</th>
                                                        <th scope="col" className="px-6 py-3">Sales</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {topProduct.slice(0, 5).map((item, i) => (
                                                        <tr
                                                            className="hover:bg-gray-50 text-xs"
                                                            key={item.name}
                                                        >
                                                            <th scope="row" className="px-3 py-2">{i + 1}</th>
                                                            <td className="px-6 py-2">{item.product}</td>
                                                            <td className="px-6 py-2">{item.brand}</td>
                                                            <td className="px-6 py-2">{item.count}</td>
                                                            <td className="px-6 py-2">{item.sales}</td>

                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </Tab.Panel>
                                    ))}
                                </Tab.Panels>
                            </Tab.Group>
                        </div>
                    </div>
                ) : (
                    <></>
                )}

            </div>

        </div>
    )

    const loadingSpinner = (
        <div className="w-full h-screen flex justify-center items-center ">
            <LoadingSpinner />
        </div>
    );


    return (
        <>
            {isLoading ? loadingSpinner : renderContent}
            {errorMessage && <div className="p-4 text-xl font-bold text-red-500">{errorMessage}</div>}
        </>
    )
}