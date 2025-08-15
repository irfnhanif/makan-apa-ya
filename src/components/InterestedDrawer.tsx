import React, { useState } from "react";
import grabFoodIcon from "@/assets/grabfood.png";
import mapsIcon from "@/assets/maps.png";
import { Copy } from "lucide-react";
import { Button } from "./ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";

type InterestedDrawerProps = {
  displayedFood: string;
};

function InterestedDrawer({
  displayedFood,
}: InterestedDrawerProps): React.ReactElement {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger asChild>
        <Button
          size="lg"
          className="h-10 text-base w-full bg-[#ff9c6e] text-white hover:bg-[#e68a61]"
          onClick={() => setIsOpen(true)}
        >
          {/* cspell:disable-next-line */}
          Menarik nih..
        </Button>
      </DrawerTrigger>

      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle className="text-center text-xl">
            {displayedFood}
          </DrawerTitle>
          <DrawerDescription className="text-center text-gray-600">
            {/* cspell:disable-next-line */}
            Tertarik? Cek di Google Maps atau pesan di GrabFood.
          </DrawerDescription>
        </DrawerHeader>

        <div className="p-4 space-y-4">
          <div className="flex justify-center space-y-2">
            <Button
              className="w-2/3 h-10 inline-flex items-center px-4 py-2"
              onClick={() => {}}
            >
              <img src={mapsIcon} alt="Icon Google Maps" className="h-7 w-7" />
              {/* cspell:disable-next-line */}
              Cek di Google Maps
            </Button>
          </div>

          <div className="flex justify-center space-y-2">
            <Button
              className="w-2/3 h-10 inline-flex items-center px-4 py-2 bg-[#00B14F] text-white"
              onClick={() => {}}
            >
              <img src={grabFoodIcon} alt="Icon GrabFood" className="h-7 w-7" />
              {/* cspell:disable-next-line */}
              Pesan di GrabFood
            </Button>
          </div>

          <div className="flex justify-center space-y-2">
            <Button
              variant="outline"
              className="w-2/3 h-10 inline-flex items-center px-4 py-2"
              onClick={() => {}}
            >
              <Copy />
              {/* cspell:disable-next-line */}
              Salin nama makanan
            </Button>
          </div>
        </div>

        <DrawerFooter>
          <DrawerClose asChild>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

export default InterestedDrawer;
