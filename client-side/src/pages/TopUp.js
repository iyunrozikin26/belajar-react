import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { topUpMoney } from "../stores/creators/userCreator";

export const TopUp = () => {
    const dispatch = useDispatch();
    const userId = localStorage.userId;

    const [money, setTopUp] = useState(0);

    const changeMoney = (e) => {
        const { value } = e.target;
        setTopUp(+value);
    };
    // console.log(+money);
    // console.log(typeof +money)
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
                                    <div>
                                        <input
                                            type="number"
                                            name="money"
                                            onChange={changeMoney}
                                            value={money}
                                            className="bg-gray-50 border text-center border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                            placeholder="Rp. 100.000"
                                            // required=""
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full text-white font-bold bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    >
                                        Top Up
                                    </button>
                                </form>
                            </center>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
