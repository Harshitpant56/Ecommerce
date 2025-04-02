import { Link } from "react-router-dom";

const CategoryItem = ({ category }) => {
	return (
		<div className="relative w-full h-96 rounded-2xl overflow-hidden group shadow-lg">
			<Link to={`/category${category.href}`} className="block w-full h-full">
				<img
					src={category.imageUrl}
					alt={category.name}
					loading="lazy"
					className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
				/>
				<div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/70 z-10 transition-opacity" />
				<div className="absolute bottom-0 left-0 right-0 p-6 z-20">
					<h3 className="text-white text-3xl font-semibold drop-shadow-lg">{category.name}</h3>
					<p className="text-gray-300 text-sm mt-1">Explore {category.name}</p>
				</div>
			</Link>
		</div>
	);
};

export default CategoryItem;
