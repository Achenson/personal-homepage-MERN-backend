export interface SingleTabDataBasic {
    title: string;
    color: string | null;
    column: number;
    priority: number;
    openedByDefault: boolean;
    deletable: boolean;
    type: "folder" | "note" | "rss";
    noteInput?: string | null;
    rssLink?: string | null;
    date?: boolean | null;
    description?: boolean | null;
    itemsPerPage?: number | null;
    // items?: [object] | never[] | [];
  }

  export interface SingleBookmarkDataBasic {
    title: string;
    URL: string;
    defaultFaviconFallback: boolean;
  }

  export interface GlobalSettingsState {
    id: string;
    userId: string;
    picBackground: boolean;
    defaultImage: string;
    oneColorForAllCols: boolean;
    limitColGrowth: boolean;
    hideNonDeletable: boolean;
    disableDrag: boolean;
    numberOfCols: 1 | 2 | 3 | 4;
    // rss settings
    date: boolean;
    description: boolean;
    itemsPerPage: number;
    // new
    backgroundColor: string;
    folderColor: string;
    noteColor: string;
    rssColor: string;
    uiColor: string;
    colColor_1: string;
    colColor_2: string;
    colColor_3: string;
    colColor_4: string;
    colColorImg_1: string;
    colColorImg_2: string;
    colColorImg_3: string;
    colColorImg_4: string;
  }