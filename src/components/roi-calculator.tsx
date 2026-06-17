"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Calculator, TrendingUp, IndianRupee, Clock } from "lucide-react"

export function RoiCalculator() {
  const [employees, setEmployees] = React.useState(5)
  const [hoursPerWeek, setHoursPerWeek] = React.useState(20)
  const [hourlyRate, setHourlyRate] = React.useState(500)

  // Math
  const weeklyManualCost = employees * hoursPerWeek * hourlyRate
  const annualManualCost = weeklyManualCost * 52
  
  // Assume AI automation saves 75% of those manual hours
  const annualSavings = annualManualCost * 0.75
  
  // Format currency in INR
  const formatINR = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount)
  }

  return (
    <div className="bg-card/50 backdrop-blur-md border border-border rounded-3xl p-8 lg:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
          <Calculator className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-2xl font-heading font-bold">Automation ROI Calculator</h3>
          <p className="text-muted-foreground text-sm">See how much capital you are losing to manual tasks.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Side: Inputs */}
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="flex justify-between items-end">
              <label className="text-sm font-semibold flex items-center gap-2">
                Team Size <span className="text-muted-foreground font-normal">(Employees doing manual data entry/support)</span>
              </label>
              <span className="text-lg font-heading font-bold text-primary">{employees}</span>
            </div>
            <input 
              type="range" 
              min="1" 
              max="50" 
              value={employees} 
              onChange={(e) => setEmployees(parseInt(e.target.value))}
              className="w-full accent-primary h-2 bg-muted rounded-lg appearance-none cursor-pointer"
            />
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-end">
              <label className="text-sm font-semibold flex items-center gap-2">
                <Clock className="w-4 h-4 text-muted-foreground" /> Hours Spent Per Week <span className="text-muted-foreground font-normal">(per employee)</span>
              </label>
              <span className="text-lg font-heading font-bold text-primary">{hoursPerWeek} hrs</span>
            </div>
            <input 
              type="range" 
              min="5" 
              max="40" 
              value={hoursPerWeek} 
              onChange={(e) => setHoursPerWeek(parseInt(e.target.value))}
              className="w-full accent-primary h-2 bg-muted rounded-lg appearance-none cursor-pointer"
            />
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-end">
              <label className="text-sm font-semibold flex items-center gap-2">
                <IndianRupee className="w-4 h-4 text-muted-foreground" /> Average Hourly Rate <span className="text-muted-foreground font-normal">(₹)</span>
              </label>
              <span className="text-lg font-heading font-bold text-primary">{formatINR(hourlyRate)}</span>
            </div>
            <input 
              type="range" 
              min="100" 
              max="2000" 
              step="50"
              value={hourlyRate} 
              onChange={(e) => setHourlyRate(parseInt(e.target.value))}
              className="w-full accent-primary h-2 bg-muted rounded-lg appearance-none cursor-pointer"
            />
          </div>
        </div>

        {/* Right Side: Results */}
        <div className="bg-background rounded-2xl p-8 border border-border shadow-inner relative overflow-hidden flex flex-col justify-center">
          <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
          
          <div className="relative z-10 space-y-6 text-center">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Estimated Annual Cost of Manual Work</p>
              <p className="text-2xl font-heading font-medium text-foreground opacity-50 line-through">
                {formatINR(annualManualCost)}
              </p>
            </div>
            
            <div className="h-px w-full bg-border" />
            
            <div>
              <p className="text-sm font-semibold text-green-500 uppercase tracking-wider mb-2 flex items-center justify-center gap-2">
                <TrendingUp className="w-4 h-4" /> Capital Unlocked with SGENCY AI
              </p>
              <motion.p 
                key={annualSavings}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-4xl lg:text-5xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-primary"
              >
                {formatINR(annualSavings)}
              </motion.p>
              <p className="text-xs text-muted-foreground mt-4 max-w-[250px] mx-auto">
                *Based on a conservative estimate of automating 75% of repetitive operational tasks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
