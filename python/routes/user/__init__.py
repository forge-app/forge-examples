from forgeapp_sdk import Page, Layout
from .edit import edit_user

user_page = Page("User")

user_detail_page = Page("User Detail")


@user_page.handle
async def home_page():
    return Layout(
        title="User Admin Dashboard",
        menu_items=[],
        children=[],
    )


user_page.action(edit_user, unlisted=True)
