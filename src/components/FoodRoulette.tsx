import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardHeader, CardContent, CardFooter } from "./ui/card";
import { foods } from "@/data/foods";
import FilterDrawer from "./FilterDrawer";
import InterestedDrawer from "./InterestedDrawer";

function FoodRoulette() {
  const [rolling, setRolling] = useState<boolean>(false);
  const [displayedFood, setDisplayedFood] = useState<string | null>(null);
  const [animationKey, setAnimationKey] = useState<number>(0);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [selectedMainCategory, setSelectedMainCategory] =
    useState<string>("Makanan Utama");

  const handleFilterChange = (filterName: string) => {
    setSelectedFilters((prev) =>
      prev.includes(filterName)
        ? prev.filter((f) => f !== filterName)
        : [...prev, filterName]
    );
  };

  const handleMainCategoryChange = (mainCategory: string) => {
    setSelectedMainCategory(mainCategory);
  };

  const getFilteredFoods = () => {
    const mainFilteredFoods =
      selectedMainCategory === "Makanan Utama"
        ? foods.filter(
            (food) =>
              !(
                food.categories?.includes("Minuman") ||
                food.categories?.includes("Snack")
              )
          )
        : foods.filter((food) =>
            food.categories?.includes(selectedMainCategory)
          );

    if (selectedFilters.length === 0) {
      return mainFilteredFoods;
    }

    return mainFilteredFoods.filter((food) =>
      selectedFilters.some((filter) => food.categories?.includes(filter))
    );
  };

  const handleRoll = () => {
    setRolling(true);
    let rollCount = 0;
    const maxRolls = 6;
    const filteredFoods = getFilteredFoods();
    const interval = setInterval(() => {
      const randomFood =
        filteredFoods[Math.floor(Math.random() * filteredFoods.length)];
      setDisplayedFood(randomFood.name);
      setAnimationKey((prev) => prev + 1);
      rollCount++;
      if (rollCount >= maxRolls) {
        clearInterval(interval);
        setRolling(false);
      }
    }, 60);
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-50">
      <Card className="w-full min-h-screen mx-auto rounded-xl shadow-md flex flex-col p-6">
        <CardHeader className="mb-6">
          <p className="text-3xl pacifico-regular text-center">Makan apa ya?</p>
          <p className="text-sm text-gray-500 text-center mt-2">
            Bingung mau makan apa? Coba klik deh...
          </p>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col items-center justify-center mb-20">
          <h1
            key={animationKey}
            className="text-5xl font-bold knewave-regular text-center transition-transform animate-zoomIn"
          >
            {displayedFood ? displayedFood : "?"}
          </h1>
          {/* cspell:disable-next-line */}
          {displayedFood && (
            <Button variant="link" className="mt-6">
              Lihat gambar?
            </Button>
          )}
        </CardContent>
        <CardFooter className="grid grid-rows-2 gap-2 pb-2">
          <div className="row-start-1">
            {displayedFood && (
              <InterestedDrawer displayedFood={displayedFood} />
            )}
          </div>
          <div className="flex items-center gap-2 row-start-2">
            <FilterDrawer
              selectedFilters={selectedFilters}
              selectedMainCategory={selectedMainCategory}
              onFilterChange={handleFilterChange}
              onMainCategoryChange={handleMainCategoryChange}
            />
            <Button
              size="lg"
              className="flex-1 h-14 text-lg"
              onClick={handleRoll}
              disabled={rolling}
            >
              {/* cspell:disable-next-line */}
              {displayedFood
                ? rolling
                  ? "Memilih..."
                  : "Cari yang lain"
                : rolling
                ? "Memilih..."
                : "Beritahu dong!"}
            </Button>
          </div>
        </CardFooter>
      </Card>
    </main>
  );
}

export default FoodRoulette;
