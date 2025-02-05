import { Mail, MapPin, Phone } from "lucide-react"

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted")
  }

  return (
    <div className="min-h-screen">
      {/* Contact Header */}
      <div className="bg-[var(--background-color)] py-12 md:py-24">
        <div className=" px-4">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-[var(--primary-color)]">Get in Touch</h1>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
              Have questions about FinanceFlow? We're here to help you manage your finances better.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Content */}
      <div className=" px-4 py-12 md:py-24 h-full">
      <div className="flex flex-col-reverse md:flex-row items-center justify-evenly gap-10">
          {/* Contact Information */}
          <div className="space-y-8 w-full md:w-[40%]">
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <h2 className="text-2xl font-bold mb-6 text-[var(--primary-color)]">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 mt-1 text-primary text-[var(--primary-color)]" />
                  <div>
                    <p className="font-medium text-[var(--primary-color)]">Our Location</p>
                    <p className="text-gray-500">Lahore, Pakistan</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 mt-1 text-primary text-[var(--primary-color)]" />
                  <div>
                    <p className="font-medium text-[var(--primary-color)]">Email Us</p>
                    <a href="mailto:karamworkmail07@gmail.com" className="text-gray-500 hover:text-primary">
                    karamworkmail07@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 mt-1 text-primary text-[var(--primary-color)]" />
                  <div>
                    <p className="font-medium text-[var(--primary-color)]">Call Us</p>
                    <a href="tel:+923261405470" className="text-gray-500 hover:text-primary">
                      (+92) 326-1405470
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <h2 className="text-2xl font-bold mb-4 text-[var(--primary-color)]">Support Hours</h2>
              <p className="text-gray-500 mb-2">Monday - Friday: 9:00 AM - 6:00 PM PST</p>
              <p className="text-gray-500">Weekend: 10:00 AM - 4:00 PM PST</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-lg border bg-card p-6 shadow-sm w-full sm:w-[40%]">
            <h2 className="text-2xl font-bold mb-6 text-[var(--primary-color)]">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-[var(--primary-color)]">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-[var(--primary-color)]">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2 text-[var(--primary-color)]">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="How can we help?"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-[var(--primary-color)]">
                  Message
                </label>
                <textarea
                  id="message"
                  className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Your message"
                  required
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-md bg-[var(--secondary-color)] px-8 h-10 text-sm font-medium text-[var(--primary-color)]  transition-transform duration-250 hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

