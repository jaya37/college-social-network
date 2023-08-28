export interface Post {
  id: number;
  title: string;
  approved: boolean;
  content: string;
  imageData: any;
  creator: string;
  likes: number;
  dislikes: number;
}
