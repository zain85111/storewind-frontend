import Head from "next/head";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import {useState } from "react";
import { useRouter } from "next/router";
import useToken from "../../helper/useToken";


const AddEmployee = () => {
    const router = useRouter();
    const { token, setToken } = useToken();
    

    const [empName, setEmpName] = useState("");
    const [cnic, setCnic] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [address, setAddress] = useState("");
    const [salary, setSalary] = useState("");

    const addEmployee = async (e) => {

        let date = new Date();

        const hour = date.getHours() > 9 ? date.getHours() : "0" + date.getHours();
        const minutes = date.getMinutes() > 9 ? date.getMinutes() : "0" + date.getMinutes();
        

        const empBody = {
            "emp_name": empName,
            "joining_date": date.toISOString().split("T")[0] + " " + hour + ":" + minutes,
            "store_id": token.currentUser.email,
            "cnic": cnic,
            "totalSales": "0",
            "phone": phone,
            "emp_id": email,
            "emp_mail": email,"address": address,"salary":salary,
            "emp_password": password,
        }

        console.log(document.cookie)

        console.log(JSON.stringify(empBody));

        let response = await fetch("https://storewind.australiaeast.cloudapp.azure.com/api/employees", {
            method: "POST",
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            credentials: "include",
            body: JSON.stringify(empBody)
        })
        const empSignup = {
            "roleName": "EMP",
            "email": email,
            "password": password,
        }
        console.log(empSignup);
        let ress2 = await fetch("https://storewind.australiaeast.cloudapp.azure.com/api/users/signup", {
            method: "POST",
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            credentials: "include",
            body: JSON.stringify(empSignup)
        })
        console.log(await ress2.json());
        let res = await response
        console.log(res);

        if (response.ok) {
            setTimeout(() => {
                router.push("/employees");
            }, 1000);
        }
       
    };


    return (
        <div>
            <Head>
                <title>Storewind | Add Employee</title>
            </Head>
            <Navbar pageTitle={"Add Employee"} />
            <div className="p-4 m-2">
                <div className="py-4 space-x-10 bg-white">
                    <div>
                        <div className="grid grid-cols-3 gap-6 mx-4">
                            <div className=" col-span-6 sm:col-span-4">
                                <label
                                htmlFor="empName"
                                className="block text-sm font-medium text-gray-700 "
                                >
                                Name
                                </label>
                                <input
                                    type="text"
                                    name="empName"
                                    id="empName"
                                    value={empName}
                                    onChange={(e) => setEmpName(e.target.value)}
                                    className="p-1 w-full sm:text-sm border-black border-b-2 focus:border-green-600 outline-none "
                                    required
                                />
                            </div>
                            <div className=" col-span-6 sm:col-span-4">
                                <label
                                htmlFor="cnie"
                                className="block text-sm font-medium text-gray-700"
                                >
                                CNIC
                                </label>
                                <input
                                type="text"
                                name="cnic"
                                id="cnic"
                                value={cnic}
                                onChange={(e) => setCnic(e.target.value)}
                                    className="p-1 w-full sm:text-sm border-black border-b-2 focus:border-green-600 outline-none"
                                    required
                                />
                            </div>
                            <div className=" col-span-6 sm:col-span-4">
                                <label
                                htmlFor="phone"
                                className="block text-sm font-medium text-gray-700"
                                >
                                Phone No.
                                </label>
                                <input
                                type="text"
                                name="phone"
                                id="phone"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                    className="p-1 w-full sm:text-sm border-black border-b-2 focus:border-green-600 outline-none"
                                    required
                                />
                            </div>
                            <div className=" col-span-6 sm:col-span-4">
                                <label
                                htmlFor="salary"
                                className="block text-sm font-medium text-gray-700"
                                >
                                Salary
                                </label>
                                <input
                                type="text"
                                name="salary"
                                id="salary"
                                value={salary}
                                onChange={(e) => setSalary(e.target.value)}
                                    className="p-1 w-full sm:text-sm border-black border-b-2 focus:border-green-600 outline-none"
                                    required
                                />
                            </div>
                            <div className=" col-span-6 sm:col-span-4">
                                <label
                                htmlFor="address"
                                className="block text-sm font-medium text-gray-700"
                                >
                                Address
                                </label>
                                <input
                                type="text"
                                name="address"
                                id="address"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                    className="p-1 w-full sm:text-sm border-black border-b-2 focus:border-green-600 outline-none"
                                    required
                                />
                            </div>
                            <div className=" col-span-6 sm:col-span-4">
                                <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700"
                                >
                                Email
                                </label>
                                <input
                                type="text"
                                name="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                    className="p-1 w-full sm:text-sm border-black border-b-2 focus:border-green-600 outline-none"
                                    required
                                />
                            </div>
                            <div className=" col-span-6 sm:col-span-4">
                                <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700"
                                >
                                Password
                                </label>
                                <input
                                type="text"
                                name="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                    className="p-1 w-full sm:text-sm border-black border-b-2 focus:border-green-600 outline-none"
                                    required
                                />
                            </div>
                    
                        </div>
                        <div className="px-4 pt-10 bg-gray-50 text-right sm:px-6 space-x-4">
                            <Link href="/employees">
                                <button className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md  bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-100">
                                Cancel
                                </button>
                            </Link>
                            <button
                                // type="submit"
                                onClick={addEmployee}
                                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                            >
                                Add Employee
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    
};


export default AddEmployee;
