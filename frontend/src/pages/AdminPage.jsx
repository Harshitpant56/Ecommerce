import { BarChart, PlusCircle, ShoppingBasket } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import CreateProductForm from "../components/CreateProductForm";
import ProductsList from "../components/ProductsList";
import AnalyticsTab from "../components/AnalyticsTab";
import { useProductStore } from "../stores/useProductStore";

const tabs = [
  { id: "create", label: "Create Product", icon: PlusCircle },
  { id: "products", label: "Products", icon: ShoppingBasket },
  { id: "analytics", label: "Analytics", icon: BarChart },
];

const AdminPage = () => {
  const [activeTab, setActiveTab] = useState("create");
  const { fetchAllProducts } = useProductStore();

  useEffect(()=>{
    fetchAllProducts();
  },[fetchAllProducts])

  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <motion.h1
          className="text-center text-4xl font-extrabold text-emerald-400 mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Admin Dashboard
        </motion.h1>

        {/* Tab Buttons */}
        <div className="flex justify-center gap-4 mb-10">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-2 rounded-xl font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-emerald-600 text-white shadow-lg"
                    : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
                }`}
              >
                <tab.icon className="h-5 w-5" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        <div className="bg-zinc-800 rounded-xl p-6 shadow-md">
          {activeTab === "create" && <CreateProductForm />}
          {activeTab === "products" && <ProductsList />}
          {activeTab === "analytics" && <AnalyticsTab />}
        </div>
      </div>
    </div>
  );
};

export default AdminPage;

