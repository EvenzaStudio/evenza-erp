"use client"

import { useState } from "react"

export default function PricingSection() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annually">("monthly")
  const [loading, setLoading] = useState<string | null>(null)

  const handleCheckout = async (plan: string) => {
    try {
      setLoading(plan)
      const response = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan, period: billingPeriod }),
      })

      if (!response.ok) {
        const errorData = await response.text()
        throw new Error(errorData || "Network response was not ok")
      }

      const { url } = await response.json()
      if (url) {
        window.location.href = url
      }
    } catch (err) {
      console.error("Error:", err)
    } finally {
      setLoading(null)
    }
  }

  const pricing = {
    standard: {
      monthly: 199,
      annually: 1990,
    },
    professional: {
      monthly: 349,
      annually: 3499,
    },
    enterprise: {
      monthly: 299,
      annually: 2990,
    },
  }

  return (
    <div className="w-full flex justify-center items-start">
      <div className="flex-1 px-4 md:px-12 py-16 md:py-20 flex flex-col justify-start items-start gap-12">
        {/* Header */}
        <div className="w-full flex flex-col justify-center items-start gap-4">
          <div className="text-[#1f3a52] font-semibold leading-tight md:leading-[44px] font-sans text-4xl tracking-tight">
            Planes transparentes para cualquier tamaño de agencia
          </div>
          <div className="text-[#5a7a8f] text-base font-normal leading-7 font-sans">
            Comienza gratis y escala conforme creces. Sin sorpresas.
          </div>
        </div>

        {/* Billing Toggle */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setBillingPeriod("monthly")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              billingPeriod === "monthly" ? "bg-[#1f3a52] text-white" : "bg-[#d1dce8] text-[#1f3a52]"
            }`}
          >
            Mensual
          </button>
          <button
            onClick={() => setBillingPeriod("annually")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              billingPeriod === "annually" ? "bg-[#1f3a52] text-white" : "bg-[#d1dce8] text-[#1f3a52]"
            }`}
          >
            Anual (Ahorra 10%)
          </button>
        </div>

        {/* Pricing Cards */}
        <div className="w-full flex flex-col lg:flex-row gap-6">
          {/* Starter Plan */}
          <div className="flex-1 px-6 py-5 border border-[#d1dce8] bg-white rounded-lg flex flex-col gap-8">
            <div className="flex flex-col gap-6">
              <div>
                <h3 className="text-[#1f3a52] text-lg font-medium mb-2">Starter</h3>
                <p className="text-[#5a7a8f] text-sm">Para agencias pequeñas que comienzan.</p>
              </div>
              <div>
                <div className="text-5xl font-semibold text-[#1f3a52] mb-1">
                  ${billingPeriod === "monthly" ? pricing.standard.monthly : Math.floor(pricing.standard.annually / 12)}
                  /mes
                </div>
                <p className="text-sm text-[#5a7a8f]">
                  por usuario, facturado {billingPeriod === "monthly" ? "mensualmente" : "anualmente"}
                </p>
              </div>
              <button
                onClick={() => handleCheckout("standard")}
                disabled={loading === "standard"}
                className="w-full px-4 py-2 bg-[#1f3a52] text-white rounded-full font-medium hover:opacity-90 disabled:opacity-50"
              >
                {loading === "standard" ? "Procesando..." : "Comenzar gratis"}
              </button>
            </div>
            <div className="flex flex-col gap-3 border-t border-[#d1dce8] pt-6">
              {["Hasta 50 clientes", "Calendario básico", "Cotizaciones estándar", "Soporte por email"].map(
                (feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M10 3L4.5 8.5L2 6"
                        stroke="#9CA3AF"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-[#5a7a8f] text-sm">{feature}</span>
                  </div>
                ),
              )}
            </div>
          </div>

          {/* Professional Plan (Featured) */}
          <div className="flex-1 px-6 py-5 bg-[#1f3a52] border border-[#1f3a52] rounded-lg flex flex-col gap-8 relative">
            <div className="absolute -top-3 left-6 bg-[#1f3a52] px-3 py-1 rounded-full">
              <span className="text-white text-xs font-semibold">POPULAR</span>
            </div>
            <div className="flex flex-col gap-6">
              <div>
                <h3 className="text-[#ffffff] text-lg font-medium mb-2">Professional</h3>
                <p className="text-[#87ceeb] text-sm">Para agencias en crecimiento.</p>
              </div>
              <div>
                <div className="text-5xl font-semibold text-[#ffffff] mb-1">
                  $
                  {billingPeriod === "monthly"
                    ? pricing.professional.monthly
                    : Math.floor(pricing.professional.annually / 12)}
                  /mes
                </div>
                <p className="text-sm text-[#87ceeb]">
                  por usuario, facturado {billingPeriod === "monthly" ? "mensualmente" : "anualmente"}
                </p>
              </div>
              <button
                onClick={() => handleCheckout("professional")}
                disabled={loading === "professional"}
                className="w-full px-4 py-2 bg-[#ffffff] text-[#1f3a52] rounded-full font-medium hover:opacity-90 disabled:opacity-50"
              >
                {loading === "professional" ? "Procesando..." : "Comenzar gratis"}
              </button>
            </div>
            <div className="flex flex-col gap-3 border-t border-[#3a6b99] pt-6">
              {[
                "Clientes ilimitados",
                "Calendario avanzado",
                "Generador de cotizaciones",
                "Gestor de mantenimiento",
                "Análisis detallados",
                "Chatbot IA básico",
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M10 3L4.5 8.5L2 6"
                      stroke="#87ceeb"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-[#ffffff] text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Enterprise Plan */}
          <div className="flex-1 px-6 py-5 border border-[#d1dce8] bg-white rounded-lg flex flex-col gap-8">
            <div className="flex flex-col gap-6">
              <div>
                <h3 className="text-[#1f3a52] text-lg font-medium mb-2">Enterprise</h3>
                <p className="text-[#5a7a8f] text-sm">Solución personalizada para grandes agencias.</p>
              </div>
              <div>
                <div className="text-5xl font-semibold text-[#1f3a52] mb-1">A medida</div>
                <p className="text-sm text-[#5a7a8f]">Contacta para presupuesto personalizado</p>
              </div>
              <button className="w-full px-4 py-2 bg-[#1f3a52] text-white rounded-full font-medium hover:opacity-90">
                Contáctanos
              </button>
            </div>
            <div className="flex flex-col gap-3 border-t border-[#d1dce8] pt-6">
              {[
                "Todo en Professional",
                "Gestor dedicado",
                "Soporte 24/7",
                "Chatbot IA avanzado",
                "API personalizada",
                "Integraciones custom",
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M10 3L4.5 8.5L2 6"
                      stroke="#9CA3AF"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-[#5a7a8f] text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
