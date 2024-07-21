import { Details } from "@/components/details";

import allosaurusChibi from "public/images/allosaurus-chibi.gif";

export default function AllosaurusPage() {
  return (
    <div className="h-screen flex justify-center items-center min-w-[320px] p-4  border border-4 border-black border-t-0">
      <Details
        image={allosaurusChibi}
        alt="Chibi version of an Allosaurus"
        text="Allosaurus, (genus Allosaurus), large carnivorous dinosaurs that lived from 150 million to 144 million years ago during the Late Jurassic Period; they are best known from fossils found in the western United States, particularly from the Cleveland-Lloyd Quarry in Utah and the Garden Park Quarry in Colorado."
      />
    </div>
  );
}
