import React, { useState } from "react";
import grabFoodIcon from "@/assets/grabfood.png";
import mapsIcon from "@/assets/maps.png";
import { Copy } from "lucide-react";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import { Toaster, toast } from "sonner";

type InterestedDrawerProps = {
  displayedFood: string;
};

function InterestedDrawer({
  displayedFood,
}: InterestedDrawerProps): React.ReactElement {
  const [isOpen, setIsOpen] = useState(false);

  const handleGMapsButtonClick = () => {
    if (!displayedFood) return;

    // cspell:disable-next-line
    const displayedFoodQuery = displayedFood.toLowerCase() + " terdekat";
    const googleMapsURL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      displayedFoodQuery
    )}`;

    const newWindow = window.open(
      googleMapsURL,
      "_blank",
      "noopener, noreferrer"
    );
    if (newWindow) newWindow.opener = null;
  };

  const handleGrabFoodButtonClick = () => {
    if (!displayedFood) return;

    const displayedFoodQuery = displayedFood.toLowerCase();
    const grabFoodURL = `https://food.grab.com/id/id/restaurants?lng=id&search=${encodeURIComponent(
      displayedFoodQuery
    )}&support-deeplink=true&searchParameter=${encodeURIComponent(
      displayedFoodQuery
    )}`;

    const newWindow = window.open(
      grabFoodURL,
      "_blank",
      "noopener, noreferrer"
    );
    if (newWindow) newWindow.opener = null;
  };

  const handleCopyButtonClick = async () => {
    const lowerCaseDisplayedFood = displayedFood.toLowerCase();
    const showSuccessToast = () => {
      // cspell:disable-next-line
      toast.success(
        <div>
          <strong>{displayedFood}</strong> telah disalin ke clipboard
        </div>
      );
    };

    const showErrorToast = () => {
      // cspell:disable-next-line
      toast.error("Gagal menyalin ke clipboard");
    };

    try {
      await navigator.clipboard.writeText(lowerCaseDisplayedFood);
      showSuccessToast();
    } catch (error) {
      console.error("Failed to copy text to clipboard:", error);
      try {
        const textArea = document.createElement("textarea");
        textArea.value = lowerCaseDisplayedFood;
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
        showSuccessToast();
      } catch (fallbackError) {
        console.error("Fallback copy method failed:", fallbackError);
        showErrorToast();
      }
    }
  };

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

        <div className="px-4 pt-4 pb-14 space-y-4">
          <div className="flex justify-center space-y-2">
            <Button
              className="w-2/3 h-10 inline-flex items-center px-4 py-2"
              onClick={handleGMapsButtonClick}
            >
              <img src={mapsIcon} alt="Icon Google Maps" className="h-7 w-7" />
              {/* cspell:disable-next-line */}
              Cek di Google Maps
            </Button>
          </div>

          <div className="flex justify-center space-y-2">
            <Button
              className="w-2/3 h-10 inline-flex items-center px-4 py-2 bg-[#00B14F] text-white"
              onClick={handleGrabFoodButtonClick}
            >
              <img src={grabFoodIcon} alt="Icon GrabFood" className="h-7 w-7" />
              {/* cspell:disable-next-line */}
              Pesan di GrabFood
            </Button>
          </div>

          <Label className="text-xs text-center block text-gray-500">
            {/* cspell:disable-next-line */}
            Khusus untuk GoFood, ShopeeFood, dll.
          </Label>
          <div className="flex justify-center space-y-2">
            <Button
              variant="outline"
              className="w-2/3 h-10 inline-flex items-center px-4 py-2"
              onClick={handleCopyButtonClick}
            >
              <Copy />
              {/* cspell:disable-next-line */}
              Salin nama makanan
            </Button>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

export default InterestedDrawer;
