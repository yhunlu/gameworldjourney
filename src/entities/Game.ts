import { Genre, Platform, Publisher, Tag } from '.';

export default interface Game {
  id: number;
  name: string;
  slug: string;
  genres: Genre[];
  publishers: Publisher[];
  tags: Tag[];
  description_raw: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
  released: string;
}
