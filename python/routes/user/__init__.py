from forgeapp_sdk import Forge, Page, Layout, IO, ctx_var
from .edit import edit_user
from data import users, User

user_page = Page("Python Users")

@user_page.handle
async def home_page(display: IO.Display):
    ctx = ctx_var.get()
    print(f"Context: {dir(ctx)}")

    # Access the params directly
    params = ctx.params  
    
    if params:
        print(f"PARAMS: {params}") 
    else:
        print("No params available.")

    for user in users:
        print(f"USER:  {user.name}, ID: {user.id}")
    
    table_data = [
        {
            "name": {
                "label": user.name, 
                "route": "user/detail",  
                "params": {"id": user.id}  
            },
            "id": user.id,
            "company": user.company,
            "email": user.email
        }  
        for user in users
    ]

    return Layout(
        title="Python User Dash",
        menu_items=[{"route": "empty_page", "label": "Hide layout"}],
        children=[
            display.table(
                label="Users", 
                data=table_data,
                columns=[
                    {
                        "label": "Name",
                        "renderCell": lambda row: {
                            "label": row["name"]["label"],  # Display the username
                            "route": row["name"]["route"],  # Link to user/detail
                            "params": row["name"]["params"]  # Pass the user ID as a parameter
                        }
                    },
                    {"label": "ID", "renderCell": lambda row: row["id"]},
                    {"label": "Email", "renderCell": lambda row: row["email"]} 
                ],
                row_menu_items=lambda row: [
                    {
                        "label": "View Details",
                        "route": "user/detail",
                        "params": {"id": row["id"]}
                    },
                    {
                        "label": "Edit User",
                        "route": "user/edit",
                        "params": {"id": row["id"]}
                    },
                    {
                        "label": "Delete User",
                        "route": "user/delete",
                        "params": {"id": row["id"]},
                        "theme": "danger"
                    }
                ],
                is_sortable=True,
                is_filterable=False
                )
        ]
    )

# @user_page.action
# async def create_user(io: IO):
#     name = await io.input.text("Name")    

#     return f"Created ${name}"

@user_page.action
async def spreadsheet(io: IO):
    sheet = await io.experimental.spreadsheet(
            "Add a spreadsheet",
        columns={
            "firstName": "string",
            "last_name": "string",
            "age": "number?",
        },
    )

# user_page.action(edit_user, unlisted=True)
