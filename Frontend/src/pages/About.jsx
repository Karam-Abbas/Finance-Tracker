import { Award, Heart, Users, Wallet } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen">
      {/* About Header */}
      <div className="bg-[var(--main-background)] py-12 md:py-24">
        <div className=" px-4">
          <div className="text-center space-y-4">
            <h1 className="text-[var(--primary-color)] text-4xl font-bold tracking-tighter sm:text-5xl">
              About{" "}
              <span className="text-[var(--secondary-color)]">
                FinanceTracker
              </span>
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              We're on a mission to make personal finance management accessible
              to everyone. Our free platform helps thousands of people take
              control of their financial lives.
            </p>
          </div>
        </div>
      </div>

      {/* Our Story */}
      <div className=" px-4 py-12 md:py-24">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl text-[var(--primary-color)] font-bold tracking-tighter">
              Our Story
            </h2>
            <p className="text-gray-500">
              FinanceFlow started in 2023 with a simple idea: everyone deserves
              access to good financial tools. We noticed that many people
              struggle with managing their money, not because they don't want
              to, but because the available tools were either too complicated or
              too expensive.
            </p>
            <p className="text-gray-500">
              That's why we created a free, user-friendly platform that helps
              people track their expenses, set budgets, and achieve their
              financial goals. We believe that financial freedom starts with
              understanding your money better.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <h3 className="text-3xl font-bold mb-2 text-[var(--primary-color)]">
                10K+
              </h3>
              <p className="text-gray-500">Active Users</p>
            </div>
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <h3 className="text-3xl font-bold mb-2 text-[var(--primary-color)]">
                $5M+
              </h3>
              <p className="text-gray-500">Expenses Tracked</p>
            </div>
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <h3 className="text-3xl font-bold mb-2 text-[var(--primary-color)]">
                15+
              </h3>
              <p className="text-gray-500">Countries</p>
            </div>
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <h3 className="text-3xl font-bold mb-2 text-[var(--primary-color)]">
                4.8
              </h3>
              <p className="text-gray-500">User Rating</p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="bg-[var(--main-background)] py-12 md:py-24">
        <div className=" px-4">
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-12 text-[var(--primary-color)]">
            Our Values
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <Users className="h-12 w-12 mb-4 text-primary stroke-[var(--primary-color)]" />
              <h3 className="font-bold mb-2 text-[var(--primary-color)]">
                Accessibility
              </h3>
              <p className="text-gray-500">
                We believe everyone should have access to quality financial
                tools, regardless of their income.
              </p>
            </div>
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <Heart className="h-12 w-12 mb-4 text-primary stroke-[var(--primary-color)]" />
              <h3 className="font-bold mb-2 text-[var(--primary-color)]">
                Simplicity
              </h3>
              <p className="text-gray-500">
                Managing money shouldn't be complicated. We keep our tools
                simple and intuitive.
              </p>
            </div>
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <Award className="h-12 w-12 mb-4 text-primary stroke-[var(--primary-color)]" />
              <h3 className="font-bold mb-2 text-[var(--primary-color)]">
                Excellence
              </h3>
              <p className="text-gray-500">
                We strive to provide the best possible experience and
                continuously improve our platform.
              </p>
            </div>
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <Wallet className="h-12 w-12 mb-4 text-primary text-[var(--primary-color)]" />
              <h3 className="font-bold mb-2 text-[var(--primary-color)]">
                Empowerment
              </h3>
              <p className="text-gray-500">
                We empower users to take control of their finances and achieve
                their goals.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className=" px-4 py-12 md:py-24">
        <h2 className="text-3xl font-bold tracking-tighter text-center mb-12 text-[var(--primary-color)]">
          Meet Me
        </h2>
        <div className="flex lg:flex-row items-center justify-center gap-8 md:flex-col sm:flex-col">
          {team.map((member, index) => (
            <div
              key={index}
              className="rounded-lg border bg-card p-6 shadow-sm text-center"
            >
              <div className="w-24 h-24 rounded-full bg-gray-200 mx-auto mb-4">
                <img
                  src="/images/karam.jpg"
                  alt="Developer Karam"
                  className="w-full h-full rounded-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = "/images/fallback-avatar.png"; // Optional fallback
                  }}
                />
              </div>
              <h3 className="font-bold mb-1 text-[var(--primary-color)]">
                {member.name}
              </h3>
              <p className="text-gray-500 mb-2">{member.role}</p>
              <p className="text-sm text-gray-500">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const team = [
  {
    name: "Karam Abbas",
    role: "Founder & CEO",
    description: "The one and only person behind this whole project.",
  },
];
