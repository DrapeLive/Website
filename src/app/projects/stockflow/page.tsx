import React from "react";
import { IconArrowLeft, IconPackage, IconCheck, IconUsers, IconShoppingCart, IconSettings } from "@tabler/icons-react";
import Link from "next/link";

const StockFlowPage: React.FC = () => {
  const userTypes = [
    {
      icon: <IconSettings size={32} className="text-black" />,
      title: "Warehouse Managers",
      description: "Manage inventory, track all orders, and coordinate dispatch",
    },
    {
      icon: <IconUsers size={32} className="text-black" />,
      title: "Field Sales Agents",
      description: "Place orders on-the-go using QR scanning and a simplified mobile interface",
    },
    {
      icon: <IconShoppingCart size={32} className="text-black" />,
      title: "Customers / Retailers",
      description: "Receive orders accurately and track fulfillment status",
    },
  ];

  const featureCategories = [
    {
      title: "Inventory Management",
      features: [
        "Full product catalog with images, variants, and size ranges",
        "Real-time stock tracking per variant and size group",
        "QR code generation for every item variant",
        "Bulk QR code printing for warehouse operations",
        "Stock automatically adjusts when orders are placed or cancelled",
      ],
    },
    {
      title: "Order Management",
      features: [
        "Multi-stage order workflow: Draft → Pending → Packed → Dispatched",
        "Real-time stock validation prevents overselling",
        "Editable orders until dispatch",
        "Complete order audit trail with activity logs",
        "Partial packing warnings",
      ],
    },
    {
      title: "Sales Agent Tools",
      features: [
        "Mobile-optimized interface for field work",
        "QR code scanning for quick item lookup and price checks",
        "Customer selection and order creation in seconds",
        "Invoice generation with PDF export",
        "Access to assigned customers and products only",
      ],
    },
    {
      title: "Admin Dashboard",
      features: [
        "Overview of all orders across agents",
        "Filter by date range, agent, or status",
        "Manage customers, agents, and other admins",
        "Create and edit product listings",
        "Dispatch management",
      ],
    },
    {
      title: "Access Control",
      features: [
        "Role-based permissions (Admin, Agent)",
        "Agents see only their assigned customers and items",
        "Secure authentication with password reset",
      ],
    },
  ];

  const benefits = [
    { feature: "QR-based workflow", benefit: "Eliminate errors, speed up item identification" },
    { feature: "Mobile-first design", benefit: "Agents can take orders directly from customers" },
    { feature: "Real-time inventory", benefit: "Always know what's in stock" },
    { feature: "Integrated invoices", benefit: "Professional documentation for every order" },
    { feature: "Order tracking", benefit: "Customer knows exactly where their order is" },
  ];

  const techStack = ["Next.js 16", "React 19", "Tailwind CSS", "Radix UI", "Django", "Python"];

  return (
    <div className="min-h-screen bg-beige-light">
      <header className="fixed top-0 left-0 right-0 z-50 bg-beige-light">
        <div className="max-w-7xl mx-auto px-4 md:px-0 py-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-lg hover:gap-3 transition-all"
          >
            <IconArrowLeft size={20} />
            Back to Home
          </Link>
        </div>
      </header>

      <main className="pt-24 md:pt-32 px-5 md:px-0 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-16">
            <div className="w-24 h-24 md:w-32 md:h-32 bg-[#CFDBC2] rounded-2xl flex items-center justify-center">
              <IconPackage size={48} className="text-black" />
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">stockFlow</h1>
              <p className="text-xl md:text-2xl text-gray-600">
                B2B Order Management Platform
              </p>
            </div>
          </div>

          <div className="space-y-16">
            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">About</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Stock Flow is a comprehensive B2B order management platform designed specifically for apparel and textile businesses. It bridges the gap between warehouse inventory managers, field sales agents, and retail customers—streamlining the entire order-to-delivery workflow through a modern, mobile-first interface.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Who is it for?</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {userTypes.map((user, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 border border-gray-100">
                    <div className="w-14 h-14 bg-[#CFDBC2] rounded-full flex items-center justify-center mb-4">
                      {user.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{user.title}</h3>
                    <p className="text-gray-600">{user.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Key Features</h2>
              <div className="space-y-10">
                {featureCategories.map((category, index) => (
                  <div key={index}>
                    <h3 className="text-xl md:text-2xl font-bold mb-4">{category.title}</h3>
                    <ul className="space-y-3">
                      {category.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-3">
                          <IconCheck size={24} className="text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-lg text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Why Stock Flow?</h2>
              <div className="bg-white rounded-xl overflow-hidden border border-gray-100">
                <table className="w-full">
                  <thead>
                    <tr className="bg-[#CFDBC2]">
                      <th className="text-left py-4 px-6 font-bold">Feature</th>
                      <th className="text-left py-4 px-6 font-bold">Benefit</th>
                    </tr>
                  </thead>
                  <tbody>
                    {benefits.map((item, index) => (
                      <tr key={index} className={index !== 0 ? "border-t border-gray-100" : ""}>
                        <td className="py-4 px-6 font-medium">{item.feature}</td>
                        <td className="py-4 px-6 text-gray-600">{item.benefit}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Tech Stack</h2>
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="bg-white px-4 py-2 rounded-full text-lg font-medium border border-gray-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default StockFlowPage;