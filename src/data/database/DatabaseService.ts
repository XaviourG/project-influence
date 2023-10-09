import { $Enums, Article, PrismaClient } from "@prisma/client";
import IDatabaseService from "./interface/IDatabaseService";
import prisma from "./prisma/prisma";
import { Result, ResultFactory } from "../utilities/result";
import { ArticlePreview } from "../models/article";

class DatabaseService implements IDatabaseService {
  constructor() {
    this.client = prisma;
  }

  private client: PrismaClient;

  getArticle = async (path: string): Promise<Result<Article>> => {
    let article: Article | null = null;
    try { 
      console.log({ before: article });
      article = await this.client.article.findUnique({ where: { pathname: path.toLocaleLowerCase() } });
      console.log({ after: article });
      if (!article) {
        throw new Error('Could not find database entity');
      }
    } catch (e: any) {
      console.error(e);
      return ResultFactory.createFailure<Article>(e?.message);
    }
    return ResultFactory.createSuccess(article as Article)
  };
    
  getManyArticlePreview = async (): Promise<Result<ArticlePreview[]>> => {
    let articleList: ArticlePreview[] = [];
    try { 
      articleList = await this.client.article.findMany();
      if (!(articleList?.length > 0)) {
        throw new Error('Could not find any database entities');
      }
    } catch (e: any) {
      return ResultFactory.createFailure<ArticlePreview[]>(e?.message);
    }
    return ResultFactory.createSuccess(articleList)
  }
}

// database singleton

let databaseInstance: IDatabaseService | undefined;

export const getDatabaseService = () => {
  if (databaseInstance) {
    return databaseInstance;
  }

  databaseInstance = new DatabaseService();
  return databaseInstance;
};