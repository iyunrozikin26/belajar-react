import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { topUpMoney } from "../stores/creators/userCreator";

export const TopUp = () => {
    const dispatch = useDispatch();
    const userId = localStorage.userId;

    const [money, setTopUp] = useState(0);

    const changeMoney = (e) => {
        const { value } = e.target;
        setTopUp(+value);
    };
    console.log(money);
    console.log(typeof Number(money));
    const submitTopUp = (e) => {
        e.preventDefault();
        dispatch(topUpMoney(userId, money));
    };
    return (
        <>
            <div className="formLogin">
                <div className="back relative p-4 w-full justify-center h-full md:h-auto">
                    <div className="layoutlogin relative  shadow dark:bg-gray-700">
                        <div className="py-6 px-6 lg:px-8">
                            <center>
                                <h3 className="mb-4 text-3xl mt-2 font-medium text-white dark:text-white">Top Up</h3>
                                <form className="space-y-6" onSubmit={submitTopUp}>
                                    <select onChange={changeMoney}>
                                        <option type="number" value="25000">
                                            IDR. 25.000
                                        </option>
                                        <option type="number" value="50000">
                                            IDR. 50.000
                                        </option>
                                        <option type="number" value="75000">
                                            IDR. 75.000
                                        </option>
                                        <option type="number" value="100000">
                                            IDR. 100.000
                                        </option>
                                        <option type="number" value="150000">
                                            IDR. 150.000
                                        </option>
                                    </select>
                                    <div className="flex">
                                        <button
                                            type="submit"
                                            className="w-full text-white font-bold bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                        >
                                            Top Up
                                        </button>{" "}
                                        |
                                        <Link to="/">
                                            <button
                                                type="button"
                                                className="w-full text-white font-bold bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-blue-800"
                                            >
                                                Back
                                            </button>
                                        </Link>
                                    </div>
                                </form>
                            </center>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
