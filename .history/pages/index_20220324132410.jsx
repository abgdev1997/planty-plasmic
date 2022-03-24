// This is a skeleton starter React page generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import Button from "../components/Button";
import ButtonArrowIcon from "../components/plasmic/copy_of_planty/icons/PlasmicIcon__ButtonArrow";
import { PlasmicHome } from "../components/plasmic/copy_of_planty/PlasmicHome";

function Home() {
  // Use PlasmicHome to render this component as it was
  // designed in Plasmic, by activating the appropriate variants,
  // attaching the appropriate event handlers, etc.  You
  // can also install whatever React hooks you need here to manage state or
  // fetch data.
  //
  // Props you can pass into PlasmicHome are:
  // 1. Variants you want to activate,
  // 2. Contents for slots you want to fill,
  // 3. Overrides for any named node in the component to attach behavior and data,
  // 4. Props to set on the root node.
  //
  // By default, PlasmicHome is wrapped by your project's global
  // variant context providers. These wrappers may be moved to
  // Next.js Custom App component
  // (https://nextjs.org/docs/advanced-features/custom-app).
  return <PlasmicHome ctaHero={<Button className="cta_hero" color="yellow">{'Empieza ya'}<ButtonArrowIcon></ButtonArrowIcon></Button>}/>;
}

export default Home;
