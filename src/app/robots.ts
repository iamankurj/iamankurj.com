import type { MetadataRoute } from "next";

import { buildRobotsConfig } from "@/resources/siteIndexing";

export default function robots(): MetadataRoute.Robots {
  return buildRobotsConfig();
}
