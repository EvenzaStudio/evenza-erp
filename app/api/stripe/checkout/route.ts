import { stripe } from "@/lib/stripe"
import { NextResponse } from "next/server"

const PRICING = {
  standard: {
    monthly: 19900,
    annually: 191040,
    name: "Starter Plan",
    description: "Para agencias pequeñas que comienzan.",
  },
  professional: {
    monthly: 7900,
    annually: 79000,
    name: "Professional Plan",
    description: "Para agencias en crecimiento.",
  },
}

export async function POST(req: Request) {
  try {
    const { plan, period } = await req.json()

    if (!plan || !period || !PRICING[plan as keyof typeof PRICING]) {
      return new NextResponse("Invalid plan or period", { status: 400 })
    }

    const planDetails = PRICING[plan as keyof typeof PRICING]
    const amount = planDetails[period as "monthly" | "annually"]
    const interval = period === "monthly" ? "month" : "year"

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: planDetails.name,
              description: planDetails.description,
            },
            unit_amount: amount,
            recurring: {
              interval: interval,
            },
          },
          quantity: 1,
        },
      ],
      mode: "subscription",
      success_url: `${req.headers.get("origin")}/?success=true`,
      cancel_url: `${req.headers.get("origin")}/?canceled=true`,
    })

    return NextResponse.json({ sessionId: session.id, url: session.url })
  } catch (error) {
    console.error("Stripe error:", error)
    return new NextResponse("Internal Server Error", { status: 500 })
  }
}
