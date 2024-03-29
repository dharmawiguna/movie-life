import MenuItem from "./MenuItem";
import { UserMenu, UserOthers } from "./MenuList";
import SubscriptionDetail from "./SubscriptionDetail";

export default function Sidebar({ auth }) {
    return (
        <aside className="fixed z-50 w-[300px] h-full">
            <div className="flex flex-col p-[30px] pr-0 border-r border-gray-[#F1F1F1] overflow-y-auto h-full">
                <a href="/">
                    <img src="/images/moonton.svg" alt="" />
                </a>
                <div className="links flex flex-col mt-[60px] h-full gap-[50px]">
                    {/* <!-- Menu --> */}
                    <div>
                        <div className="text-gray-1 text-sm mb-4">Menu</div>

                        {UserMenu?.map((menu, index) => (
                            <MenuItem
                                key={index}
                                link={menu.link}
                                icon={menu.icon}
                                text={menu.text}
                                isActive={
                                    menu.link && route().current(menu.link)
                                }
                            />
                        ))}
                    </div>
                    {/* <!-- ./Menu --> */}

                    {/* <!-- Others --> */}
                    <div>
                        <div className="text-gray-1 side-link mb-4">Others</div>
                        {UserOthers?.map((menu, index) => (
                            <MenuItem
                                key={index}
                                link={menu.link}
                                icon={menu.icon}
                                text={menu.text}
                                isActive={
                                    menu.link && route().current(menu.link)
                                }
                                method={menu.method}
                            />
                        ))}
                    </div>
                    {/* <!-- ./Others --> */}

                    {auth.activePlan && (
                        <SubscriptionDetail
                            name={auth.activePlan.name}
                            isPremium={auth.activePlan.name === "Premium"}
                            remainingActiveDays={
                                auth.activePlan.remainingActiveDay
                            }
                            activeDays={auth.activePlan.activeDay}
                        />
                    )}
                </div>
            </div>
        </aside>
    );
}
