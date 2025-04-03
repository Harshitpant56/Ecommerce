import { motion } from "framer-motion";
import { PlusCircle, Upload, Loader } from "lucide-react";
import { useState } from "react";

const categories = [
  "jean",
  "t-shirt",
  "shoes",
  "glasses",
  "jacket",
  "suit",
  "bag",
];

const loading = false;

const CreateProductForm = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    image: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newProduct);
  };

  return (
    <motion.div
      className="bg-gray-900 text-white shadow-xl rounded-2xl p-8 max-w-xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-bold mb-8 text-emerald-400">
        Create New Product
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Product Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Product Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={newProduct.name}
            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
            placeholder="e.g. Classic Denim Jeans"
            required
            className="w-full rounded-lg bg-gray-800 border border-gray-700 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        {/* Description */}
        <div>
          <label htmlFor="description" className="block text-sm font-medium mb-1">
            Description
          </label>
          <input
            id="description"
            name="description"
            type="text"
            value={newProduct.description}
            onChange={(e) =>
              setNewProduct({ ...newProduct, description: e.target.value })
            }
            placeholder="Short description about the product"
            required
            className="w-full rounded-lg bg-gray-800 border border-gray-700 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        {/* Price */}
        <div>
          <label htmlFor="price" className="block text-sm font-medium mb-1">
            Price (₹)
          </label>
          <input
            id="price"
            name="price"
            type="number"
            value={newProduct.price}
            onChange={(e) =>
              setNewProduct({ ...newProduct, price: e.target.value })
            }
            placeholder="e.g. 1999"
            required
            className="w-full rounded-lg bg-gray-800 border border-gray-700 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        {/* Category */}
        <div>
          <label htmlFor="category" className="block text-sm font-medium mb-1">
            Category
          </label>
          <select
            id="category"
            name="category"
            value={newProduct.category}
            onChange={(e) =>
              setNewProduct({ ...newProduct, category: e.target.value })
            }
            required
            className="w-full rounded-lg bg-gray-800 border border-gray-700 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            <option value="">Select a category</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </option>
            ))}
          </select>
        </div>

        {/* Image Upload */}
        <div className="flex items-center gap-3">
          <input
            type="file"
            id="image"
            accept="image/*"
            className="sr-only"
            onChange={(e) =>
              setNewProduct({ ...newProduct, image: e.target.files?.[0]?.name || "" })
            }
          />
          <label
            htmlFor="image"
            className="inline-flex items-center gap-2 cursor-pointer bg-gray-800 text-gray-300 hover:bg-gray-700 px-4 py-2 rounded-md text-sm border border-gray-600 focus:ring-2 focus:ring-emerald-500"
          >
            <Upload className="w-4 h-4" />
            Upload Image
          </label>
          {newProduct.image && (
            <span className="text-sm text-gray-400">
              {newProduct.image}
            </span>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white py-2 rounded-lg text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 disabled:opacity-50"
        >
          {loading ? (
            <>
              <Loader className="h-5 w-5 animate-spin" />
              Loading...
            </>
          ) : (
            <>
              <PlusCircle className="h-5 w-5" />
              Create Product
            </>
          )}
        </button>
      </form>
    </motion.div>
  );
};

export default CreateProductForm;
