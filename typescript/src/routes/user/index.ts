import { Action, Layout, Page, ctx, io } from "@forgeapp/sdk";
import { users, User, orders } from "../../data";

export default new Page({
  name: "Users",
  handler: async (c) => {
    return new Layout({
      title: "User Dashboard",
      children: [
        io.display.table("Active Users", {
          data: users,
          columns: [
            {
              label: "name",
              renderCell: (row) => ({
                label: row.name,
                route: "user/detail",
                params: {
                  id: row.id,
                },
              }),
            },
            "id",
            "email",
          ],
          rowMenuItems: (row) => [
            {
              label: "View Details",
              route: "user/detail",
              params: { id: row.id },
            },
            {
              label: "Edit User",
              route: "user/edit",
              params: { id: row.id },
            },
            {
              label: "Delete User",
              route: "user/delete",
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
