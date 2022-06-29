import Head from "next/head";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import LoadingSpinner from "../../components/LoadingSpinner";


const Employee = ({ query }) => {
    const router = useRouter();
    const [currEmp, setCurrEmp] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        setIsLoading(true)
        getEmployees().then((emps) => {
            console.log(emps, "employees, Details Page");
            console.log(query.id, "Page name Id");

            emps.map(e => {
                if (e._id === query.empId) {
                    setCurrEmp(e);
                }
            })
            console.log(currEmp, "Current Emp, details page")
            setIsLoading(false)

        });
    }, []);

    const getEmployees = async () => {
        console.log({ emp_id: router.query.empId })
        try {
            
            const data = await fetch("https://storewind.australiasoutheast.cloudapp.azure.com/api/employees/get_employee", {
                method: "POST",
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                credentials: "include",
                body: JSON.stringify({ emp_id: router.query.empId}),
            });
            let res = await data.json()
            console.log(res);
            return res; 
        } catch (error) {
            console.log(error)
            setErrorMessage("Unable to fetch Employee Detials");
        }
        
    };
 

    const renderContent = (

        <div className="p-4 m-2" key={currEmp._id}>
            <div className="py-4 flex justify-between space-x-10 ">
                <div className="w-full text space-y-10">

                    <div className="flex flex-col gap-2 md:flex-row justify-between">
                        <p className="font-bold">Employee ID:</p>
                        <p>{currEmp._id}</p>
                    </div>
                    <div className="flex flex-col gap-2 md:flex-row justify-between">
                        <p className="font-bold">Joining Date:</p>
                        <p >{new Date(currEmp.joining_date).toDateString()}</p>
                    </div> 
                    <div className="flex flex-col gap-2 md:flex-row justify-between">
                        <p className="font-bold">Name:</p>
                        <p>{currEmp.emp_name}</p>
                    </div>
                    <div className="flex flex-col gap-2 md:flex-row justify-between">
                        <p className="font-bold">Phone No.:</p>
                        <p>{currEmp.phone}</p>
                    </div>
                    <div className="flex flex-col gap-2 md:flex-row justify-between">
                        <p className="font-bold">CNIC:</p>
                        <p>{currEmp.emp_name}</p>
                    </div>
                    <div className="flex flex-col gap-2 md:flex-row justify-between">
                        <p className="font-bold">Address:</p>
                        <p>{currEmp.address}</p>
                    </div>
                    <div className="flex flex-col gap-2 md:flex-row justify-between">
                        <p className="font-bold">Salary:</p>
                        <p>{currEmp.salary}</p>
                    </div>
                    <div className="flex flex-col gap-2 md:flex-row justify-between">
                        <p className="font-bold">Total Sales:</p>
                        <p>{currEmp.totalSales}</p>
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
    )

    const loadingSpinner = (
        <div className="w-full h-screen flex justify-center items-center ">
            <LoadingSpinner />
        </div>
    );

    return (
        
        <div>
            <Head>
                <title>Storewind | Employee Details</title>
            </Head>
            <Navbar pageTitle={"Employee Details"} />
            {/* Content  */}
            {isLoading ? loadingSpinner : renderContent}
            {errorMessage && <div className="p-4 text-xl font-bold text-red-500">{errorMessage}</div>}
            {/* Content End  */}
        </div>
    );
};

Employee.getInitialProps = ({ query }) => {
  return { query };
};

export default Employee;
