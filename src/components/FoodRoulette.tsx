import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardHeader, CardContent, CardFooter } from "./ui/card";
import { foods } from "@/data/foods";

function FoodRoulette() {
  const [rolling, setRolling] = useState<boolean>(false);
  const [displayedFood, setDisplayedFood] = useState<string | null>(null);

  const handleRoll = () => {
    setRolling(true);
    let rollCount = 0;
    const maxRolls = 30;
    const interval = setInterval(() => {
      const randomFood = foods[Math.floor(Math.random() * foods.length)];
      setDisplayedFood(randomFood);
      rollCount++;
      if (rollCount >= maxRolls) {
        clearInterval(interval);
        setRolling(false);
      }
    }, 60);
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-50">
      <Card className="w-full max-w-md  min-h-screen mx-auto rounded-xl shadow-md flex flex-col p-6">
        <CardHeader className="mb-6">
          {/* // cspell:disable-next-line */}
          <p className="text-3xl pacifico-regular text-center">Makan apa ya?</p>
        </CardHeader>
        <CardContent className="flex-1 flex items-center justify-center mb-24">
          <h1 className="text-5xl font-bold font-kalam text-center animate-in fade-in zoom-in duration-500">
            {displayedFood ? displayedFood : "?"}
          </h1>
        </CardContent>
        <CardFooter>
          <Button size="lg" className="w-full" onClick={handleRoll} disabled={rolling}>
            {/* // cspell:disable-next-line */}
            {rolling ? "Memilih..." : "Beritahu dong!"}
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
}

export default FoodRoulette;
