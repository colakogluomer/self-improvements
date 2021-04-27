import PostModel from "../models/post.js";

class PostService {
  model = PostModel;

  async add({ email, password }) {
    const post = await this.model.create({
      email,
      password,
    });
    return post;
  }

  async getAll() {
    const posts = await this.model.find();

    return posts;
  }
}

export default new PostService();
