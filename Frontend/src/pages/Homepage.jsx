import { ArrowRight, BarChart2, DollarSign, Menu, PieChart, Wallet } from "lucide-react"
import "../../public/stylesheets/Main.css"
import { Link } from "react-router-dom"
export default function Homepage() {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--main-background)]">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="px-4 py-20 md:py-20 lg:py-20">
          <div className="flex flex-col items-center text-center gap-4">
            <span style={{ border: '1px solid var(--accent-color)' }} className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold text-[var(--accent-color)]">
              100% Free Forever
            </span>
            <h1 className="text-4xl font-bold tracking-tighter text-[var(--primary-color)] sm:text-5xl md:text-6xl lg:text-7xl">
              Take Control of Your Finances
            </h1>
            <p className="max-w-[600px] text-[var(--placeholder-color)] md:text-xl">
              Track your expenses, set budgets, and achieve your financial goals with our simple and free personal
              finance tracker.
            </p>
            <div className="flex flex-col gap-4 min-[400px]:flex-row">
              <Link to="/entry" className="inline-flex items-center justify-center rounded-md bg-[var(--secondary-color)] px-8 h-11 text-sm font-medium text-white shadow hover:opacity-90">
                Start Tracking Free
                <ArrowRight className="ml-2 h-4 w-4 bg-transparent" />
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="px-4 py-20 md:py-20 space-y-12 border-t border-gray-400">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter text-[var(--primary-color)] sm:text-4xl md:text-5xl">Everything You Need</h2>
            <p className="max-w-[600px] mx-auto text-[var(--placeholder-color)]">
              Simple yet powerful features to help you manage your money better.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <DollarSign className="h-10 w-10 mb-2 text-[var(--accent-color)]" />,
                title: "Expense Tracking",
                description: "Easily log and categorize your daily expenses to understand your spending habits."
              },
              {
                icon: <BarChart2 className="h-10 w-10 mb-2 text-[var(--accent-color)]" />,
                title: "Budget Planning",
                description: "Set monthly budgets for different categories and track your progress."
              },
              {
                icon: <PieChart className="h-10 w-10 mb-2 text-[var(--accent-color)]" />,
                title: "Visual Reports",
                description: "Get insights into your spending with clear and intuitive charts and graphs."
              }
            ].map((feature, index) => (
              <div key={index}  className="shadow-md rounded-lg border border-gray-300">
                <div className="p-6 space-y-2 rounded-lg">
                  {feature.icon}
                  <h3 className="text-lg font-semibold text-[var(--primary-color)]">{feature.title}</h3>
                  <p className="text-sm text-[var(--placeholder-color)]">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials"className=" border-t border-gray-400">
          <div className="px-4 py-24 md:py-32 space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter text-[var(--primary-color)] sm:text-4xl md:text-5xl">What Our Users Say</h2>
              <p className="max-w-[600px] mx-auto text-[var(--placeholder-color)]">
                Join thousands of people who have improved their financial habits with FinanceFlow.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-[var(--containers-background)] shadow-md border border-gray-300 rounded-lg">
                  <div className="p-6 space-y-2 rounded-lg">
                    <h3 className="font-semibold text-[var(--primary-color)]">{testimonial.name}</h3>
                    <p className="text-sm text-[var(--accent-color)]">{testimonial.role}</p>
                    <p className="text-sm text-[var(--placeholder-color)] pt-2">"{testimonial.quote}"</p> 
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section style={{ borderTop: '1px solid var(--placeholder-color)' }}>
          <div className="px-4 py-24 md:py-32">
            <div className="flex flex-col items-center text-center gap-4">
              <h2 className="text-3xl font-bold tracking-tighter text-[var(--primary-color)] sm:text-4xl md:text-5xl">
                Start Your Financial Journey Today
              </h2>
              <p className="max-w-[600px] text-[var(--placeholder-color)] md:text-xl">
                Join our community and take the first step towards better financial management.
              </p>
              <Link to="/entry" className="inline-flex items-center justify-center rounded-md bg-[var(--secondary-color)] px-8 h-11 text-sm font-medium text-white shadow hover:opacity-90">
                Get Started Free
                <ArrowRight className="ml-2 h-4 w-4 bg-transparent" />
              </Link>
            </div>
          </div>
        </section>
      </main>

    </div>
  )
}

const testimonials = [
  {
    name: "Alex Thompson",
    role: "Student",
    quote: "FinanceFlow helped me track my expenses during college. Now I know exactly where my money goes!",
  },
  {
    name: "Maria Garcia",
    role: "Freelancer",
    quote: "Perfect for managing my irregular income and expenses. The visual reports are super helpful.",
  },
  {
    name: "David Chen",
    role: "Young Professional",
    quote: "Finally got my savings on track. The budgeting features are simple but effective.",
  },
]