import {
  DollarSign,
  Users,
  CreditCard,
  TrendingUp,
  BarChart3,
} from "lucide-react";

const Dashboard = () => {
  const stats = [
    {
      title: "Total Revenue",
      value: "$45,231.89",
      change: "+20.1% from last month",
      icon: <DollarSign className="h-6 w-6" />,
      color: "bg-yellow-400",
    },
    {
      title: "Subscriptions",
      value: "+2350",
      change: "+180.1% from last month",
      icon: <Users className="h-6 w-6" />,
      color: "bg-pink-400",
    },
    {
      title: "Sales",
      value: "+12,234",
      change: "+19% from last month",
      icon: <CreditCard className="h-6 w-6" />,
      color: "bg-cyan-400",
    },
    {
      title: "Active Now",
      value: "+573",
      change: "+201 since last hour",
      icon: <TrendingUp className="h-6 w-6" />,
      color: "bg-green-400",
    },
  ];

  const chartData = [
    { month: "Jan", value: 2400 },
    { month: "Feb", value: 3200 },
    { month: "Mar", value: 1800 },
    { month: "Apr", value: 2900 },
    { month: "May", value: 4400 },
    { month: "Jun", value: 5500 },
    { month: "Jul", value: 5200 },
    { month: "Aug", value: 4200 },
    { month: "Sep", value: 5000 },
    { month: "Oct", value: 2300 },
    { month: "Nov", value: 5800 },
    { month: "Dec", value: 1500 },
  ];

  const recentSales = [
    {
      name: "Olivia Martin",
      email: "olivia.martin@email.com",
      amount: "+$1,999.00",
      initials: "OM",
    },
    {
      name: "Jackson Lee",
      email: "jackson.lee@email.com",
      amount: "+$39.00",
      initials: "JL",
    },
    {
      name: "Isabella Nguyen",
      email: "isabella.nguyen@email.com",
      amount: "+$299.00",
      initials: "IN",
    },
    {
      name: "William Kim",
      email: "will@email.com",
      amount: "+$99.00",
      initials: "WK",
    },
    {
      name: "Sofia Davis",
      email: "sofia.davis@email.com",
      amount: "+$39.00",
      initials: "SD",
    },
  ];

  const maxValue = Math.max(...chartData.map((d) => d.value));

  return (
    <div className="min-h-screen bg-orange-200 p-6">
      <div className="mx-auto max-w-7xl space-y-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="border-4 border-black bg-white p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            >
              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <p className="text-sm font-black tracking-wider text-black uppercase">
                    {stat.title}
                  </p>
                  <p className="text-3xl font-black text-black">{stat.value}</p>
                  <p className="text-xs font-bold text-green-600 uppercase">
                    {stat.change}
                  </p>
                </div>
                <div
                  className={`${stat.color} border-3 border-black p-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`}
                >
                  {stat.icon}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Overview Chart */}
          <div className="border-4 border-black bg-white p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] lg:col-span-2">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-black text-black uppercase">
                Overview
              </h2>
              <div className="border-3 border-black bg-purple-400 p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <BarChart3 className="h-6 w-6 text-black" />
              </div>
            </div>

            {/* Custom Bar Chart */}
            <div className="space-y-4">
              <div className="flex h-64 items-end justify-between gap-2">
                {chartData.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-1 flex-col items-center"
                  >
                    <div
                      className="w-full border-2 border-black bg-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:bg-purple-600"
                      style={{
                        height: `${(item.value / maxValue) * 200}px`,
                        minHeight: "20px",
                      }}
                    ></div>
                    <span className="mt-2 text-xs font-black text-black uppercase">
                      {item.month}
                    </span>
                  </div>
                ))}
              </div>

              {/* Y-axis labels */}
              <div className="flex justify-between text-xs font-bold text-gray-600">
                <span>$0</span>
                <span>$3000</span>
                <span>$4500</span>
                <span>$6000</span>
              </div>
            </div>
          </div>

          {/* Recent Sales */}
          <div className="border-4 border-black bg-white p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="mb-2 text-2xl font-black text-black uppercase">
              Recent Sales
            </h2>
            <p className="mb-6 text-sm font-bold text-gray-600">
              You made 265 sales this month.
            </p>

            <div className="space-y-4">
              {recentSales.map((sale, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between border-2 border-black bg-gray-100 p-3 transition-colors duration-200 hover:bg-yellow-200"
                >
                  <div className="flex items-center space-x-3">
                    <div className="flex h-10 w-10 items-center justify-center border-2 border-black bg-cyan-400 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                      <span className="text-sm font-black text-black">
                        {sale.initials}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-black text-black uppercase">
                        {sale.name}
                      </p>
                      <p className="text-xs font-bold text-gray-600">
                        {sale.email}
                      </p>
                    </div>
                  </div>
                  <div className="border-2 border-black bg-green-400 px-3 py-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <span className="text-sm font-black text-black">
                      {sale.amount}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
