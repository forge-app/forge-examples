import { Layout, Page, io } from "@forgeapp/sdk";
import { orders } from "../../data";

export default new Page({
  name: "Orders",
  handler: async (c) => {
    return new Layout({
      title: "Order Dashboard",
      children: [
        io.display.table("Weekly Orders", {
          data: orders,
          columns: [
            {
              label: "name",
              renderCell: (row) => ({
                label: row.id,
                route: "order/detail",
                params: {
                  id: row.id,
                },
              }),
            },
            "plan",
            "price",
            "purchaseDate",
          ],
          rowMenuItems: (row) => [
            {
              label: "View Details",
              route: "order/detail",
              params: { id: row.id },
            },
            {
              label: "Cancel Order",
              route: "order/cancel",
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
