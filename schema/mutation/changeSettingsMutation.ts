import { GraphQLError } from "graphql";

const Settings = require("../../mongoModels/settingsSchema");

import { RequestWithAuth } from "../middleware/isAuth";

import {
  SettingsFields,
  SettingsType,
  SettingsDatabase_i,
} from "../types/settingsType";

export const changeSettingsMutationField = {
  type: SettingsType,
  args: {
    ...SettingsFields,
  },
  resolve(
    _source: unknown,
    args: SettingsDatabase_i,
    request: RequestWithAuth
  ) {
    if (!request.isAuth) {
      return new GraphQLError("Auth error");
    }

    let update = {
      picBackground: args.picBackground,
      defaultImage: args.defaultImage,
      oneColorForAllCols: args.oneColorForAllCols,
      limitColGrowth: args.limitColGrowth,
      hideNonDeletable: args.hideNonDeletable,
      disableDrag: args.disableDrag,
      numberOfCols: args.numberOfCols,
      date: args.date,
      description: args.description,
      itemsPerPage: args.itemsPerPage,
      backgroundColor: args.backgroundColor,
      folderColor: args.folderColor,
      noteColor: args.noteColor,
      rssColor: args.rssColor,
      uiColor: args.uiColor,
      colColor_1: args.colColor_1,
      colColor_2: args.colColor_2,
      colColor_3: args.colColor_3,
      colColor_4: args.colColor_4,
      colColorImg_1: args.colColorImg_1,
      colColorImg_2: args.colColorImg_2,
      colColorImg_3: args.colColorImg_3,
      colColorImg_4: args.colColorImg_4,
    };

    return Settings.findOneAndUpdate({ userId: args.userId }, update, {
      // to return updated object
      new: true,
      upsert: false, // Make this update into an upsert,
      useFindAndModify: false,
    });
  },
};
