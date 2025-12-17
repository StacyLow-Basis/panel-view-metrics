import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";
import { TimeRange } from "@/pages/Dashboard";

interface PanelData {
  date: string;
  count: number;
}

interface PanelChartProps {
  data: PanelData[];
  timeRange: TimeRange;
}

export const PanelChart = ({ data, timeRange }: PanelChartProps) => {
  const formatXAxisLabel = (tickItem: string) => {
    const date = new Date(tickItem);
    switch (timeRange) {
      case "1M":
        return date.toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
        });
      case "3M":
      case "6M":
        return date.toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
        });
      case "1Y":
      case "ALL":
        return date.toLocaleDateString("en-US", {
          month: "short",
          year: "2-digit",
        });
      default:
        return date.toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
        });
    }
  };

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-card border border-border rounded-xl p-4 shadow-lg">
          <p className="text-muted-foreground text-sm">
            {new Date(label).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <p className="text-foreground font-bold text-lg mt-1">
            {payload[0].value.toLocaleString()}{" "}
            <span className="text-sm font-normal text-muted-foreground">
              panels
            </span>
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="h-[400px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <defs>
            <linearGradient id="panelGradient" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor="hsl(var(--chart-primary))"
                stopOpacity={0.3}
              />
              <stop
                offset="95%"
                stopColor="hsl(var(--chart-primary))"
                stopOpacity={0.05}
              />
            </linearGradient>
          </defs>
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="hsl(var(--border))"
            opacity={0.3}
          />
          <XAxis
            dataKey="date"
            tickFormatter={formatXAxisLabel}
            stroke="hsl(var(--muted-foreground))"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            stroke="hsl(var(--muted-foreground))"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <Tooltip content={<CustomTooltip />} />
          <Area
            type="monotone"
            dataKey="count"
            stroke="hsl(var(--chart-primary))"
            strokeWidth={2}
            fill="url(#panelGradient)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
