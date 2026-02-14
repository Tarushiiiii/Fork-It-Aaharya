export const RecipeRecommendations = ({ recipes, loading }) => {
  if (loading) {
    return <p className="text-center">Loading recommendations...</p>;
  }

  if (!recipes || recipes.length === 0) {
    return (
      <p className="text-center text-gray-500">
        Select your mood and craving to get recommendations
      </p>
    );
  }

  return (
    <div className="space-y-4">
      {recipes.map((recipe) => (
        <div key={recipe.id} className="border rounded-xl p-4 bg-white">
          <h4 className="font-semibold">{recipe.title}</h4>
          <p className="text-sm text-gray-600">{recipe.reason}</p>
          <p className="text-xs text-gray-500 mt-1">{recipe.calories} kcal</p>
        </div>
      ))}
    </div>
  );
};
