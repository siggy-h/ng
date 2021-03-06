import * as React from "react";
import {
    CartesianGrid,
    XAxis,
    YAxis,
    BarChart,
    Bar,
    LabelList,
    Cell,
    Label,
    ResponsiveContainer,
} from "recharts";

import { UserContext } from "../context/UserContext";
import { transformTransationsToGraph } from "../utils";
import GraphKey, { GraphColors } from "./GraphKey";

const labelColor = "#000000";

const Graph: React.FC = () => {
    const { user, userAddress } = React.useContext(UserContext);

    const graphData = transformTransationsToGraph(
        user.transactions,
        userAddress
    );

    return (
        <>
            <ResponsiveContainer width="99%" height="90%">
                <BarChart
                    data={graphData}
                    margin={{ top: 20, right: 20, bottom: 25, left: 20 }}
                >
                    <Bar dataKey="amount" label>
                        {graphData.map((entry) => {
                            const fillColor = entry.credit
                                ? GraphColors.credit
                                : GraphColors.debit;

                            return (
                                <Cell key={entry.timestamp} fill={fillColor} />
                            );
                        })}
                        <LabelList dataKey="label" position="top" />
                        <LabelList
                            dataKey="amount"
                            position="center"
                            fill={labelColor}
                        />
                    </Bar>

                    <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
                    <XAxis dataKey="time">
                        <Label
                            value="Transactions"
                            offset={10}
                            position="bottom"
                        />
                    </XAxis>
                    <YAxis>
                        <Label
                            value="Amount"
                            offset={10}
                            angle={-90}
                            position="insideLeft"
                        />
                    </YAxis>
                </BarChart>
            </ResponsiveContainer>
            <GraphKey />
        </>
    );
};

export default Graph;
