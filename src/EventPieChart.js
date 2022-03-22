import React, { useEffect, useState } from 'react';
import { Cell, Legend, Pie, PieChart, ResponsiveContainer } from "recharts";

const EventPieChart = ({events}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = () => {
      const genres = ['JavaScript', 'React', 'Node', 'jQuery', 'AngularJS'];
   
			const result = genres.map(genre => ({
				name: genre,
				value: events.filter(e => e.summary.split(' ').includes(genre)).length
			})); 
			return result.filter(data => data.value !== 0);
    };
        
  	setData(() => getData());    
  }, [events]);

  return ( 
    <>
		<ResponsiveContainer height={400} width={'40%'} className='pie-chart'>
			<PieChart width={730} height={250}
				margin={{
					top: 20, right: 20, bottom: 20, left: 20 }}>              
						<Pie
							data={data}
							cx="50%"
							cy="50%"
							labelLine={false}
							outerRadius={80}
							fill="#8884d8"
							dataKey="value"
							label={({ name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}>
							{data.map((entry, index) => (
									<Cell key={`cell-${index}`} fill={colors[index]} />
							))}
						</Pie>

						<Legend 
							layout="horizontal" 
							verticalAlign="bottom" 
							align="center" 
							height={25} 
						/>

				</PieChart>

		</ResponsiveContainer>
		</>
  );
}
 
export default EventPieChart;