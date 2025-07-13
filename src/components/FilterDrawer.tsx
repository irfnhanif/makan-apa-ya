import { Funnel } from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import { filterCategories } from "@/data/filter-categories";
import { Toggle } from "./ui/toggle";

type FilterDrawerProps = {
  selectedFilters: string[];
  onFilterChange: (filterName: string) => void;
};

function FilterDrawer({ selectedFilters, onFilterChange }: FilterDrawerProps) {
  return (
    <Drawer>
      <DrawerTrigger className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 w-9 mr-2">
        <Funnel className="h-4 w-4" />
      </DrawerTrigger>

      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle className="text-center">Filter by Category</DrawerTitle>
        </DrawerHeader>

        <div className="p-4 grid grid-cols-4 gap-4">
          {filterCategories.map((category) => {
            const Icon = category.icon; // Get the icon value

            return (
              <Toggle
                key={category.name}
                variant="outline"
                className="flex flex-col h-20 gap-2"
                pressed={selectedFilters.includes(category.name)}
                onPressedChange={() => onFilterChange(category.name)}
              >
                {typeof Icon === "string" ? (
                  <span className="text-2xl">{Icon}</span>
                ) : (
                  <Icon className="h-6 w-6" />
                )}
                <span className="text-xs">{category.name}</span>
              </Toggle>
            );
          })}
        </div>

        <DrawerFooter>
          <DrawerClose className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
            Terapkan {/* cspell: disable-line */}
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

export default FilterDrawer;
