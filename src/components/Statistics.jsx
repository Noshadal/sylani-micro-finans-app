import React, { useEffect, useRef, useState } from "react"
import { Utensils, Users, GraduationCap, Stethoscope } from "lucide-react"
import "./Statistics.css"

const stats = [
  {
    icon: Utensils,
    count: 300000,
    label: "Food",
    period: "(Daily)",
  },
  {
    icon: Users,
    count: 20000,
    label: "Family Adoption",
    period: "(Monthly)",
  },
  {
    icon: GraduationCap,
    count: 25000,
    label: "Education",
    period: "(Monthly)",
  },
  {
    icon: Stethoscope,
    count: 125000,
    label: "Medical",
    period: "(Monthly)",
  },
]

function AnimatedCounter({ end, duration = 2000 }) {
  const [count, setCount] = useState(0)
  const countRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let start = 0
          const increment = end / (duration / 16)
          const timer = setInterval(() => {
            start += increment
            if (start >= end) {
              setCount(end)
              clearInterval(timer)
            } else {
              setCount(Math.floor(start))
            }
          }, 16)
          observer.disconnect()
        }
      },
      { threshold: 0.5 },
    )

    if (countRef.current) {
      observer.observe(countRef.current)
    }

    return () => observer.disconnect()
  }, [end, duration])

  return <span ref={countRef}>{count.toLocaleString()}</span>
}

export default function Statistics() {
  return (
    <section className="statistics">
      <div className="wave-background"></div>
      <div className="stats-container">
        {stats.map((stat, index) => (
          <div key={index} className="stat-item">
            <div className="icon-container">
              <stat.icon className="stat-icon" />
            </div>
            <div className="stat-count">
              <AnimatedCounter end={stat.count} />
            </div>
            <div className="stat-label">{stat.label}</div>
            <div className="stat-period">{stat.period}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

