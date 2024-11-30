"use client"

import {
  ChartRoot,
  ChartTooltipContent,
  useChartConfig,
} from "compositions/ui/chart"
import { Area, AreaChart, Tooltip } from "recharts"

export const SparklineBasic = () => {
  const chart = useChartConfig({
    data: [
      { value: 10 },
      { value: 16 },
      { value: 19 },
      { value: 15 },
      { value: 12 },
      { value: 15 },
      { value: 10 },
      { value: 18 },
    ],
    series: [{ dataKey: "value", color: "teal.solid" }],
  })

  return (
    <ChartRoot height="10">
      <AreaChart data={chart.data}>
        <Tooltip
          position={{ y: -24 }}
          content={
            <ChartTooltipContent
              hideIndicator
              hideLabel
              hideSeriesLabel
              fitContent
              chart={chart}
            />
          }
        />
        {chart.series.map((item) => (
          <Area
            key={item.dataKey}
            isAnimationActive={false}
            dataKey={chart.key(item.dataKey)}
            fill={chart.color(item.color)}
            fillOpacity={0.2}
            stroke={chart.color(item.color)}
            strokeWidth={2}
          />
        ))}
      </AreaChart>
    </ChartRoot>
  )
}
