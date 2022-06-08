import Head from "next/head";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import useToken from "../../helper/useToken";


const Employee = ({ query }) => {
    const router = useRouter();
    const { token, setToken } = useToken();
    const [currEmp, setCurrEmp] = useState({});

    useEffect(() => {
        getEmployees().then((emps) => {
            console.log(emps, "employees, Details Page");
            console.log(query.id, "Page name Id");

            emps.map(e => {
                if (e._id === query.empId) {
                    setCurrEmp(e);
                }
            })
            console.log(currEmp,"Current Emp, details page")

        });
    }, []);

    const getEmployees = async () => {

        const data = await fetch("https://storewind.australiaeast.cloudapp.azure.com/api/employees/get_employee", {
            method: "POST",
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            credentials: "include",
            body: JSON.stringify({ id: router.query.id , storeId:token.currentUser.email}),
        });
        let res = await data.json()
        return res; 
    };
 

    return (
        
        <div>
        <Head>
            <title>Storewind | Employee Details</title>
        </Head>
        <Navbar pageTitle={"Employee Details"} />
        <div className="p-4 m-2" key={currEmp._id}>
            <div className="py-4 flex justify-between space-x-10 ">
                <div className="w-full text space-y-10">

                    <div className="flex justify-between">
                        <p className="font-bold">Employee ID:</p>
                        <p className="">{currEmp._id}</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="font-bold">Joining Date:</p>
                        <p className="">{new Date(currEmp.joining_date).toDateString()}</p>
                    </div> 
                    <div className="flex justify-between">
                        <p className="font-bold">Name:</p>
                        <p className="">{currEmp.emp_name}</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="font-bold">Phone No.:</p>
                        <p className="">{currEmp.phone}</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="font-bold">CNIC:</p>
                        <p className="">{currEmp.emp_name}</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="font-bold">Address:</p>
                        <p className="">{currEmp.address}</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="font-bold">Salary:</p>
                        <p className="">{currEmp.salary}</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="font-bold">Total Sales:</p>
                        <p className="">{currEmp.totalSales}</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="font-bold">Current Duty Schedule:</p>
                        <p className="">{currEmp.dutySchedule}</p>
                    </div>
          
                </div>
            </div>

            {/* Buttons */}
            <div className="pt-4 space-x-4 flex justify-end items-center">
            <Link href={"/employees/edit/?id=" + currEmp._id}>
                <button
                type="button"
                className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-[#44814E] border border-transparent rounded-md hover:bg-green-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-500"
                >
                Edit
                </button>
            </Link>
            <Link href={"/employees/delete/?id=" + currEmp._id}>
                <button
                type="button"
                className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-red-400 border border-transparent rounded-md hover:bg-red-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500"
                >
                Delete
                </button>
            </Link>
            </div>
        </div>
        </div>
    );
};

Employee.getInitialProps = ({ query }) => {
  return { query };
};

export default Employee;
