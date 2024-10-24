import { Layout, Page, io } from "@forgeapp/sdk";
import { environments } from "../../data";

export default new Page({
  name: "Customer Environments",
  handler: async (c) => {
    return new Layout({
      title: "Customer Environments Dashboard",
      children: [
        io.display.table("Customer Feature Flags", {
          data: environments,
          columns: [
            {
              label: "id",
              renderCell: (row) => ({
                label: row.id,
                route: "customer-envs/detail",
                params: {
                  id: row.id,
                },
              }),
            },
            "name",
            "FEATURE_DARK_MODE",
            "FEATURE_GRAPHS",
            "FEATURE_FORGE_V1",
          ],
          rowMenuItems: (row) => [
            {
              label: "View Environment Details",
              route: "customer-envs/detail",
              params: { id: row.id },
            },
            {
              label: "Restart Environment",
              route: "customer-envs/restart",
              params: { id: row.id },
              theme: "danger",
            },
          ],
          isSortable: true,
          isFilterable: false,
        }),
      ],
    });
  },
});
