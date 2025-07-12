import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardHeader, CardContent, CardFooter } from "./ui/card";
import { foods } from "@/data/foods";

function FoodRoulette() {
  const [rolling, setRolling] = useState<boolean>(false);
  const [displayedFood, setDisplayedFood] = useState<string | null>(null);
  const [animationKey, setAnimationKey] = useState<number>(0);

  const handleRoll = () => {
    setRolling(true);
    let rollCount = 0;
    const maxRolls = 6;
    const interval = setInterval(() => {
      const randomFood = foods[Math.floor(Math.random() * foods.length)];
      setDisplayedFood(randomFood);
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
      <Card className="w-full max-w-md min-h-screen mx-auto rounded-xl shadow-md flex flex-col p-6">
        <CardHeader className="mb-6">
          <p className="text-3xl pacifico-regular text-center">Makan apa ya?</p>
          <p className="text-sm text-gray-500 text-center mt-2">
            Pusing mau makan apa? Coba klik deh...
          </p>
        </CardHeader>
        <CardContent className="flex-1 flex items-center justify-center mb-24">
          <h1
            key={animationKey}
            className="text-5xl font-bold knewave-regular text-center transition-transform  animate-zoomIn"
          >
            {displayedFood ? displayedFood : "?"}
          </h1>
        </CardContent>
        <CardFooter>
          <Button
            size="lg"
            className="w-full"
            onClick={handleRoll}
            disabled={rolling}
          >
            {rolling ? "Memilih..." : "Beritahu dong!"}
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
}

export default FoodRoulette;
