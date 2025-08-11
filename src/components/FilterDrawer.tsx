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
import {
  mainCategories,
  attributeCategories,
  categoryVisibility,
} from "@/data/filter-categories";
import { Toggle } from "./ui/toggle";

type FilterDrawerProps = {
  selectedMainCategory: string;
  selectedFilters: string[];
  onFilterChange: (filterName: string) => void;
  onMainCategoryChange: (mainCategory: string) => void;
};

function FilterDrawer({
  selectedMainCategory,
  selectedFilters,
  onFilterChange,
  onMainCategoryChange,
}: FilterDrawerProps) {
  const getVisibleCategories = () => {
    return categoryVisibility[
      selectedMainCategory as keyof typeof categoryVisibility
    ];
  };

  const visibleCategories = getVisibleCategories();

  const renderCategorySection = (
    title: string,
    categories: any[],
    visibleNames: string[]
  ) => {
    const filteredCategories = categories.filter((cat) =>
      visibleNames.includes(cat.name)
    );

    if (filteredCategories.length === 0) return null;

    return (
      <div className="mb-6">
        <h3 className="text-sm font-medium mb-3 text-gray-700">{title}</h3>
        <div className="grid grid-cols-3 gap-2">
          {filteredCategories.map((category) => {
            const Icon = category.icon;
            return (
              <Toggle
                key={category.name}
                variant="outline"
                className="flex flex-col h-16 gap-1 text-xs"
                pressed={selectedFilters.includes(category.name)}
                onPressedChange={() => onFilterChange(category.name)}
              >
                {typeof Icon === "string" ? (
                  <span className="text-lg">{Icon}</span>
                ) : (
                  <Icon className="h-4 w-4" />
                )}
                <span className="text-xs leading-tight p-0.5">{category.name}</span>
              </Toggle>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <Drawer>
      <DrawerTrigger className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 w-9 mr-2">
        <Funnel className="h-4 w-4" />
      </DrawerTrigger>

      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle className="text-center">Filter Makanan</DrawerTitle>
        </DrawerHeader>

        <div className="p-4 max-h-[60vh] overflow-y-auto">
          <div className="mb-6">
            <h3 className="text-sm font-medium mb-3 text-gray-700">
              Utama
            </h3>
            <div className="grid grid-cols-3 gap-2">
              {mainCategories.map((category) => {
                const Icon = category.icon;
                return (
                  <Toggle
                    key={category.name}
                    variant="outline"
                    className="flex flex-col h-16 gap-1 text-xs"
                    pressed={selectedMainCategory === category.name}
                    onPressedChange={() =>
                      onMainCategoryChange(
                        selectedMainCategory === category.name
                          ? "Makanan Utama"
                          : category.name
                      )
                    }
                  >
                    <Icon className="h-4 w-4" />
                    <span className="text-xs leading-tight">
                      {category.name}
                    </span>
                  </Toggle>
                );
              })}
            </div>
          </div>

          {selectedMainCategory && (
            <>
              {renderCategorySection(
                "Lainnya",
                attributeCategories.lainnya,
                visibleCategories.lainnya
              )}
            </>
          )}
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
