export const RecipeRecommendations = ({ recipes, loading }) => {
  if (loading) {
    return <p className="text-center">Loading recommendations...</p>;
  }

  let recipeList = [];

  // Case 1: direct array (ideal case)
  if (Array.isArray(recipes)) {
    recipeList = recipes;
  }

  // Case 2: full backend response accidentally aa gaya
  else if (recipes?.recommended_recipe?.data) {
    recipeList = recipes.recommended_recipe.data;
  }

  if (!recipeList || recipeList.length === 0) {
    return (
      <p className="text-center text-gray-500">
        Select your mood and craving to get recommendations
      </p>
    );
  }

  return (
    <div className="space-y-4">
      {recipeList.map((recipe) => (
        <div
          key={recipe.recipe_id}
          className="border rounded-xl p-4 bg-white shadow-sm"
        >
          <h4 className="font-semibold text-lg">{recipe.recipe_title}</h4>

          <p className="text-sm text-gray-600 mt-1">
            {recipe.region} · {recipe.continent}
          </p>

          <p className="text-xs text-gray-500 mt-2">
            {Math.round(recipe.calories)} kcal
          </p>

          {recipe.img_url && (
            <img
              src={recipe.img_url}
              alt={recipe.recipe_title}
              className="mt-3 rounded-lg w-full max-h-48 object-cover"
            />
          )}
        </div>
      ))}
    </div>
  );
};
