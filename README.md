# Repro Steps
- `cd ./appshell` and run `npm i` and then `npm run build`
- `cd ../someapp` and run `dotnet build`
- `cd ../layout` and run `dotnet build`
- `cd ../piral~/Someapp` and run `npm start`

#  Problem
1. Open the Sidebar by clicking on "Menu" in the top left
2. The menu can be closed via the x in the top right of the sidebar
3. When clicking on menu items the page changes, but the sidebar does not close.

We would need to call `CloseSidebar` in `layout\Components\Sidebar.razor` from `someapp\Components\MainNavigation.razor`,
or trigger an event from `someapp\Components\MainNavigation.razor` to be handled in `layout\Components\Sidebar.razor`.