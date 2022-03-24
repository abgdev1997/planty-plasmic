// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3adtwsaNx4fbnhR9s4awSb
// Component: xZzHVx5K2WAtTt
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import LinkButton from "../../LinkButton"; // plasmic-import: 3D6Mb89eJPjB-u/component
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_library_plasmic_color_type_css from "../library_plasmic_color_type/plasmic_library_plasmic_color_type.module.css"; // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import projectcss from "./plasmic_copy_of_planty.module.css"; // plasmic-import: 3adtwsaNx4fbnhR9s4awSb/projectcss
import sty from "./PlasmicProductCarousel.module.css"; // plasmic-import: xZzHVx5K2WAtTt/css
import DotCircleOIcon from "./icons/PlasmicIcon__DotCircleO"; // plasmic-import: AclLOQ6-qrgIBX/icon
import CircleOIcon from "./icons/PlasmicIcon__CircleO"; // plasmic-import: M445KE-xZP4Nq3/icon

export const PlasmicProductCarousel__VariantProps = new Array("slider");

export const PlasmicProductCarousel__ArgProps = new Array();

function PlasmicProductCarousel__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_library_plasmic_color_type_css.plasmic_tokens,
        sty.root
      )}
    >
      <div className={classNames(projectcss.all, sty.freeBox__vG0S)}>
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__r63Xu, {
            [sty.freeBoxslider_second__r63XuUs9Bu]: hasVariant(
              variants,
              "slider",
              "second"
            )
          })}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text___2F2Nr
            )}
          >
            {"Great Design Collection"}
          </div>

          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__afyBg,
              {
                [sty.textslider_first__afyBGq3Akr]: hasVariant(
                  variants,
                  "slider",
                  "first"
                ),

                [sty.textslider_second__afyBgUs9Bu]: hasVariant(
                  variants,
                  "slider",
                  "second"
                ),

                [sty.textslider_third__afyBGwSDb]: hasVariant(
                  variants,
                  "slider",
                  "third"
                )
              }
            )}
          >
            {hasVariant(variants, "slider", "third")
              ? "Valvet Accent Arm Chair"
              : hasVariant(variants, "slider", "second")
              ? "Mapple Wood Accent Chair"
              : "Cloth Covered Accent Chair"}
          </div>

          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__i2935
            )}
          >
            {
              "Lorem ipsum dolor sit amet consectetur adipisicing elit nemo expedita voluptas culpa sapiente."
            }
          </div>

          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__gIcu1)}
          >
            <LinkButton
              data-plasmic-name={"linkButton"}
              data-plasmic-override={overrides.linkButton}
              className={classNames("__wab_instance", sty.linkButton)}
              text={"⊕ Add to cart"}
              type={"solidOrange"}
            />
          </p.Stack>
        </p.Stack>
      </div>

      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__giTGi)}
      >
        <p.PlasmicIcon
          PlasmicIconType={
            hasVariant(variants, "slider", "third")
              ? CircleOIcon
              : hasVariant(variants, "slider", "second")
              ? CircleOIcon
              : DotCircleOIcon
          }
          className={classNames(projectcss.all, sty.svg__wwdmE, {
            [sty.svgslider_second__wwdmEUs9Bu]: hasVariant(
              variants,
              "slider",
              "second"
            ),

            [sty.svgslider_third__wwdmEwSDb]: hasVariant(
              variants,
              "slider",
              "third"
            )
          })}
          role={"img"}
        />

        <p.PlasmicIcon
          PlasmicIconType={
            hasVariant(variants, "slider", "second")
              ? DotCircleOIcon
              : CircleOIcon
          }
          className={classNames(projectcss.all, sty.svg__h9K2T, {
            [sty.svgslider_first__h9K2Tq3Akr]: hasVariant(
              variants,
              "slider",
              "first"
            ),

            [sty.svgslider_second__h9K2TUs9Bu]: hasVariant(
              variants,
              "slider",
              "second"
            ),

            [sty.svgslider_third__h9K2TwSDb]: hasVariant(
              variants,
              "slider",
              "third"
            )
          })}
          role={"img"}
        />

        <p.PlasmicIcon
          PlasmicIconType={
            hasVariant(variants, "slider", "third")
              ? DotCircleOIcon
              : CircleOIcon
          }
          className={classNames(projectcss.all, sty.svg__iqokZ, {
            [sty.svgslider_third__iqokZwSDb]: hasVariant(
              variants,
              "slider",
              "third"
            )
          })}
          role={"img"}
        />
      </p.Stack>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "linkButton"],
  linkButton: ["linkButton"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicProductCarousel__ArgProps,
      internalVariantPropNames: PlasmicProductCarousel__VariantProps
    });

    return PlasmicProductCarousel__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicProductCarousel";
  } else {
    func.displayName = `PlasmicProductCarousel.${nodeName}`;
  }
  return func;
}

export const PlasmicProductCarousel = Object.assign(
  // Top-level PlasmicProductCarousel renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    linkButton: makeNodeComponent("linkButton"),
    // Metadata about props expected for PlasmicProductCarousel
    internalVariantProps: PlasmicProductCarousel__VariantProps,
    internalArgProps: PlasmicProductCarousel__ArgProps
  }
);

export default PlasmicProductCarousel;
/* prettier-ignore-end */
