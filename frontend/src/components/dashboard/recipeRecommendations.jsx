export const RecipeRecommendations = ({ recipes = [], loading }) => {
  if (loading) {
    return <p className="text-center">Loading recommendations...</p>;
  }

  if (!Array.isArray(recipes) || recipes.length === 0) {
    return (
      <p className="text-center text-gray-500">
        Select your mood and craving to get recommendations
      </p>
    );
  }

  return (
    <div className="space-y-4">
      {recipes.map((recipe, index) => (
        <div
          key={recipe.recipe_id ?? recipe.title ?? index}
          className="border rounded-xl p-4 bg-white shadow-sm"
        >
          {/* TITLE */}
          <h4 className="font-semibold text-lg">
            {recipe.recipe_title ?? recipe.title}
          </h4>

          {/* REGION + TIME */}
          <p className="text-sm text-gray-600 mt-1">
            {recipe.region} · {recipe.time} mins
          </p>

          {/* CALORIES */}
          <p className="text-xs text-gray-500 mt-2">
            {Math.round(recipe.calories)} kcal
          </p>

          {/* IMAGE */}
          {(recipe.img_url || recipe.image) && (
            <img
              src={recipe.img_url ?? recipe.image}
              alt={recipe.recipe_title ?? recipe.title}
              className="mt-3 rounded-lg w-full max-h-48 object-cover"
            />
          )}

          {/* REASON */}
          {recipe.reason && (
            <p className="text-sm text-green-700 mt-3">🌱 {recipe.reason}</p>
          )}

          {/* INGREDIENT */}
          {recipe.ingredients && (
            <p className="text-xs text-gray-500 mt-1">
              🥗 {recipe.ingredients}
            </p>
          )}

          {/* LINK */}
          {recipe.url && (
            <a
              href={recipe.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-600 underline mt-2 inline-block"
            >
              View full recipe →
            </a>
          )}
        </div>
      ))}
    </div>
  );
};
