import React from "react";
import guy1 from "../../assets/img/guy1.png";
import { GrPlan } from "react-icons/gr";
import { GoGoal } from "react-icons/go";
import { IoStatsChart } from "react-icons/io5";
import { CiSettings } from "react-icons/ci";

const UserEvent = () => {
	return (
		<div className="mt-0 w-full h-full md:flex lg:flex-col md:justify-start bg-inputRing">
			<div className="">
				<div className="p-2">
					<div className="flex bg-white h-full w-full rounded-lg gap-2 p-3 items-center">
						<img
							src={guy1}
							alt="userImage"
							className="w-14 h-14 rounded-full"
						/>
						<p className="text-lg bg-inputBG p-2 rounded-lg">
							Michael Agyemang Prempeh
						</p>
					</div>
				</div>

				<div className="p-2">
					<div className="bg-white h-full w-full  rounded-lg px-2 py-4 space-y-2">
						<h3 className="text-xl p-0 font-semibold font-mono">Shortcuts</h3>
						<div className=" rounded-lg gap-2 space-y-3">
							<p className="flex gap-5 bg-inputBG p-2 rounded-lg">
								<GoGoal className="text-2xl" />
								<span className="text-center font-medium">Goals</span>
							</p>
							<p className="flex gap-5 bg-inputBG p-2 rounded-lg">
								<GrPlan className="text-2xl" />
								<span className="text-center font-medium">Plans</span>
							</p>
							<p className="flex gap-5 bg-inputBG p-2 rounded-lg">
								<IoStatsChart className="text-2xl" />
								<span className="text-center font-medium">Stat</span>
							</p>
							<p className="flex gap-5 bg-inputBG p-2 rounded-lg">
								<CiSettings className="text-2xl" />
								<span className="text-center font-medium">Settings</span>
							</p>
						</div>
					</div>
				</div>
				<div className="p-2">
					<div className="bg-white h-full w-full rounded-lg px-2 py-4 space-y-3">
						<h3 className="text-xl p-0 font-semibold font-mono">Events</h3>
						<div className="flex gap-3 bg-inputBG p-2 rounded-lg w-full">
							<p className="border border-theme-color h-fit w-1/5 border-opacity-50 rounded-md text-center flex flex-col items-center text-sm p-2 ">
								<span>
									9<sup>th</sup>
								</span>
								<span>Jan</span>
							</p>
							<div className="w-4/5">
								<p className="font-medium">React Ghana</p>
								<p className="text-sm">React Ghana New Year Meetup</p>
							</div>
						</div>
						<div className="flex gap-3 bg-inputBG p-2 rounded-lg w-full">
							<p className="border border-theme-color h-fit w-1/5 border-opacity-50 rounded-md text-center flex flex-col items-center text-sm p-2 ">
								<span>
									14<sup>th</sup>
								</span>
								<span>Feb</span>
							</p>
							<div className="w-4/5">
								<p className="font-medium ">Valentine&apos;s Day</p>
								<p className="text-sm">
									International Valentines Day Celebration...
								</p>
							</div>
						</div>
						<div className="flex gap-3 bg-inputBG p-2 rounded-lg w-full">
							<p className="border border-theme-color h-fit w-1/5 border-opacity-50 rounded-md text-center flex flex-col items-center text-sm p-2 ">
								<span>
									14<sup>th</sup>
								</span>
								<span>Feb</span>
							</p>
							<div className="w-4/5">
								<p className="font-medium ">Valentine&apos;s Day</p>
								<p className="text-sm">
									International Valentines Day Celebration...
								</p>
							</div>
						</div>
						<div className="flex gap-3 bg-inputBG p-2 rounded-lg w-full">
							<p className="border border-theme-color h-fit w-1/5 border-opacity-50 rounded-md text-center flex flex-col items-center text-sm p-2 ">
								<span>
									14<sup>th</sup>
								</span>
								<span>Feb</span>
							</p>
							<div className="w-4/5">
								<p className="font-medium ">Valentine&apos;s Day</p>
								<p className="text-sm">
									International Valentines Day Celebration...
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UserEvent;
