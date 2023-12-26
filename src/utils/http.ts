interface Config {}

export default function request(
  url: URL,
  config?: {
    method: "GET";
    headers: {
      Authorization: `Bearer 60b094d64d8851fa2db62e9aca8af3dbf7ca6e7efe98bf11adf9d3691aed0ad8fa2dca5fb5305b57a0205a0ebbc8b319171098c25b1d092c9e81f936bcb871d588eed1b7af578373d1a71aca5189d83af7d7dd162ddaac4f37d97982e9c484cbf011dc81c8a9e9c34159056d4c66d53a211884426e5f7a81931d8061f5ae2924`;
    };
  }
): Promise<any> {
  return fetch(url, config);
}
