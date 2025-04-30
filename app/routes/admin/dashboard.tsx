import { Header, StatsCard } from "~/components";
import TripCard from "~/components/TripCard";

const Dashboard = () => {
  const user = {
    name: "David Smith",
  };

  const dashboardStats = {
    totalUsers: 1245,
    usersJoined: { currentMonth: 218, lastMonth: 176 },
    totalTrips: 3145,
    tripsCreated: { currentMonth: 158, lastMonth: 250 },
    userRole:  { total: 62, currentMonth: 12, lastMonth: 10 },
  }

  const { totalUsers, usersJoined, totalTrips, tripsCreated, userRole } = dashboardStats;
  
  return (
    <main className="dashboard wrapper">
      <Header 
        title={`Welcome ${user?.name ?? "Guest"} 👋`}
        description="Track activity, trends and popular destinations in real time"
      />
      <section className="flex flex-col gap-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          <StatsCard 
            headerTitle="Total Users"
            total={totalUsers}
            currentMonthCount={usersJoined.currentMonth}
            lastMonthCount={usersJoined.lastMonth}
          />
          <StatsCard 
            headerTitle="Total Trips"
            total={totalTrips}
            currentMonthCount={tripsCreated.currentMonth}
            lastMonthCount={tripsCreated.lastMonth}
          />
          <StatsCard 
            headerTitle="Active Users Today"
            total={userRole.total}
            currentMonthCount={userRole.currentMonth}
            lastMonthCount={userRole.lastMonth}
          />
        </div>
      </section>
      <TripCard />
    </main>
  );
};

export default Dashboard;