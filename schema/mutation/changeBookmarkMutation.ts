import { GraphQLError } from "graphql";

const Bookmark = require("../../mongoModels/bookmarkSchema");
import { RequestWithAuth } from "../middleware/isAuth";

import {
  BookmarkFields,
  BookmarkDatabase_i,
  BookmarkType,
} from "../types/bookmarkType";

export const changeBookmarkMutationField = {
  type: BookmarkType,
  args: {
    ...BookmarkFields,
  },
  resolve(
    _source: unknown,
    args: BookmarkDatabase_i,
    request: RequestWithAuth
  ) {
    if (!request.isAuth) {
      return new GraphQLError("Auth error");
    }

    let update = {
      id: args.id,
      userId: args.userId,
      title: args.title,
      URL: args.URL,
      tags: args.tags,
      defaultFaviconFallback: args.defaultFaviconFallback,
    };

    return Bookmark.findByIdAndUpdate(args.id, update, {
      // to return updated object
      new: true,
      upsert: false,
      useFindAndModify: false,
    });
  },
};
