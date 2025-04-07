from forgeapp_sdk import Forge, Page, Layout, IO, io_var, ctx_var
from .edit import edit_user
from data import users

user_detail_page = Page("Python User Detail")

@user_detail_page.handle
async def user_detail_page_handler(display:IO.Display):
    ctx = ctx_var.get()
    print(f"Detail page handler called")
    print(f"Params: {ctx.params}")
    print(f"Available users: {[user.id for user in users]}")

    user_id = ctx.params["id"]  # Get the user ID from the params dictionary
    print(f"User ID from Params: {user_id}")
    
    user = next((user for user in users if user.id == user_id), None)
    if user is None:
        return Layout(title="User Detail", children=[display.text(f"User with ID {user_id} not found.")])
    
    return Layout(
        title="User Detail Test",
        children=[
            display.text("This is a test detail page"),
            display.text(f"Params received: {ctx.params}")
        ]
    )