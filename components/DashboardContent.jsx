import {
    CurrencyDollarIcon, ChartBarIcon,TicketIcon,ClipboardListIcon, ArrowUpIcon,ArrowDownIcon, DownloadIcon 
  } from "@heroicons/react/outline";
  
  import { useEffect, useState } from "react";
  import { Tab  } from "@headlessui/react";
  import Link from "next/link";
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
  import { Line, Chart,Bar } from 'react-chartjs-2';
  
  
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
  
  
  const lineTrendDataLabels = ['', '', ''];
  const lineTrendDataOptions = {
      responsive: true,
      plugins: {
          legend: {
              position: 'bottom',
              display:false,
          },
      },
      scales: {
          x: {
              grid: {
                  display:false,
              },
              display:false,
          },
          y: {
              grid: {
                  display:false,
              },
              display:false,
          },
      },
  
      maintainAspectRatio: true, 
    
  };
  const lineTrendData = {
      labels: lineTrendDataLabels,
      datasets: [{
          label: {
              display:false,
          },
          data: [95, 59, 80,],
          fill: 'origin',
          borderColor: 'rgb(725, 192, 192)',
          tension: 0.1
      }]
  };
  
  const incomeExpanseDataLabels = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
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
                  display:false,
              },
          },
  
  
      }
  };
  const incomeExpanseData = {
      labels :incomeExpanseDataLabels ,
      datasets: [
  
  
          {
              label: 'Income',
              data: [65, 59, 80, 81, 56, 55, 40],
              fill:'start',
              borderColor: 'rgb(9, 189, 60)',
              backgroundColor: 'rgb(9, 189, 60,0.8)',
          },
          {
              label: 'Expanses',
              data: [56, 55, 40, 65, 59, 80, 81],
              fill:'start',
              borderColor: 'rgb(253, 83, 83)',
              backgroundColor: 'rgba(253, 83, 83,0.8)',
          },
      ],
  };
  
  
  export const DashboardContent = () => {
      
      const [topAnalytics, setTopAnalytics] = useState(null);
      const [chartData, setChartData] = useState(null);
      const [topProduct, setTopProduct] = useState(null);
      const [topBrands, setTopBrands] = useState(null);
  
      const [topAnalyticsTime, setTopAnalyticsTime] = useState("daily");
      const [topProductTime, setTopProductTime] = useState("daily");
      const [topBrandsTime, setTopBrandsTime] = useState("daily");
  
      useEffect(()=>{
          let d = new Date();
          let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
          let mo = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(d);
          let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
          d = `${ye}-${mo}-${da}` + "T00:00:00.000Z";
          const getAnalytics = async()=>{
              console.log(d);
              let response = await fetch("https://storewind.australiaeast.cloudapp.azure.com/api/analytics/weekly_bar_analytics", {
                  method: "POST",
                  headers: {
                      'Accept': 'application/json, text/plain, */*',
                      'Content-Type': 'application/json'
                  },
                  credentials: "include",
                  body: JSON.stringify({date: d}),
              })
  
              setChartData(await response.json());
              console.log(`https://storewind.australiaeast.cloudapp.azure.com/api/analytics/${topBrandsTime}_top_brands`);
              let response2 = await fetch(`https://storewind.australiaeast.cloudapp.azure.com/api/analytics/${topBrandsTime}_top_brands`, {
                  method: "POST",
                  headers: {
                      'Accept': 'application/json, text/plain, */*',
                      'Content-Type': 'application/json'
                  },
                  credentials: "include",
                  body: JSON.stringify({date: d}),
              })
  
              const res = await response2.json()
              console.log(res)
              setTopBrands(res);

              let response3 = await fetch(`https://storewind.australiaeast.cloudapp.azure.com/api/analytics/${topProductTime}_top_products`, {
                  method: "POST",
                  headers: {
  
                      'Accept': 'application/json, text/plain, */*',
                      'Content-Type': 'application/json'
                  },
                  credentials: "include",
                  body: JSON.stringify({date: d}),
              })
              setTopProduct(await response3.json());

  
              let response4 = await fetch(`https://storewind.australiaeast.cloudapp.azure.com/api/analytics/${topAnalyticsTime}_analytics`, {
                  method: "POST",
                  headers: {
  
                      'Accept': 'application/json, text/plain, */*',
                      'Content-Type': 'application/json'
                  },
                  credentials: "include",
                  body: JSON.stringify({date: d}),
              })
  
              setTopAnalytics(await response4.json());
          }
          getAnalytics();
  
      },[topBrandsTime, topProductTime, topAnalyticsTime]);
  
     
      function intToString(value) {
          var suffixes = ["", "k", "m", "b","t"];
          var suffixNum = Math.floor((""+value).length/3);
          var shortValue = parseFloat((suffixNum != 0 ? (value / Math.pow(1000,suffixNum)) : value).toPrecision(2));
          if (shortValue % 1 != 0) {
              shortValue = shortValue.toFixed(1);
          }
          return shortValue+suffixes[suffixNum];
      }
      const durations = ['daily', 'weekly', 'monthly']
      const topProducts = null;
      return (
          <div className="p-5 space-y-6 ">
              <div className="flex justify-between space-x-4 items-center ">
                  <div className="bg-white w-72 h-44 rounded-xl flex items-center  ">
                      <div className="flex items-center space-x-10 px-8 ">
                          <ChartBarIcon className="w-12 h-12 text-gray-500" />
                          <div className="space-y-1">
                              <p className="text-4xl font-bold text-gray-900">{topAnalytics==null ?" ":intToString(topAnalytics.totalSales)}</p>
                              <p className="text-gray-500 text-">Total Sales</p>
                          </div>
                      </div>
                  </div>
                  <div className="bg-white w-72 h-44 rounded-xl flex items-center  ">
                      <div className="flex items-center space-x-10 px-8 ">
                          <CurrencyDollarIcon className="w-12 h-12 text-gray-500" />
                          <div className="space-y-1">
                              <p className="text-4xl font-bold text-gray-900">{topAnalytics==null ?" ":intToString(topAnalytics.revenue)}</p>
                              <p className="text-gray-500 text-">Total Revenue</p>
                          </div>
                      </div>
                  </div>
                  <div className="bg-white w-72 h-44 rounded-xl flex items-center  ">
                      <div className="flex items-center space-x-10 px-8 ">
                          <TicketIcon className="w-12 h-12 text-gray-500" />
                          <div className="space-y-1">
                              <p className="text-4xl font-bold text-gray-900">{topAnalytics==null ?" ":intToString(topAnalytics.totalOrders)}</p>
                              <p className="text-gray-500 text-">Total Orders</p>
                          </div>
                      </div>
                  </div>
                  <div className="bg-white w-72 h-44 rounded-xl flex items-center  ">
                      <div className="flex items-center space-x-10 px-8 ">
                          <ClipboardListIcon className="w-12 h-12 text-gray-500" />
                          <div className="space-y-1">
                              <p className="text-4xl font-bold text-gray-900">{topAnalytics==null ?" ":intToString(topAnalytics.totalProductsSold)}</p>
                              <p className="text-gray-500 text-">Total Products Sold</p>
                          </div>
                      </div>
                  </div>
              </div>
              
              {/* Top Products  */}
                  {topProduct ? (
                      <div className="space-y-10 p-4 bg-white rounded-lg h-fit">
                          <div className="flex justify-between items-center h-14 ">
                              <div className="flex flex-col  items-start">
                                  <p className="font-semibold ">Transaction Overview</p>
                                  <p className="text-xs">Income & Expanse summary of the total sales.</p>
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
              <div className="flex justify-between space-x-4">
                  {/* Sales Stats */}
                  {topBrands ? (
                      <div className="space-y-4 w-1/2 hover:border-collapse  text-center items-center align-middle bg-white rounded-xl">
                          <div className="p-4 ">
                              <Tab.Group>
                                  <div className="flex justify-between items-center h-14 ">
                                      <div className="flex flex-col  items-start">
                                          <p className="font-semibold ">Top Brands</p>
                                          <p className="text-xs">Summary of top brand sales.</p>
                                      </div>
                                      <Tab.List className="flex p-1 space-x-1 w-1/2 bg-gray-100 rounded-xl">
                                          {durations.map((duration,idx) => (
                                              <Tab
                                              key={idx}
                                              onClick={()=>{setTopBrandsTime(duration)}}

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
                                              '',
                                              
                                          )}
                                          >
                                              <table className="hover:border-collapse w-full   ">
                                                  <thead >
                                                      <tr className="h-16 text-sm">
                                                          <th>Name</th>
                                                          <th>Item Sold</th>
                                                          <th>Sales</th>
                                                      </tr>
                                                  </thead>
                                                  <tbody className="">
                                                  {topBrands.slice(0, 5).map((item, i) => (
                                                      <tr
                                                      className="h-14 hover:bg-gray-100  text-xs "
                                                      key={item.brand}
                                                      >
                                                          
                                                          
                                                          <td >{item.brand}</td>
                                                          <td>{item.count}</td>
                                                          <td>{item.sales}</td>
                                                       
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
                      <div className="space-y-4 w-1/2 hover:border-collapse  text-center items-center align-middle bg-white rounded-xl">
                          <div className="p-4 ">
                              <Tab.Group>
                                  <div className="flex justify-between items-center h-14 ">
                                      <div className="flex flex-col  items-start">
                                          <p className="font-semibold ">Top Prodcuts</p>
                                          <p className="text-xs">Summary of top products sales.</p>
                                      </div>
                                      <Tab.List className="flex p-1 space-x-1 w-1/2 bg-gray-100 rounded-xl">
                                          {durations.map((duration,idx) => (
                                              <Tab
                                              key={idx}
                                                onClick={()=>{setTopProductTime(duration)}}
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
                                              '',
                                              
                                          )}
                                          >
                                          <table className="hover:border-collapse w-full   ">
                                              <thead >
                                                  <tr className="h-16 text-sm">
                                                      <th>Name</th>
                                                      <th>Brand</th>
                                                      <th>Items Sold</th>
                                                      <th>Sales</th>
                                                  </tr>
                                              </thead>
                                              <tbody className="">
                                              {topProduct.slice(0, 5).map((item, i) => (
                                                  <tr
                                                  className="h-14 hover:bg-gray-100  text-xs "
                                                  key={item.name}
                                                  >
                                                     
                                                      <td>{item.product}</td>
                                                      <td>{item.brand}</td>
                                                      <td>{item.count}</td>
                                                      <td>{item.sales}</td>
                                                      
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
  }