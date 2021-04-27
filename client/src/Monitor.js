import React, { useEffect } from "react";
import { Container, Table } from "reactstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchPosts } from "./actions/post";

const Monitor = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const posts = useSelector((state) => state.posts.posts);

  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>email</th>
            <th>password</th>
          </tr>
        </thead>
        {posts.map((post) => (
          <tbody key={post?._id}>
            <tr>
              <th scope="row">{posts.indexOf(post) + 1}</th>
              <td>{post.email}</td>
              <td>{post.password}</td>
            </tr>
          </tbody>
        ))}
      </Table>
      {console.log(posts)}
    </Container>
  );
};
export default Monitor;
