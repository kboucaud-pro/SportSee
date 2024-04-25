import React, { useEffect, useState } from "react";
import { UserApi } from "../api/UserApi.tsx";
import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer } from "recharts";

function SkillsRadar(userId) {
	const [userSkills, setUserSkills] = useState<{ value: number, skill: string }[] | undefined>(undefined);

	useEffect(() => {
		UserApi.getUserPerformance(userId.userId).then((response) => {

			let tmpUserSkills: { value: number, skill: string }[] = [];

			response.data.data.forEach(element => {
				tmpUserSkills.push({ value: element.value, skill: response.data.kind[element.kind] })
			});

			setUserSkills(tmpUserSkills);
		});
	}, []);

	if (undefined !== userSkills) {
		console.log(userSkills);
	}

	return (
		<div className="skills-radar">
			{undefined === userSkills ? (
				""
			) : (
				<ResponsiveContainer width="100%" height="100%">
					<RadarChart cx="50%" cy="50%" outerRadius="70%" data={userSkills} >
						<PolarGrid polarRadius={[10, 20, 40, 60, 80]} radialLines={false} stroke="#FFFFFF"/>
						<PolarAngleAxis dataKey="skill" />
						<Radar dataKey="value" fill="#FF0101B2" fillOpacity={0.8} />
					</RadarChart>
				</ResponsiveContainer>
			)}
		</div>
	);
}

export default SkillsRadar;
