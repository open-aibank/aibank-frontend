import sdkIcon from "@/assets/menus/sdk-icon.svg";
import icon8004 from "@/assets/menus/8004.svg";
import serverIcon from "@/assets/menus/server-icon.svg";
import networkIcon from "@/assets/menus/network-icon.svg";
import fileIcon from "@/assets/menus/file-icon.svg";
import commonConfig from "./common";

import type { HeaderNavItem } from "@/components/Header/types";

export const getMenuItems = (language: string): HeaderNavItem[] => {
  const docUrl = language.startsWith("zh") ? commonConfig.docUrlZh : commonConfig.docUrlEn;

  return [
    {
      id: "components",
      hasDropdown: true,
      dropdownItems: [
        {
          id: "x402-sdk",
          title: "menu.dropdown.components.x402Sdk.title",
          subtitle: "menu.dropdown.components.x402Sdk.subtitle",
          icon: sdkIcon,
          href: commonConfig.x402,
        },
        {
          id: "trc-8004",
          title: "menu.dropdown.components.trc8004.title",
          subtitle: "menu.dropdown.components.trc8004.subtitle",
          icon: icon8004,
          href: commonConfig.trc8004,
        },
        {
          id: "tron-mcp-server",
          title: "menu.dropdown.components.tronMcpServer.title",
          subtitle: "menu.dropdown.components.tronMcpServer.subtitle",
          icon: serverIcon,
          href: commonConfig.mcp,
        },
        {
          id: "openclaw-extension",
          title: "menu.dropdown.components.openclawExtension.title",
          subtitle: "menu.dropdown.components.openclawExtension.subtitle",
          icon: networkIcon,
          href: commonConfig.openclawextension,
        },
      ],
    },
    {
      id: "features",
    },
    {
      id: "developers",
      hasDropdown: true,
      dropdownItems: [
        {
          id: "docs",
          title: "menu.dropdown.developers.docs.title",
          subtitle: "menu.dropdown.developers.docs.subtitle",
          icon: fileIcon,
          href: docUrl,
        },
      ],
    },
    {
      id: "github",
      href: commonConfig.github,
    },
  ];
};
