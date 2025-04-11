import { motion } from "framer-motion";
import { Trash, Star } from "lucide-react";
import { useProductStore } from "../stores/useProductStore";

const ProductsList = () => {
	const { deleteProduct, toggleFeaturedProduct, products } = useProductStore();

	console.log("products", products);

	return (
		<motion.div
			className="bg-gray-900 shadow-xl rounded-2xl overflow-hidden max-w-5xl mx-auto"
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8 }}
		>
			<table className="min-w-full divide-y divide-gray-800">
				<thead className="bg-gray-800">
					<tr>
						{["Product", "Price", "Category", "Featured", "Actions"].map((heading) => (
							<th
								key={heading}
								scope="col"
								className="px-6 py-4 text-left text-sm font-semibold text-gray-300 uppercase tracking-wide"
							>
								{heading}
							</th>
						))}
					</tr>
				</thead>

				<tbody className="bg-gray-900 divide-y divide-gray-800">
					{products?.map((product) => (
						<tr key={product._id} className="hover:bg-gray-800 transition-colors">
							<td className="px-6 py-4 whitespace-nowrap">
								<div className="flex items-center gap-4">
									<img
										className="h-10 w-10 rounded-full object-cover"
										src={product.image}
										alt={product.name}
									/>
									<span className="text-sm font-medium text-white">{product.name}</span>
								</div>
							</td>

							<td className="px-6 py-4 whitespace-nowrap">
								<span className="text-sm text-gray-300">${product.price.toFixed(2)}</span>
							</td>

							<td className="px-6 py-4 whitespace-nowrap">
								<span className="text-sm text-gray-300">{product.category}</span>
							</td>

							<td className="px-6 py-4 whitespace-nowrap">
								<button
									onClick={() => toggleFeaturedProduct(product._id)}
									className={`p-2 rounded-full ${
										product.isFeatured
											? "bg-yellow-400 text-gray-900"
											: "bg-gray-700 text-gray-300"
									} hover:brightness-110 transition`}
								>
									<Star className="h-5 w-5" />
								</button>
							</td>

							<td className="px-6 py-4 whitespace-nowrap">
								<button
									onClick={() => deleteProduct(product._id)}
									className="text-red-400 hover:text-red-300 transition"
								>
									<Trash className="h-5 w-5" />
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</motion.div>
	);
};

export default ProductsList;
