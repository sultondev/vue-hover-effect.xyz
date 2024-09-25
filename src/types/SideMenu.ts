type SideMenuItemSub = {
	[key: string]: {
		title: string,
	};
}

type SideMenuItem = {
	sub: [
		string | SideMenuItemSub
	];
	menuIds: string[];
}

export type SideMenuType = SideMenuItem[]