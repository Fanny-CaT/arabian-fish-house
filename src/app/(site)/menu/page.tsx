import { MenuContainer } from "@/components/menu/MenuComponents";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu | Arabian Fish House",
  description: "Explore our full menu of Levantine seafood delicacies, from fresh catches to traditional mezzes.",
};

export default function MenuPage() {
  return (
    <>
      <div className="pt-24 bg-navy">
        {/* Placeholder for top spacing so navbar doesn't cover content */}
      </div>
      <MenuContainer />
    </>
  );
}
