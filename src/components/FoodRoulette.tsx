import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";

type FoodRouletteProps =  {
    suggestion: string | null
    onSuggestClick: () => void;
}

export function FoodRoulette({suggestion, onSuggestClick}: FoodRouletteProps) {
    const isInitiateState = suggestion === null

    return (
      <main className="flex items-center justify-center min-h-screen bg-gray-50">
        <Card className="w-[340px] h-[600px] flex flex-col">
          <CardHeader>
            {/* // cspell:disable-next-line */}
            <p className="text-2xl font-pacifico">Makan apa ya?</p>
          </CardHeader>
          <CardContent>
            {isInitiateState ? (
              <span className="text-9xl font-bold font-kalam text-gray-300">
                ?
              </span>
            ) : (
              <h1 className="text-5xl font-bold font-kalam text-center animate-in fade-in zoom-in duration-500">
                {suggestion}
              </h1>
            )}
          </CardContent>
          <CardFooter>
            <Button size="lg" className="w-full" onClick={onSuggestClick}>
              {/* // cspell:disable-next-line */}
              {isInitiateState ? "Beritahu dong!" : "Cari lagi"}
            </Button>
          </CardFooter>
        </Card>
      </main>
    );
}